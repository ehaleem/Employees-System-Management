

import { Link } from 'react-router-dom'

export default function Home() {
    return <>
        <div className="container my-5">
            <h1 className='text-center capitalize text-2xl '>employees management system</h1>
            <div className=' flex justify-center  gap-4 my-7'>
                <form className='w-3/4'>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none " placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
                <Link to='formdata' >
                    <span type="button" className="text-white bg-blue-700 from-teal-200 to-lime-200 block  focus:ring-4 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-6 py-4 text-center me-2 mb-2">Add Employee</span>

                    

                </Link>
            </div>


            {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full border-1 border-gray-900 text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" class="p-4">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                employees name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                employees salary
                            </th>
                            <th scope="col" class="px-6 py-3">
                                employees age
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Updat
                            </th>
                            <th scope="col" class="px-6 py-3">
                                delet
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
                            <td class="w-4 p-4">
                                1
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                            <td class="px-6 py-4">
                                delet
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div> */}

        </div>





    </>
}
