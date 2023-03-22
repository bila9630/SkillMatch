import React, { createContext, useContext } from 'react';
import {
    addDoc,
    collection,
    doc,
    getDocs,
    getDoc,
    getFirestore,
    serverTimestamp,
    updateDoc
} from "firebase/firestore";
import { app } from '../firebaseClient'
import employeeData from '../data_models/employeeData';
import { AuthContext } from './AuthContext';

export const DatabaseContext = createContext(null);


const DatabaseContextProvider = (props: any) => {
    // init database
    const db: any = getFirestore(app)

    const { currentUser }: any = useContext(AuthContext)

    // Functions for employees
    const fetchEmployees = async (setEmployees: any) => {
        // to do: get document id of currently logged in user
        //doc(db, "employee", doc_id)
        await getDocs(collection(db, "employee"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map(doc => ({ ...doc.data(), id: doc.id }));
                setEmployees(newData);
            })
    }

    const fetchEmployee = async (setEmployee: any) => {
        // to do: get document id of currently logged in user
        //doc(db, "employee", doc_id)
        const employee_doc_id = currentUser.uid

        const docSnap = await getDoc(doc(db, "employee", employee_doc_id))
        console.log(docSnap.data())
        if (docSnap.exists()) {
            setEmployee(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
    }

    const addEmployee = async(data: employeeData) =>{
        const employeeDbRef = collection(db, "employee");
        await addDoc(employeeDbRef, {
            createdAt: serverTimestamp(),
            name: data.name,
            location: data.location,
            // client: data.client
       })
    }

    const updateEmployee = async(data: any) => { //, employee_doc_id: any) => {
        // get id of document of currently logged in user
        const employee_doc_id = currentUser.uid
        // update user 
        const employeeRef = doc(db, "employee", employee_doc_id);
        
        await updateDoc(employeeRef, data)
    }


    // Functiosn for projects

    const fetchProjects = async (setProject: any) => {
        await getDocs(collection(db, "project"))
        .then((querySnapshot)=>{
            const newData = querySnapshot.docs
            .map(doc => ({...doc.data(), id:doc.id}));
            setProject(newData);
        })
    }


    const updateProject = async(data: any) => { //, employee_doc_id: any) => {
        // get id of document of currently logged in user
        // const employee_doc_id = "spUOfOVrDcnzcPnnoLIH"
        // update user 
        // const employeeRef = doc(db, "employee", employee_doc_id);
        
        // await updateDoc(employeeRef, data)
    }

    const addProject = async(projectData: any) => {
        const projectsRef = collection(db, "project");
        await addDoc(projectsRef, projectData)
    }

    const addEmployeeMockData = async(data: any) => {
        const ref = collection(db, "employee")
        for (let index = 0; index < data.length; index++) {
            await addDoc(ref, data[index])
        }
    }


    const value:any = { fetchEmployees, fetchProjects, addEmployee, updateEmployee, fetchEmployee, addProject, addEmployeeMockData };

    return (
        <DatabaseContext.Provider value={value}>
            {props.children}
        </DatabaseContext.Provider>
    )
}

export default DatabaseContextProvider;