<div id="questions_details" class="flex flex-col hidden w-[650px] h-[650px] max-h-[800px] bg-white rounded-lg p-5 gap-4">
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-5">
            <h1 class="text-2xl font-semibold ">
                Daftar Pertanyaan
            </h1>
            <div id="<?= $test_name?>_q_list_modal_message" aria-hidden="true" class="hidden flex px-4 py-2 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200" role="alert">
                <svg class="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div class="<?= $test_name?>_q_list_modal_message ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
                    Data berhasil di perbaharui 
                </div>
                <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300" data-collapse-toggle="<?= $test_name?>_q_list_modal_message" aria-label="Close">
                    <span class="sr-only">Close</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>
        <div class="flex items-center gap-5">
        
            <button id="delete_question_details" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="h-5 w-5 center">
                    <i class="fa-solid fa-trash"></i>     
                </div>    
            </button>
            <button id="update_question_details" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="h-5 w-5 center">
                    <i class="fa-solid fa-upload"></i>     
                </div>    
            </button>
            <button id="close_question_details" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="h-5 w-5 center">
                    <i class="fa-solid fa-chevron-left"></i>            
                </div>    
            </button>
        </div>
    </div>
    <div id="question_details_body" class="flex flex-grow border border-gray-200 rounded-lg overflow-hidden">
        <div class="border-r border-gray-200 w-1/4 h-full overflow-auto">
            <ul class="py-5">
                <!-- <li class="center py-2 px-5 border-b-2 border-gray-300">Soal 1</li> -->
            </ul>
        </div>
        <div class=" w-3/4 h-full p-5 overflow-auto">
            <label >Masukkan Pertanyaan</label>
            <div  class="editor_questions_input w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg">
                
            </div >
            <label >Masukkan Jawaban</label>
            <select  class="editor_questions_input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
            </select>
            <!-- <div id=""  class="editor_questions_input  w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg"></div> -->
            <div class="flex items-center justify-between">
                <label>Masukkan Pilhan</label>
                <div class="flex items-center gap-4">

                </div>
            </div>
            <div class=" pl-10 flex flex-col gap-2">
                <div class="flex gap-2 items-center">
                    <div class="editor_questions_input kecerdasan_options_input w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" ></div>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="editor_questions_input kecerdasan_options_input w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" ></div>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="editor_questions_input kecerdasan_options_input w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" ></div>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="editor_questions_input kecerdasan_options_input w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" ></div>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="editor_questions_input kecerdasan_options_input w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" ></div>
                </div>
            </div>
        </div>
    </div>
</div>