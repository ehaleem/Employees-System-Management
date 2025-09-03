import axios from "axios";

import { createContext } from "react";

export  let EmployeesContext = createContext()

export default function EmployeesContextProvider(props){

    async function addEmployee(name,salary,age){
        let {data} = await axios.post("https://dummy.restapiexample.com/api/v1/create",{data :{name ,salary,age}})
        return data
    }

    async function updataEmpliyee(id){
        let {data} = await axios.put(`https://dummy.restapiexample.com/api/v1/update/${id}`)
        return data
    }
    async function deletEmpliyee(id){
        let {data} = await axios.delete(`https://dummy.restapiexample.com/api/v1/update/${id}`)
        return data
    }

    return <EmployeesContext.Provider value={{addEmployee ,updataEmpliyee,deletEmpliyee}}>
       {props.children}
    </EmployeesContext.Provider>
}
