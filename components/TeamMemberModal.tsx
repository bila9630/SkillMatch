import { Table, Center, Badge, createStyles, Modal } from "@mantine/core";
import { util } from "protobufjs";
import "react";
import emptyArray = util.emptyArray;

const useStyles = createStyles((theme: any) => ({
  root: {
    position: "relative",
  },

  input: {
    height: "auto",
    paddingTop: 18,
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

export default function TeamMemberModal(props: any) {
  console.log(props.person);

  return (
    <Modal opened={props.opened} onClose={props.onClose}>
      <Center>
        <h3>{props.person.name}</h3>
      </Center>
      <Table>
        <tbody>
          <tr>
            <td>
              <small>Type of Contract</small>
            </td>
            <td>{props.person.typeOfContract}</td>
          </tr>
          <tr>
            <td>
              <small>Location</small>
            </td>
            <td>{props.person.location}</td>
          </tr>
          <tr>
            <td>
              <small>Willingness to travel</small>
            </td>
            <td>{props.person.travel}%</td>
          </tr>
          <tr>
            <td style={{width: '130px'}}>
              <small>Weekly working hours</small>
            </td>
            <td>{props.person.hoursPerWeek}</td>
          </tr>
          <tr>
            <td>
              <small>Skills</small>
            </td>
            <td>
              {props.person.skills.map((skills: any, index2: any) => {
                return (
                  <Badge
                    color={"cyan"}
                    key={index2}
                    style={{ fontSize: "10px", marginRight: "10px" }}
                  >
                    {skills}
                  </Badge>
                );
              })}
            </td>
          </tr>
          <tr>
            <td>
              <small>Interests</small>
            </td>
            <td>
              {props.person.interests.map((skills: any, index2: any) => {
                return (
                  <Badge
                    color={"cyan"}
                    key={index2}
                    style={{ fontSize: "10px", marginRight: "10px" }}
                  >
                    {skills}
                  </Badge>
                );
              })}
            </td>
          </tr>
        </tbody>
      </Table>
    </Modal>
  );
}
