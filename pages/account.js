import { Text, Box, BackgroundImage, Flex, Stack, Button, Center, Grid, MultiSelect, Select, Slider, TextInput, Modal } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import DateRangePick from '../components/DateRangePick';
import { cities, contracts, interests, skills, willingToTravel } from '../components/Items';
import MultiSelector from '../components/MultiSelector';
import { DatabaseContext } from '../contexts/DatabaseContext';
import AuthRoute from '../components/AuthRoute';
import { useStyles } from "../styles/globals";
import { IconDeviceFloppy, IconPlus } from '@tabler/icons';

export default function Account() {
    const { classes } = useStyles();
    const [popupOpen, setPopupOpen] = useState(false);

    const { fetchEmployee, updateEmployee } = useContext(DatabaseContext)
    const [employee, setEmployee] = useState()

    const [allInterests, setAllInterests] = useState(interests)
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        fetchEmployee(setEmployee)
    }, [])

    function updateAttr(event, attribute) {
        const employeeCopy = { ...employee }
        employeeCopy[attribute] = event
        setEmployee(employeeCopy)
    }

    return (
        <AuthRoute>
            <Modal
                opened={popupOpen}
                onClose={() => setPopupOpen(false)}
                title="Do you really want to submit this profile?"
            >
                <Center>
                    <Button variant="subtle" color="red" onClick={() => setPopupOpen(false)}>Abort</Button>
                    <Button variant="subtle" color="green" onClick={() => {
                        if (typeof employee != "undefined") updateEmployee(employee);
                        setPopupOpen(false);
                    }}>Confirm</Button>
                </Center>
            </Modal>

            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                    <h2>
                        Adjusting your profile
                    </h2>
                    <div>
                        <br></br>
                        <Button variant = "light" style={{ align: "left", "marginRight": "50px" }} onClick={() => setPopupOpen(true)} leftIcon ={<IconDeviceFloppy></IconDeviceFloppy>}>Save</Button>
                    </div>
                </div>

                <hr></hr>
                <br></br>

                <h2>General</h2>
                <Grid spacing="md">
                    <Grid.Col sm={12} md={6} lg={3}>
                        <TextInput
                            disabled
                            placeholder={employee?.name}
                            label="Name"
                            classNames={{ input: classes.inputBottom, label: classes.labelBottom }}
                            style={{ width: '350px' }}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} lg={3}>
                        <Select
                            label="Employment type"
                            placeholder=""
                            data={contracts}
                            value={employee?.typeOfContract}
                            onChange={e => updateAttr(e, "typeOfContract")}
                            classNames={{ input: classes.inputBottom, label: classes.labelBottom }}
                            style={{ width: '350px' }}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} lg={3}>
                        <Select
                            label="Location"
                            placeholder=""
                            data={cities}
                            value={employee?.location}
                            onChange={e => { updateAttr(e, "location") }}
                            classNames={{ input: classes.inputBottom, label: classes.labelBottom }}
                            style={{ width: '350px' }}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} lg={3}>
                        <Select
                            label="Willingness to travel"
                            placeholder=""
                            data={willingToTravel}
                            value={employee?.travel}
                            onChange={e => updateAttr(e, "travel")}
                            classNames={{ input: classes.inputBottom, label: classes.labelBottom }}
                            style={{ width: '350px' }}
                        />
                    </Grid.Col>
                </Grid>
                <br></br>
                <h2>Qualification</h2>
                <Grid spacing="xl">
                    <Grid.Col sm={12} md={10} lg={4}>
                        <MultiSelect
                            data={skills}
                            limit={20}
                            valueComponent={MultiSelector}
                            searchable
                            nothingFound="Nothing found"
                            defaultValue={[]}
                            placeholder=""
                            label="Skills"
                            value={employee?.skills}
                            onChange={e => updateAttr(e, "skills")}
                            classNames={{ input: classes.inputBottom, label: classes.labelBottom }}
                            // style={{ width: '500px',   marginRight: '10px' }}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={10} lg={4}>
                        <MultiSelect
                            data={allInterests}
                            limit={20}
                            valueComponent={MultiSelector}
                            creatable
                            getCreateLabel={(query) => `+ Create ${query}`}
                            onCreate={(query) => { setAllInterests((current) => [...current, query]) }}
                            searchable
                            nothingFound="Nothing found"
                            defaultValue={[]}
                            placeholder=""
                            label="Interests"
                            value={employee?.interests}
                            onChange={e => updateAttr(e, "interests")}
                            classNames={{ input: classes.inputBottom, label: classes.labelBottom }}
                            style={{ width: '500px' }}
                        />
                    </Grid.Col>
                </Grid>
                <br></br>
                <h2>Availability</h2>
                <Grid spacing="md">
                    <Grid.Col sm={12} md={6} lg={3}>
                        <Grid style = {{display: "flex", alignItems: "center"}}>
                            <Grid.Col sm={3} md={6} lg={3}>
                                Holidays
                            </Grid.Col>
                            <Grid.Col sm={3} md={6} lg={3}>
                                <Button
                                variant = "light"
                                color = "cyan"
                                    onClick={() => setHolidays((current) => [...current,
                                    <DateRangePick key={current.length} />
                                    ])}
                                    leftIcon={<IconPlus size={14} />}>
                                    Add
                                </Button>
                            </Grid.Col>
                        </Grid>
                        {holidays}
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} lg={3}>
                        Weekly working hours
                        <Slider
                            max={40}
                            marks={[
                                { value: 10, label: '10' },
                                { value: 20, label: '20' },
                                { value: 30, label: '30' },
                                { value: 40, label: '40' },
                            ]}
                            defaultValue={30}
                            style={{ width: "80%" }}
                        />
                    </Grid.Col>
                </Grid>
            </div >
        </AuthRoute >
    );
}
