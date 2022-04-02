<div id="kepribadianDetailModal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal  md:h-full md:inset-0">
        <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
    
            <form id="test_detail_kepribadian_update_form" action="javascript:void(0)" class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                    <div class="flex gap-2 items-center">
                        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Detail Tes Kepribadian
                        </h3>

                        <div id="modal-loading" class="text-center hidden">
                            <svg role="status" class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        </div>
                        
                    </div>
                    <div class="flex gap-2">
                        <button id="delete_test_kepribadian" type="button" class="w-10 center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <i class="fa-solid fa-trash-can"></i>                 
                        </button>
                        <button type="button" class="w-10 center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onclick="toTestPage()">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>                       
                        </button>
                        <button id="edit_test_kepribadian" type="button" class="w-10 center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <i class="fa-solid fa-pen-to-square"></i>                        
                        </button>
                        <button id="close_kepribadian_modal" type="button" class="w-10 center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                </div>
                <!-- Modal body -->
                <div class= "p-6 ">
                    
                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex justify-between h-16 py-1 px-4 mb-1 text-sm  text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800  items-center gap-5" role="alert">
                                <div class=" flex gap-5">
                                    <div>
                                        <i class="fa-solid fa-key"></i>
                                    </div>
                                    <div class="flex  items-center gap-3">
                                            ID : <div id="detail_kepribadian_test_id" class="h-6 px-2  center text-white rounded-lg text-sm bg-blue-500 font-semibold"></div> 
                                    </div>
                                </div>    
                                <div class="">
                                    <button id="copy_id_button"  data-tooltip-target="tooltip-copy-url" type="button" class="text-blue-500 font-medium rounded-lg text-sm p-2 text-center hover:bg-blue-400 hover:text-white"><i class="fa-solid fa-copy"></i></button>
                                    <div id="tooltip-copy-url" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                        Salin ID Tes
                                        <div class="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                </div>
                            </div>
                            <div class="h-16 py-1 px-4 mb-1 text-sm  text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 flex items-center gap-5" role="alert">
                                <div>
                                    <i class="fa-solid fa-clock"></i>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div id="detail_kepribadian_duration" class="h-6 px-2  center text-white rounded-lg text-sm bg-blue-500 font-semibold"></div>
                                </div>
                            </div>
                            

                            
                            <div class="col-span-2 h-16 py-1 px-4 text-sm  text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 flex items-center gap-5" role="alert">
                                <div>
                                <i class="fa-solid fa-calendar"></i>
                                </div>
                                <div class="flex items-center gap-3">
                                    dimulai dari <div id="detail_kepribadian_test_start_at" class="h-6  px-2  center text-white rounded-lg text-sm bg-blue-500 font-semibold"></div>  
                                </div>
                                <div class="flex items-center gap-3">
                                    hingga <div id="detail_kepribadian_test_end_at" class="h-6  px-2  center text-white rounded-lg text-sm bg-blue-500 font-semibold"></div>  
                                </div>
                            </div>
                           
                            <div class="col-span-2 h-16 py-1 px-4 text-sm  text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 flex items-center justify-between " role="alert">
                                <div class="flex gap-5">
                                    <div>
                                    <i class="fa-solid fa-file-lines"></i>
                                    </div>
                                    
                                    <div class="flex items-center gap-3">
                                        <div id="detail_kepribadian_total_question" class="h-6  px-2  center text-white rounded-lg text-sm bg-blue-500 font-semibold"></div> 
                                        total pertanyaan 
                                    </div>
                                </div>

                                <div class="flex gap-3  justify-self-end">
                                    <button class="hover:bg-blue-400 rounded-lg bg-blue-300 px-2 py-1">
                                        <i class="fa-solid fa-align-justify"></i>
                                    </button>

                                    <button id="open_question_editor_button" type="button" class="hover:bg-blue-400 rounded-lg bg-blue-300 px-2 py-1">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>

                        </div>

                        
                </div>
                

                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button onclick="closekepribadianDetailModal()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tutup</button>
                    <button id="upload_edited_test_kepribadian"  type="submit" class="hidden flex items-center gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                    </button>
                </div>
            </form>
        </div>
        <div id="question_editor" class="hidden bg-white p-3 rounded-lg   w-[550px]">
            <div class="flex justify-end items-start p-1 rounded-t border-b dark:border-gray-600">
                
                <div class="flex gap-5">
                    <button id="close_question_editor" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <div class="h-5 w-5 center">
                            <i class="fa-solid fa-chevron-left"></i>            
                        </div>    
                    </button>
                </div>
            </div>
            <div class="flex justify-between items-center px-5 py-2 rounded-t border-b dark:border-gray-600">
                <div class="flex items-center ">
                    <button id="single_upload" onclick="open_kepribadian_question_editor('single')"  class="relative z-20 bg-gray-100 shadow-2xl p-2 rounded-t-lg text-normal font-thin text-gray-900  dark:text-white">
                        Single
                    </button>
                    <button id="batch_upload" onclick="open_kepribadian_question_editor('batch')"  class="relative z-10 -ml-1 shadow-lg p-2 bg-gray-300 rounded-t-lg text-normal font-thin text-gray-900  dark:text-white">
                        Batch
                    </button>
                </div>
                <div class="flex gap-5">
                </button>
                    <button id="upload_kepribadian_question" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <div class="h-5 w-5 center">
                            <i class="fa-solid fa-upload"></i>           
                        </div>    
                    </button>
                    <button id="clear_kepribadian_question_input" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <div class="h-5 w-5 center">
                            <i class="fa-solid fa-trash-can"></i>           
                        </div>    
                    </button>
                </div>
            </div>
            <div id="participants_result_modal_body" class="p-5">
                <?= $this->include("Widgets/Modals/class_detail/kepribadian/KepribadianQuestionEditorSingle")?>
                <?= $this->include("Widgets/Modals/class_detail/kepribadian/KepribadianQuestionEditorBatch")?>
            </div>
        </div>
        
    </div>