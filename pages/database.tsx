import { Button } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { DatabaseContext } from '../contexts/DatabaseContext'


export default function Database () {
    const { fetchEmployees, fetchProjects, updateEmployee, fetchEmployee, addEmployeeMockData }: any = useContext(DatabaseContext)
    const [employees, setEmployees] = useState([])
    const [project, setProject] = useState([])
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        fetchEmployees(setEmployees)
        fetchProjects(setProject)
        fetchEmployee(setEmployee)

    }, [])

    const addMockDataToDB = function(){
        const data = [
            {
              name: "Catherina Maskill",
              travel: 20,
              location: "Frankfurt",
              typeOfContract: "Working student",
              hoursPerWeek: 10,
              interests: [
                "Consumer products",
                "Healthcare",
                "Travel & logistics"
              ],
              skills: [
                "IT security",
                "C++",
                "Python"
              ]
            },
            {
              name: "Megen Howroyd",
              travel: 0,
              location: "London",
              typeOfContract: "Intern",
              hoursPerWeek: 15,
              interests: [
                "Insurance",
                "Automotive"
              ],
              skills: [
                "SAP",
                "UI/UX",
                "C++",
                "Python"
              ]
            },
            {
              name: "Chanda Billings",
              travel: 5,
              location: "London",
              typeOfContract: "Trainee",
              hoursPerWeek: 20,
              interests: [
                "Insurance",
                "Consumer products",
                "Automotive",
                "Food"
              ],
              skills: [
                "C++",
                "IT security",
                "Java"
              ]
            },
            {
              name: "Chrysa MacCulloch",
              travel: 0,
              location: "Frankfurt",
              typeOfContract: "Permanent employee",
              hoursPerWeek: 35,
              interests: [
                "Banking",
                "Automotive"
              ],
              skills: [
                "UI/UX"
              ]
            },
            {
              name: "Karyn Chaves",
              travel: 0,
              location: "Munich",
              typeOfContract: "Trainee",
              hoursPerWeek: 5,
              interests: [
                "Consumer products"
              ],
              skills: [
                "Marketing"
              ]
            },
            {
              name: "Karissa Bastick",
              travel: 20,
              location: "London",
              typeOfContract: "Trainee",
              hoursPerWeek: 10,
              interests: [
                "Travel & logistics",
                "Automotive"
              ],
              skills: [
                "UI/UX",
                "IT security",
                "SAP",
                "Java"
              ]
            },
            {
              name: "Creighton Denney",
              travel: 100,
              location: "Hamburg",
              typeOfContract: "Intern",
              hoursPerWeek: 40,
              interests: [
                "Banking"
              ],
              skills: [
                "Java",
                "IT security"
              ]
            },
            {
              name: "Chrystal Woolis",
              travel: 100,
              location: "Chemnitz",
              typeOfContract: "Trainee",
              hoursPerWeek: 30,
              interests: [
                "Manufacturing",
                "Consumer products",
                "Food"
              ],
              skills: [
                "Marketing",
                "UI/UX",
                "React"
              ]
            },
            {
              name: "Merle Jewar",
              travel: 60,
              location: "Stuttgart",
              typeOfContract: "Intern",
              hoursPerWeek: 35,
              interests: [
                "Telecommunications"
              ],
              skills: [
                "Python"
              ]
            },
            {
              name: "Melisenda Crecy",
              travel: 60,
              location: "Frankfurt",
              typeOfContract: "Working student",
              hoursPerWeek: 15,
              interests: [
                "Insurance",
                "Healthcare"
              ],
              skills: [
                "React",
                "UI/UX"
              ]
            },
            {
              name: "Tate Navarre",
              travel: 40,
              location: "Stuttgart",
              typeOfContract: "Trainee",
              hoursPerWeek: 40,
              interests: [
                "Travel & logistics"
              ],
              skills: [
                "IT security"
              ]
            },
            {
              name: "Vergil Kobes",
              travel: 20,
              location: "Munich",
              typeOfContract: "Intern",
              hoursPerWeek: 10,
              interests: [
                "Manufacturing",
                "Consumer products"
              ],
              skills: [
                "Process modelling",
                "Python"
              ]
            },
            {
              name: "Lebbie Fransoni",
              travel: 20,
              location: "Hamburg",
              typeOfContract: "Trainee",
              hoursPerWeek: 37,
              interests: [
                "Banking",
                "Automotive"
              ],
              skills: [
                "Project management",
                "UI/UX"
              ]
            },
            {
              name: "Claiborn Palfrie",
              travel: 20,
              location: "Frankfurt",
              typeOfContract: "Permanent employee",
              hoursPerWeek: 40,
              interests: [
                "Utilities"
              ],
              skills: [
                "C++"
              ]
            },
            {
              name: "Ynez Calken",
              travel: 100,
              location: "London",
              typeOfContract: "Intern",
              hoursPerWeek: 10,
              interests: [
                "Telecommunications",
                "Consumer products"
              ],
              skills: [
                "UI/UX",
                "IT security"
              ]
            },
            {
              name: "Lazare Hungerford",
              travel: 20,
              location: "Shanghai",
              typeOfContract: "Permanent employee",
              hoursPerWeek: 37,
              interests: [
                "Consumer products",
                "Food"
              ],
              skills: [
                "C++",
                "UI/UX"
              ]
            },
            {
              name: "Starlin Greatex",
              travel: 60,
              location: "Shanghai",
              typeOfContract: "Working student",
              hoursPerWeek: 10,
              interests: [
                "Automotive",
                "Travel & logistics"
              ],
              skills: [
                "Java",
                "UI/UX",
                "React"
              ]
            },
            {
              name: "Hermione Halton",
              travel: 40,
              location: "London",
              typeOfContract: "Trainee",
              hoursPerWeek: 30,
              interests: [
                "Food"
              ],
              skills: [
                "Process modelling",
                "UI/UX"
              ]
            },
            {
              name: "Yasmin Warke",
              travel: 0,
              location: "Shanghai",
              typeOfContract: "Permanent employee",
              hoursPerWeek: 15,
              interests: [
                "Food",
                "Consumer products",
                "Travel & logistics"
              ],
              skills: [
                "SAP",
                "C++"
              ]
            },
            {
              name: "Wilt Joplin",
              travel: 0,
              location: "Hamburg",
              typeOfContract: "Intern",
              hoursPerWeek: 15,
              interests: [
                "Healthcare",
                "Automotive"
              ],
              skills: [
                "IT security"
              ]
            },
            {
              name: "Rainer Mattingson",
              travel: 20,
              location: "London",
              typeOfContract: "Permanent employee",
              hoursPerWeek: 30,
              interests: [
                "Healthcare"
              ],
              skills: [
                "IT security"
              ]
            },
            {
              name: "Danit Waplinton",
              travel: 40,
              location: "Frankfurt",
              typeOfContract: "Trainee",
              hoursPerWeek: 37,
              interests: [
                "Consumer products"
              ],
              skills: [
                "Marketing",
                "SAP",
                "C++"
              ]
            },
            {
              name: "Garnette Ledrane",
              travel: 100,
              location: "London",
              typeOfContract: "Working student",
              hoursPerWeek: 15,
              interests: [
                "Consumer products",
                "Food",
                "Healthcare"
              ],
              skills: [
                "C++",
                "UI/UX",
                "Marketing",
                "Python"
              ]
            },
            {
              name: "Devan Mackriell",
              travel: 60,
              location: "Frankfurt",
              typeOfContract: "Permanent employee",
              hoursPerWeek: 20,
              interests: [
                "Travel & logistics",
                "Consumer products"
              ],
              skills: [
                "Law",
                "IT security"
              ]
            },
            {
              name: "Rebecka Dalley",
              travel: 5,
              location: "Chemnitz",
              typeOfContract: "Intern",
              hoursPerWeek: 5,
              interests: [
                "Life science & chemicals",
                "Healthcare",
                "Travel & logistics"
              ],
              skills: [
                "Process modelling",
                "UI/UX"
              ]
            },
            {
              name: "Nicko Spera",
              travel: 60,
              location: "Frankfurt",
              typeOfContract: "Working student",
              hoursPerWeek: 37,
              interests: [
                "Food",
                "Consumer products",
                "Travel & logistics"
              ],
              skills: [
                "C++",
                "SAP",
                "Python"
              ]
            },
            {
              name: "Tynan Barstowk",
              travel: 0,
              location: "London",
              typeOfContract: "Working student",
              hoursPerWeek: 20,
              interests: [
                "Insurance",
                "Automotive",
                "Healthcare"
              ],
              skills: [
                "IT security",
                "Python"
              ]
            },
            {
              name: "Conrade Lago",
              travel: 0,
              location: "Munich",
              typeOfContract: "Permanent employee",
              hoursPerWeek: 30,
              interests: [
                "Automotive",
                "Food"
              ],
              skills: [
                "Process modelling",
                "React"
              ]
            },
            {
              name: "Stanley Goncalo",
              travel: 0,
              location: "Chemnitz",
              typeOfContract: "Working student",
              hoursPerWeek: 35,
              interests: [
                "Utilities",
                "Consumer products"
              ],
              skills: [
                "Python",
                "IT security",
                "C++"
              ]
            },
            {
              name: "Tymon Mecco",
              travel: 60,
              location: "Chemnitz",
              typeOfContract: "Working student",
              hoursPerWeek: 37,
              interests: [
                "Insurance",
                "Consumer products",
                "Food"
              ],
              skills: [
                "UI/UX",
                "React"
              ]
            }
          ]

          addEmployeeMockData(data)


    }
    return (
        <>
          <button onClick = {()=> {console.log(employees)}}> Get employees</button>
          <button onClick = {()=> {console.log(employee)}}> Get single employee</button>
          <button onClick = {()=> {console.log(project)}}> Get projects</button>
          {/* <button onClick = {addMockDataToDB}> Add Mock</button> */}
          <button onClick = {()=> {updateEmployee({name: "Good Work !"})}}> Manipulate Employee</button>
        </>
    )
}
