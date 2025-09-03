import React, { useContext } from 'react'
import { EmployeesContext } from '../Context/Employees'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

export default function FormModel() {
  let { addEmployee } = useContext(EmployeesContext)
  async function handelEmployee(valuse) {
   try {
     let data = await addEmployee(valuse)
      console.log(data.data.data.name);
      if(data.status === 'success'){
      console.log(data.message);
       toast.success(data.message)
       localStorage.setItem("allEmployees",JSON.stringify(data.data.data.name))
        formik.resetForm();
      }
     
   } catch (error) {
    toast.error(error.message)
    console.log(error);
    
    
   }
    

  }

  let formik = useFormik({
    initialValues: {
      name: "",
      salary: "",
      age: ""
    },
    onSubmit: handelEmployee
    
  })
  return <>


    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto my-10">
      <div className="relative z-0 w-full mb-5 group">
        <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Employes Name</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input value={formik.values.salary} onChange={formik.handleChange} onBlur={formik.handleBlur} type="number" name="salary" id="salary" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="salary" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Employes salary</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} type="number" name="age" id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="age" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Employes age</label>
      </div>

      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Employee</button>
    </form>

  </>
}
