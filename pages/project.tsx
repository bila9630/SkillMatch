import { ActionIcon, TextInput } from '@mantine/core';
import { Button, Group } from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';
import { Grid, Modal } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { useContext, useState } from 'react';
import AuthRoute from '../components/AuthRoute';
import SelectTeamMemberModal from '../components/SelectTeamMemberModal';
import { DatabaseContext } from '../contexts/DatabaseContext';
import { IconPlus, IconReload } from '@tabler/icons';
import UserInfoAction from '../components/TeamMemberCard';
import { useStyles } from "../styles/globals";
import { StatsRingCard } from '../components/StatsRingCard'

export default function ProjectPage() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { addProject, fetchProjects }: any = useContext(DatabaseContext)

  const { classes } = useStyles();

  const [opened, setOpened] = useState(false);

  const [projectData, setProjectData]: any = useInputState({ name: "", client: { name: "", industry: "" }, dateStart: new Date(), dateEnd: new Date().setDate(new Date().getDate() + 90), teamMember: [] },);
  const [singleProject, setSingleProject]: any = useState(null)

  const updateData = function (e: any, attribute: any) {
    const help_data = { ...projectData }
    if (attribute instanceof Array) {
      console.log(attribute[0])
      help_data[attribute[0]][attribute[1]] = e.currentTarget.value
    }
    else {
      help_data[attribute] = e.currentTarget.value
    }
    setProjectData(help_data)
  }

  const updateDates = function (e: any) {
    if (!e.includes(null)) {
      const help_data = { ...projectData }
      help_data["dateStart"] = e[0]
      help_data["dateEnd"] = e[1]
      setProjectData(help_data)

    }
  }


  const testFunc = function () {
    console.log(projectData)
    addProject(projectData)
  }
  const [openedProject, setOpenedProject]: any = useState(false)
  let list = <p style={{ color: "gray" }}> No team members selected yet</p>
  if (projectData.teamMember.length > 0) {
    list = projectData.teamMember.map((el: any, i: any) => {
      return (<UserInfoAction person={el} index={i} projectData={projectData} setProjectData={setProjectData} key={i}></UserInfoAction>)
    })
  }
  return (
    <AuthRoute>
      <Modal
        opened={openedProject}
        withCloseButton={false}
        onClose={() => setOpenedProject(false)}
        size="75%"
        overlayBlur={3}
        title={<h3> Create a new project</h3>
        }
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", height: "100%", padding: "10px" }}>
            <SelectTeamMemberModal opened={opened} setOpened={setOpened} projectData={projectData} setProjectData={setProjectData} />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextInput label="Project Name" placeholder="" value={projectData.name} onChange={e => { updateData(e, "name") }} classNames={{ input: classes.inputBottom, label: classes.labelBottom }} />
              <br />
              <TextInput label="Client Name" placeholder="" onChange={e => { updateData(e, ["client", "name"]) }} classNames={{ input: classes.inputBottom, label: classes.labelBottom }} />
              <br />
              <TextInput label="Client Branche" placeholder="" onChange={e => { updateData(e, ["client", "industry"]) }} classNames={{ input: classes.inputBottom, label: classes.labelBottom }} />
              <br />
            </div>
            <br />
            <br></br>
            <TextInput label="Short Description" placeholder="" onChange={e => { updateData(e, "description") }} classNames={{ input: classes.inputBottom, label: classes.labelBottom }} />
            <br />
            <br></br>


            <DateRangePicker
              label="Duration of project"
              placeholder="Pick dates range"
              value={[projectData["dateStart"], projectData["dateEnd"]]}
              onChange={e => { updateDates(e) }}
            />
            <br></br>
            <br></br>
            <Group position="left" style={{ marginBottom: "10px" }}>
              <Button variant="light" color="black" onClick={() => setOpened(true)} leftIcon={<IconPlus size={14} />}>Add Team member</Button>
            </Group>
            <div style={{ display: "flex", border: "solid 2px lightgray", padding: "10px" }}>
              {list}
            </div>
            <br></br>
            <br></br>
            <div style={{ display: "flex", marginBottom: "20px", justifyContent: "center" }}>
              <Button variant="outline" color="teal" style={{ marginRight: "20px" }} onClick={() => { testFunc(); setOpenedProject(false);  fetchProjects(setSingleProject)}}>
                Create Project
              </Button>
              <Button variant="outline" color="red" style={{ marginLeft: "20px" }} onClick={() => setOpenedProject(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <div style={{ padding: "20px" }}>
        <h2>
          Project Overview
        </h2>
        <hr></hr>
        <Button variant = "light" onClick={() => setOpenedProject(true)} leftIcon={<IconPlus size={14} />} style = {{marginTop: "10px"}}> Create new project </Button>
        <br></br>
        <br></br>
        <div style = {{display: "flex", alignItems: "center"}}>
          <h2 style ={{marginRight: "10px"}}>Current Projects </h2>
          <ActionIcon> <IconReload onClick = {() => fetchProjects(setSingleProject)}></IconReload></ActionIcon>
        </div>
        <Grid>
          <Grid.Col sm={12} md={6} lg={3}>
            <StatsRingCard
              title="Project Finance"
              completed={1887}
              total={2334}
              stats={[
                { "value": 447, "label": "Remaining" },
                { "value": 76, "label": "In progress" },
              ]}
            />
          </Grid.Col>
          <Grid.Col sm={12} md={6} lg={3}>
            <StatsRingCard
              title="Project Banking"
              completed={200}
              total={1200}
              stats={[
                { "value": 600, "label": "Remaining" },
                { "value": 400, "label": "In progress" },
              ]}
            />
          </Grid.Col>
          <Grid.Col sm={12} md={6} lg={3}>
            <StatsRingCard
              title="Project E-System"
              completed={600}
              total={1200}
              stats={[
                { "value": 500, "label": "Remaining" },
                { "value": 100, "label": "In progress" },
              ]}
            />
          </Grid.Col>
          <Grid.Col sm={12} md={6} lg={3}>
            {singleProject !== null &&
              <StatsRingCard
                title={singleProject[0].name}
                completed={0}
                total={1}
                stats={[
                  { "value": 0, "label": "Remaining" },
                  { "value": 0, "label": "In progress" },
                ]}
              />
            }
          </Grid.Col>
        </Grid>
        <br></br>
        <h2>Past Projects</h2>
        <Grid>
          <Grid.Col sm={12} md={6} lg={3}>
            <StatsRingCard
              title="Project IoT"
              completed={1887}
              total={1887}
              stats={[
                { "value": 4.6, "label": "Customer's rating" },
                { "value": 4, "label": "Team's rating" },
              ]}
            />
          </Grid.Col>
          <Grid.Col sm={12} md={6} lg={3}>
            <StatsRingCard
              title="Project Cloud"
              completed={1200}
              total={1200}
              stats={[
                { "value": 4.2, "label": "Customer's rating" },
                { "value": 1.5, "label": "Team's rating" },
              ]}
            />
          </Grid.Col>
          <Grid.Col sm={12} md={6} lg={3}>
            <StatsRingCard
              title="Project VR"
              completed={1800}
              total={1800}
              stats={[
                { "value": 3.4, "label": "Customer's rating" },
                { "value": 4, "label": "Team's rating" },
              ]}
            />
          </Grid.Col>
          <Grid.Col sm={12} md={6} lg={3}>
            <StatsRingCard
              title="Code & Create"
              completed={1000}
              total={1000}
              stats={[
                { "value": 5, "label": "Customer's rating" },
                { "value": 5, "label": "Team's rating" },
              ]}
            />
          </Grid.Col>
        </Grid>
      </div>
    </AuthRoute>
  );
}

