<div id="test_result_modal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">

                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px] overflow-x-auto">

                    <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <div class="flex gap-5 items-center">
                            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Daftar Hasil Tes
                            </h3>
                            <div id="loading" class="text-center hidden">
                                <svg role="status" class="inline mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                        </div>
                        <div class="flex items-center gap-5">
                            <div class="flex items-center justify-end">
                                <button onclick="exportToSpreadSheet()"  data-tooltip-target="tooltip_export_spreadsheet" id="export_to_spredsheet" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <i class="fa-solid fa-file-excel"></i>
                                </button>
                                <div id="tooltip_export_spreadsheet" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                    Export ke Spreadsheet
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </div>
                            <button id="close_participants_test_result"  type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div id="participant_list_test_result" class="p-3 rounded-lg flex flex-col gap-2">
                        
                        <div class="bg-white p-3">
                            <div class="flex flex-col">
                                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                                        <div class="overflow-auto h-min-full w-min-full   shadow-md sm:rounded-lg border border-gray-300">
                                            <table class="min-w-full">
                                                <thead class="bg-gray-50 dark:bg-gray-700">
                                                    <tr>
                                                        <th rowspan="2" scope="col" class="p-3 text-center text-xs font-medium tracking-wider  text-gray-700  dark:text-gray-400">
                                                            No
                                                        </th>
                                                        <th rowspan="2"  scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-gray-700  dark:text-gray-400">
                                                            User ID
                                                        </th>
                                                        <th rowspan="2"  scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-gray-700  dark:text-gray-400">
                                                            Nama
                                                        </th>
                                                        <th colspan="3" scope="col" class="text-center  py-1 px-6 text-xs font-medium tracking-wider text-gray-700  dark:text-gray-400">
                                                            Nilai
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col" class="py-1 px-1 text-xs font-medium tracking-wider text-gray-700  dark:text-gray-400">
                                                            Kecermatan
                                                        </th>
                                                        <th scope="col" class="py-1 px-1 text-xs font-medium tracking-wider text-gray-700  dark:text-gray-400">
                                                            Kecerdasan
                                                        </th>
                                                        <th scope="col" class="py-1 px-1 text-xs font-medium tracking-wider text-gray-700  dark:text-gray-400">
                                                            Kepribadian
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id="participant_test_result_tbody">
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
            </div>
            <div id="participant_result_modal" class="hidden bg-white p-3 rounded-lg h-max-[500px]  w-[650px]">
                        <div class="flex justify-end items-start p-1 rounded-t border-b dark:border-gray-600">
                            
                            <div class="flex gap-5">
                                <button id="close_participant_result_modal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div class="h-5 w-5 center">
                                        <i class="fa-solid fa-chevron-left"></i>            
                                    </div>    
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-2 rounded-t border-b dark:border-gray-600">
                            <div class="flex items-center ">
                                <button id="kecermatan_button" onclick="openTestResultDetail('kecermatan')"  class="relative z-20 bg-gray-100 shadow-2xl p-2 rounded-t-lg text-normal font-thin text-gray-900  dark:text-white">
                                    Test Kecermatan
                                </button>
                                <button id="kecerdasan_button" onclick="openTestResultDetail('kecerdasan')"  class="relative z-10 -ml-1 shadow-lg p-2 bg-gray-300 rounded-t-lg text-normal font-thin text-gray-900  dark:text-white">
                                    Test Kecerdasan
                                </button>
                                <button id="kepribadian_button" onclick="openTestResultDetail('kepribadian')"  class="relative z-0 -ml-1 shadow-lg p-2 bg-gray-300 rounded-t-lg text-normal font-thin text-gray-900  dark:text-white">
                                    Test Kepribadian
                                </button>
                            </div>
                            <div class="flex gap-5">
                                <button onclick="deleteParticipantsTestResult()" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div class="h-5 w-5 center">
                                        <i class="fa-solid fa-trash-can"></i>           
                                    </div>    
                                </button>
                            </div>
                        </div>
                        <div id="participants_result_modal_body">
                            <?= $this->include("Widgets/Modals/class_detail/kecermatan/KecermatanResultModal")?>
                            <?= $this->include("Widgets/Modals/class_detail/kecerdasan/KecerdasanResultModal")?>
                            <?= $this->include("Widgets/Modals/class_detail/kepribadian/KepribadianResultModal")?>
                            <div id="test_result_not_available" class="hidden center p-5 w-full border border-gray-200 rounded-lg ">
                                Peserta Belum mengerjakan Test ini
                            </div>
                        </div>
                    </div>
        </div>
    </div>