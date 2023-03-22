import {
  ActionIcon,
  Anchor,
  Badge,
  createStyles,
  ScrollArea,
  Table,
  Text,
  TextInput,
  Checkbox,
  MultiSelect
} from '@mantine/core';
import { Modal, Button, Group } from '@mantine/core';
import "react";
import React, {useContext, useEffect, useState} from 'react';
import {IconPencil, IconArrowsMaximize} from "@tabler/icons";
import { skills } from './Items';
import MultiSelector from '../components/multiSelectFilter';
import {util} from "protobufjs";
import emptyArray = util.emptyArray;
import {DatabaseContext} from "../contexts/DatabaseContext";
import TeamMemberModal from "./TeamMemberModal";



const useStyles = createStyles((theme: any) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },

}));




export default function SelectTeamMemberModal(props:any) {
  const [allEmployees, setAllEmployees] : any = useState([])
  const [currentSkills, setSkills] : any = useState([])
    const [opend, setOpend] : any = useState(false)
    const [clickedUser, setClickedUser] : any = useState({})
  const [currentEmployees, setCurrentEmployees] : any = useState([])
    const [currentInput, setCurrentInput] : any = useState("")
    const [markedEmployees, setMarkedEmployees] : any = useState([])
    const {fetchEmployees}: any = useContext(DatabaseContext)

  useEffect(() => {
      console.log("user effect")
      fetchEmployees(setAllEmployees)
      fetchEmployees(setCurrentEmployees)
  }, [])


  function handleShowEmployee(event: any) {
      //const tabelRow = event.target.parentElement.parentElement.parentElement.parentElement.parentElement
      //const clickedUser = currentEmployees[tabelRow.rowIndex - 1]
      //console.log(clickedUser)
      //setClickedUser(clickedUser)
  }

  function markEmployee(event: any,projectData: any, setProjectData: any) {
      const checked = event.target.checked
      const tabelRow = event.target.parentElement.parentElement.parentElement.parentElement.parentElement
      const clickedUser = currentEmployees[tabelRow.rowIndex - 1]

      if(checked){
          let helpData = {...projectData}
          helpData.teamMember.push(clickedUser)
          setMarkedEmployees(helpData.teamMember)
          setProjectData(helpData)
      }
      else
      {
          let helpData = {...projectData}
          helpData.teamMember.filter((e:any) => e.id == clickedUser.id)
          console.log(clickedUser)
          console.log(helpData.teamMember)
          setMarkedEmployees(helpData.teamMember)
          setProjectData(helpData)
      }
  }

  function filterName(event: any){
      if(event.target.value === ""){
          setCurrentEmployees(allEmployees)
      }else{
          setCurrentEmployees(filterByName(currentEmployees,event.target.value))
      }

  }

  function filterByName(employees: any[], searchName: any){
        return employees.filter(e => e.name.toLowerCase().includes(searchName.toLowerCase()))
  }

   function filterSkill(event: any){
      setSkills(event)
      if (event.length == 0){
          setCurrentEmployees(allEmployees)
      }else{
          setCurrentEmployees(filterBySkill(allEmployees,event))
      }
    }

    function filterBySkill(employees: any[], wantedSkills: any[]) {
      return employees.filter(e => containsAny(e.skills, wantedSkills))
    }

    function containsAny(xs: any[], ys: any[]) {
        return xs.some(x => ys.includes(x))
    }

    //   function isMarked(index: any){
    //    return markedEmployees.includes(currentEmployees[index])
    //}



  return (
    <Modal
    opened={props.opened}
    onClose={() => props.setOpened(false)}
    title="Introduce yourself!"
    size = "100%"
    >
      <ScrollArea>
        <TextInput
            onChange={e => filterName(e)}
            placeholder="..."
            styles={{
              input: {
                width: "80vw"
              },
            }}
        />
        <MultiSelect
            onChange={e=> filterSkill(e)}
            data={skills}
            limit={20}
            valueComponent={MultiSelector}
            searchable
            nothingFound="Nothing found"
            placeholder="Pick some skills for filtering"
            label="Skills"
            styles={{
              input: {
                border: "green",
                width: "30vw"
              },
            }}
        />
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
          <tr>
            <th/>
            <th>Employee</th>
            <th>Skills</th>
            <th>Type of Contract</th>
              <th>Location</th>
            <th />
          </tr>
          </thead>


          <tbody>{
              currentEmployees.map ((user: any, index : any) =>
              {
                 // const checked = false
                return (
                    <tr key={user.name}>
                      <td>
                        <Checkbox
                            onChange={e => markEmployee(e, props.projectData, props.setProjectData)}
                           // checked={checked}
                        />
                      </td>
                      <td>
                        <Group spacing="sm">
                          <Text size="sm" weight={500}>
                            {user.name}
                          </Text>
                        </Group>
                      </td>

                  <td>{
                    allEmployees[index].skills.map((skills: any, index2: any) =>{
                     return( <Badge
                          color={"green"}
                          key = {index2}
                      >
                        {user.skills[index2]}
                      </Badge>
                     )})
                  }

                  </td>
                  <td>
                    <Text size="sm" onClick={(event) => event.preventDefault()} styles={{
                        couler : "black"
                    }}>
                      {user.typeOfContract}
                    </Text>
                  </td>
                  <td>
                      <Text size="sm" onClick={(event) => event.preventDefault()} styles={{
                          couler : "black"
                      }}>
                          {user.location}
                      </Text>
                  </td>
                </tr>)
              }
          )

          }</tbody>
        </Table>
      </ScrollArea>
    </Modal>
  );
}


