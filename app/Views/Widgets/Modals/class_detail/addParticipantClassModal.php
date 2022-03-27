<div id="add_new_participant_modal" class="hidden p-3 flex flex-col gap-5">
    <div class="w-[500px]  bg-white rounded-lg">

        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                Tambah Peserta <small id="modal_test_id" class="text-sm text-gray-500"></small>
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" id="close_participant_modal" >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>

            <div class="p-6 space-y-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="fileUpload">Upload file</label>
                <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  id="fileUpload" type="file">
                <button id="import_participants_list_button"  type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Import</button>
                <button id="upload_participants_list_data" type="button" class="text-blue-700  bg-white shadow-lg hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
            </div>


        </div>
    </div>
    <div class="w-[500px]  bg-white rounded-lg">

    <div id="import_table" class="hidden p-3">
            <div class="flex flex-col">
                <div class=" sm:-mx-6 lg:-mx-8">
                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-y-scroll max-h-[250px] w-full  shadow-md sm:rounded-lg border border-gray-600">
                            <table class="min-w-full">
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" class="py-3 text-center text-xs font-medium tracking-wider  text-gray-700 uppercase dark:text-gray-400">
                                            No
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            User ID
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nama
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="import_table_body">
                                    <!-- Product 1 -->
                                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </div>

</div>