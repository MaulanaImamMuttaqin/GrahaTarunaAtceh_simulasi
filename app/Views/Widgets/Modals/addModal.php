<div id="addModal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">

                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <div class="flex gap-5 items-center">
                            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Buat Test Baru
                            </h3>
                            <div id="loading" class="text-center hidden">
                                <svg role="status" class="inline mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                        </div>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="addModal">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <button id="toggle-manual" type="button" class=" flex gap-5 items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >
                        <i class="fa-solid fa-chevron-down"></i>
                        <span class="text-sm font-normal">Atur Soal Secara Otomatis</span>
                    </button>
                    <button id="toggle-otomatis" type="button" class="hidden flex gap-5 items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >
                        <i class="fa-solid fa-chevron-down"></i>
                        <span class="text-sm font-normal"> Masukkan Soal Secara Manual</span>
                    </button>
                    <form id="add_test_form" action="javascript:void(0)">
                        <div class="p-6 space-y-6">
                            <div class="mb-6">
                                <label for="soal" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jumlah Soal </label>
                                <input name="question_total" type="number" id="soal" class="auto-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
                            </div>
                            <div class="mb-6">
                                <label for="digit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jumlah Digit Angka</label>
                                <input name="digit" type="number" id="digit" class="auto-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            <div class="mb-6">
                                <label for="durasi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Durasi per Soal (detik)</label>
                                <input name="duration" type="number" id="durasi" class="auto-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            

                            <div class="mb-6">
                                <label for="mulai" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tanggal Waktu Mulai </label>
                                <input name="test_start_at" type="datetime-local" id="mulai" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            <div class="mb-6">
                                <label for="akhir" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tanggal Waktu Akhir </label>
                                <input name="test_end_at" type="datetime-local" id="akhir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                        </div>

                        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button id="add_test" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambah</button>
                            <button data-modal-toggle="addModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Batal</button>
                        </div>
                    </form>
                    <form id="add_manual_test_form" action="javascript:void(0)" class="hidden">
                        <div class="p-6 space-y-6">
                            
                            <div id="dropdown-input-manual" >
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="fileQuestionUpload">Upload file</label>
                                <input class="mb-3 manual-input block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  id="fileQuestionUpload" type="file" required>
                                <div  onclick="UploadQuestionsFile()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer">Export</div>
                            </div>
                            <div class="mb-6">
                                <label for="soal" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jumlah Soal </label>
                                <input name="question_total" type="number" id="manual-soal" class="auto-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required
                                    placeholder ="nilai harus lebih kecil atau sama dari total pertanyaan yang dikumpulkan"
                                >
                            </div>
                            <div class="mb-6">
                                <label for="durasi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Durasi per Soal (detik)</label>
                                <input name="duration" type="number" id="manual-durasi" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            <div class="mb-6">
                                <label for="mulai" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tanggal Waktu Mulai </label>
                                <input name="test_start_at" type="datetime-local" id="manual-mulai" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            <div class="mb-6">
                                <label for="akhir" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tanggal Waktu Akhir </label>
                                <input name="test_end_at" type="datetime-local" id="manual-akhir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                        </div>

                        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button id="add_test" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambah</button>
                            <button data-modal-toggle="addModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Batal</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>