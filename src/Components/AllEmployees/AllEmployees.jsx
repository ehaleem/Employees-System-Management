


export default function AllEmployees() {

return  <>


    <div class="my-7 relative overflow-x-auto shadow-md sm:rounded-lg">
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
            </div> 
    </>
  
}
