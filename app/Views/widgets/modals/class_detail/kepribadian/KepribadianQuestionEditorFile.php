<div id="file_question_editor" class="hidden p-3 flex flex-col gap-3">

    <form id="kepribadian_question_upload_file" action="javascript:void(0)">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="fileQuestionKepribadianUpload">Upload file</label>
        <input class="mb-3 manual-input block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  id="fileQuestionKepribadianUpload" type="file" required>
        <div class="flex gap-5">
            <button type="button" id="read_question_kepribadian_file_button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer">Import</button>
            <button type="submit" id="submit_question_kepribadian_file_button"  class="hidden text-blue-700 bg-white hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center ">Simpan</button>

            <div class="text-gray-800 leading-none flex items-center" id="fileQuestionKepribadianUpload_result">
                <small>
                </small>
            </div>
        </div>
    </form>

</div>  