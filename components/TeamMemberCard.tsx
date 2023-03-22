import { Avatar, Text, Button, Paper, Badge, Modal } from '@mantine/core';
import { CloseButton } from '@mantine/core';
import { useState } from 'react';
import TeamMemberModal from './TeamMemberModal';
export default function UserInfoAction(props: any) {
  const removeMemberFromList = function(props: any){
    const helpData = {...props.projectData}
    helpData.teamMember.splice(props.index, 1)
    props.setProjectData(helpData)
  }
  const [open, setOpen] = useState(false)
  return (
    <div>
    <TeamMemberModal opened = {open} onClose = {() => {setOpen(false)}} person = {props.person}>
        TEST
        </TeamMemberModal>

    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
      style = {{margin: "20px", padding: "10px"}}
    >
      <div style = {{display: "flex"}}>
      {/* <Avatar src={"assets/photo_test.avif"} size={120} radius={120} mx="auto" /> */}
      <div style ={{width: "90%"}}>
        <div style = {{marginLeft: "10px"}}>
        <Text align="center" size="lg" weight={500} mt="md">
          {props.person.name}
        </Text>
        <Text align="center" color="dimmed" size="sm">
            {props.person.location} • {props.person.typeOfContract}
        </Text> 
        </div>
      </div>
      <div>
      <CloseButton onClick = {() => removeMemberFromList(props)}/>
      </div>
      </div>
      <br></br>
      {
          props.person.skills.map((skills: any, index2: any) =>{
            if (index2 <= 2) {
              return( <Badge
                color={"cyan"}
                key = {index2}
                style ={{fontSize: "10px", marginRight: "10px"}}
            >
              {skills}
            </Badge>
           )}
            })
        }
      <Button variant="default" fullWidth mt="md" onClick = {()=>{setOpen(true)}}>
        See details
      </Button>
    </Paper>
    </div>
  );
}
