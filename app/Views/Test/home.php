<?= $this->extend('templates/main_templates')?>

<?= $this->section("body")?>

    <div id="resultModal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
        <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow ">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-5 rounded-t border-b ">
                    <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
                        HASIL TEST
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="resultModal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <div class="overall">
                        <div class="flex justify-evenly p-2">
                            <div class="h-[100px] w-[130px] relative p-1 flex flex-col rounded-lg shadow-sm border border-gray bg-blue-600 text-white">
                                <p class="text-sm absolute">Terjawab</p>
                                <div class="all-total text-5xl font-semibold tracking-widest center h-full ">00</div>
                            </div>
                            <div class="h-[100px] w-[130px] relative p-1 flex flex-col rounded-lg shadow-sm border border-gray bg-green-600 text-white">
                                <p class="text-sm absolute">Benar</p>
                                <div class="all-correct text-5xl font-semibold tracking-widest center h-full ">00</div>
                            </div>
                            <div class="h-[100px] w-[130px] relative p-1 flex flex-col rounded-lg shadow-sm border border-gray bg-red-600 text-white">
                                <p class="text-sm absolute">Salah</p>
                                <div class="all-wrong text-5xl font-semibold tracking-widest center h-full ">00</div>
                            </div>
                        </div>
                    </div>
                    
                    <div >
                        <h4 class="font-semibold text-xl flex items-center">Detail <small class="ml-3">(total / benar / salah)</small></h4>
                        <h3 id="tot_answered" class="font-semmibold text-sm"></h3>
                        <div class="pl-5 mt-3 detail">
                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    

    <div id="test" class="h-screen w-screen center bg-gray-200">
        <div id="logout" class="absolute  top-0 left-0 p-5">
            <a href="<?= base_url('test/logout')?>" class="text-blue-800 text-2xl hover:text-blue-600">
                <i class="fa-solid fa-delete-left"></i>
            </a>
            <!-- <div id="logout" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                login ulang
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div> -->
        </div>
        <div
            class="h-[550px] w-[900px] flex flex-col justify-center items-center border border-gray-300 relative rounded-lg shadow-xl bg-white">
            <div id="nth_question"
                class="absolute top-0 left-0 px-5 py-2 text-3xl font-semibold border border-gray-300 rounded-lg m-3">
                0
            </div>
            <div id="timer"
                class="absolute top-0 right-0 px-5 py-2 text-3xl font-semibold border border-gray-300 rounded-lg m-3">
            </div>
            <div id="soal" class="flex mb-10 gap-2 ">
                <!-- di render secara dinamis dari javascript -->
            </div>
            <!-- <div id="test"></div> -->
            <div id="start-test" class="">
                <button
                    class="px-10 py-2 border border-gray-400 rounded-lg bg-blue-500 font-bold text-white hover:bg-blue-600 transition"
                    onclick="startTest()">
                    MULAI TES
                </button>
            </div>

            <div id="pertanyaan" class="flex flex-col items-center hidden">
                <div class="question w-32 h-12 border border-gray-400 rounded-lg center text-3xl mb-5">0000</div>
                <div id="choices" class="border border-gray-400 flex gap-7 justify-center p-2 px-5 ">
                    <!-- di render secara dinamis lewat js -->
                </div>
            </div>
            <div id="message" class=" text-xl text-center m-5 hidden">
                <p>Tes sudah selesai</p>
                <button class="mt-5 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button" data-modal-toggle="resultModal">
                    Tampilkan Hasil
                </button>
            </div>
            
        </div>


    </div>

<?= $this->endSection()?>


<?= $this->section("additional-scripts")?>

    <script>
        let TestConfiguration = {
            duration: "<?= $data['duration']?>",
            id: "<?= $data['id']?>",
            number_digits: "<?= $data['number_digits']?>",
            question_total: "<?= $data['question_total']?>",
            test_end_at: "<?= $data['test_end_at']?>",
            test_id: "<?= $data['test_id']?>",
            test_start_at: "<?= $data['test_start_at']?>",
            result_test_id : "<?= $data['result_test_id']?>"
        }
    </script>

    <script src="<?= base_url('js/scripts.js')?>"></script>
<?= $this->endSection()?>