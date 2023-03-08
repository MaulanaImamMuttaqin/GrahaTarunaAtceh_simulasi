<div id="single_question_editor" class="hidden p-3 flex min-h-[300px] max-h-[500px] overflow-auto flex-col gap-3 w-full rounded-lg z-50">
    
    <label for="kepribadian_question_input">Masukkan Pertanyaan</label>
    <div id="kepribadian_question_input" class="editor_questions_input w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg"></div>
    <div>
        <label for="question_max_score">Masukkan Nilai Pertanyaan</label>
        <input id="question_max_score" type="number" class="editor_questions_input w-full rounded-lg border-gray-300" value="" max="100" min="0" placeholder="nilai">
    </div>
    <!-- <div id="kepribadian_key_input"  class="editor_questions_input  w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg"></div> -->
    <div class="flex items-center justify-between">
        <label for="kepribadian_question_input">Masukkan Pilhan</label>
        <div class="flex items-center gap-4">
            <!-- <button id="remove_kepribadian_question_options" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="h-5 w-5 center">
                    <i class="fa-solid fa-minus"></i>           
                </div>    
            </button>
            <button id="add_kepribadian_question_options" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="h-5 w-5 center">
                    <i class="fa-solid fa-plus"></i>           
                </div>    
            </button> -->

        </div>
    </div>
    <div class="kepribadian_options options pl-10 flex flex-col gap-2">
        <div class="flex gap-2 items-center">
            <div class="editor_questions_input kepribadian_options_input w-4/6 py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" ></div>
            <div class="flex w-2/6 items-center gap-2">
                <input type="number" class="options_score rounded-lg w-4/6 border-gray-300" value="" placeholder="nilai" max="100" min="0">
                <span class="text-lg font-semibold">%</span>
            </div>
        </div>
        <div class="flex gap-2 items-center">
            <div class="editor_questions_input kepribadian_options_input w-4/6 py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" ></div>
            <div class="flex w-2/6 items-center gap-2">
                <input type="number" class="options_score rounded-lg w-4/6 border-gray-300" value="" placeholder="nilai" max="100" min="0">
                <span class="text-lg font-semibold">%</span>
            </div>
        </div>
        <div class="flex gap-2 items-center">
            <div class="editor_questions_input kepribadian_options_input w-4/6 py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" ></div>
            <div class="flex w-2/6 items-center gap-2">
                <input type="number" class="options_score rounded-lg w-4/6 border-gray-300" value="" placeholder="nilai" max="100" min="0">
                <span class="text-lg font-semibold">%</span>
            </div>
        </div>
        <div class="flex gap-2 items-center">
            <div class="editor_questions_input kepribadian_options_input w-4/6 py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" ></div>
            <div class="flex w-2/6 items-center gap-2">
                <input type="number" class="options_score rounded-lg w-4/6 border-gray-300" value="" placeholder="nilai" max="100" min="0">
                <span class="text-lg font-semibold">%</span>
            </div>
        </div>
        <div class="flex gap-2 items-center">
            <div class="editor_questions_input kepribadian_options_input w-4/6 py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" ></div>
            <div class="flex w-2/6 items-center gap-2">
                <input type="number" class="options_score rounded-lg w-4/6 border-gray-300" value="" placeholder="nilai" max="100" min="0">
                <span class="text-lg font-semibold">%</span>
            </div>
        </div>
    </div>
    
</div>