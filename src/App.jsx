
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import FormModel from './Components/FormModel/FormModel';
import EmployeesContextProvider from './Components/Context/Employees';
import { Toaster } from 'react-hot-toast';
import AllEmployees from './Components/AllEmployees/AllEmployees';



function App() {

  let routing = createBrowserRouter([{
    path: "", element: <Layout />, children: [
      { path: "", element: <Home /> },
      { path: "allemployees", element: <AllEmployees /> },
      { path: "formdata", element: <FormModel /> },
    ]
  }])
  return <>
    <EmployeesContextProvider>
      <RouterProvider router={routing}></RouterProvider>
      <Toaster />
    </EmployeesContextProvider>
  </>
}

export default App
