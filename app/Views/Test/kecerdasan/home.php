<?= $this->extend('templates/main_templates')?>

<?= $this->section("body")?>
<div class="h-screen w-screen flex flex-col">
    <?= $this->include("Widgets/Modals/test/kepribadian/infoModal")?>
    <div class="w-full h-16 bg-gray-900 flex justify-between items-center px-5 text-gray-200 shadow-lg">
        <div>
            TES KEcerdasan
        </div>
        <div>
            <?= session()->get("participant_data")['name']?> ( <?= session()->get("participant_data")['user_id']?> )
            <button id="dropdown_profile" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><i class="fa-solid fa-user"></i> </button>
                <!-- Dropdown menu -->
            <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown_profile">
                <li>
                    <button id="logout_test" class="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex justify-between items-center"><span>Logout</span> <i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                </li>
               
                </ul>
            </div>
        </div>
    </div>
    <div class="flex flex-grow w-full">
        <div class="h-full bg-gray-900 w-1/6  flex flex-col justify-between ">
            <div class="flex flex-col  p-5 gap-5">
                <div class="text-gray-400">SOAL</div>
                <div id="question_number_container" class="grid grid-cols-5 gap-1 max-h-[500px] overflow-auto"></div>
                <div class="text-gray-400" onclick="toQuestion(0)">
                    <h1 class="mb-5">KETERANGAN</h1>
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center" >
                            <span class="text-center inline-block h-5 w-14 mr-2  bg-green-800 rounded-lg "></span>
                           <span>Sudah dijawab</span> 
                        </div>
                        <div class="flex items-center" >
                            <span class="text-center inline-block h-5 w-14 mr-2  bg-white rounded-lg "></span>
                            <span>Belum dijawab</span> 
                        </div>
                        <div class="flex items-center" >
                            <span class="text-center inline-block h-5 w-14 mr-2  bg-yellow-300 rounded-lg "></span>
                            <span>Posisi Saat ini</span> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 h-auto px-5 py-2.5 text-gray-400 text-sm">
                <p>Anda Login Sebagai</p>
                <p> <?= session()->get("participant_data")['name']?> (<?= session()->get("participant_data")['user_id']?>)</p>
               
            </div>
        </div>
        <div class="h-full  w-5/6 flex relative">
            <div class="w-3/5 p-5">
                <h1 class="border-b border-gray-300 font-bold text-2xl pb-4">
                    SOAL <span class="nomor_soal"></span> 
                </h1>
                <div id="soal" class=" text-sm py-2"></div>
                <div class="bars h-52 bg-gray-200 rounded-lg"></div>
            </div>
            <div class="w-2/5 p-5">
                <h1  class="border-b border-gray-300 font-bold text-2xl pb-4">
                    PILIH JAWABAN SOAL <span class="nomor_soal"></span> 
                </h1>
                <div id="options_soal" class="hidden max-h-[500px] overflow-auto text-sm py-2 flex flex-col gap-2"></div>
                <div class="bars flex flex-col gap-2 py-2">
                    <div class="h-10 bg-gray-200 rounded-lg"></div>
                    <div class="h-10 bg-gray-200 rounded-lg"></div>
                    <div class="h-10 bg-gray-200 rounded-lg"></div>
                    <div class="h-10 bg-gray-200 rounded-lg"></div>
                    <div class="h-10 bg-gray-200 rounded-lg"></div>
                    <div class="h-10 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
            <div class="w-2/5 p-5">
                <div class="h-52  grid grid-cols-2 gap-2">
                    <div class="border border-black col-span-2 flex flex-col items-center justify-center bg-yellow-300">
                        <p>sisa waktu</p>
                        <p id="test_timer" class="font-bold text-xl"></p>
                    </div>
                    <div class="border border-black  col-span-2 bg-blue-500 text-white flex flex-col items-center justify-center">
                        <p class="font-bold text-sm">TEST KEcerdasan</p>
                        <button class="text-xs" type="button" data-modal-toggle="infoModal">
                            Baca Instruksi Selengkapnya
                        </button>
                    </div>
                    <div id="question_controller" class="hidden col-span-2 row-span-2 flex gap-2">
                        <button id="prev" class="flex-1 border border-black text-white bg-red-600 center uppercase text-sm">
                            < Back
                        </button>
                        <button id="next" class="flex-1 border border-black text-white bg-green-600 center uppercase text-sm">
                            Next >
                        </button>
                    </div>
                    <div id="start_test_button" class=" col-span-2 flex gap-2">
                        <button class="flex-1 border border-black text-white bg-blue-600 center uppercase text-sm">
                            MULAI TEST
                        </button>
                    </div>
                    <div id="stop_test_button" class="hidden col-span-2 flex gap-2">
                        <button class="flex-1 border border-black text-white bg-blue-600 center uppercase text-sm">
                            AKHIRI TEST
                        </button>
                    </div>
                    <div id="test_finish_message" class="hidden col-span-2 flex gap-2">
                        <div class="flex-1 borcer border-black text-white bg-blue-700 center uppercase text-sm">
                            test sudah berakhir
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-300 h-14 flex items-center absolute px-5 py-2.5 text-gray-600 w-full bottom-0 text-xs">
                Copyright &copy; 2020 SSDM All Rights Reserved
            </div>
        </div>
        
    </div>
</div>

<?= $this->endSection()?>


<?= $this->section("additional-scripts")?>
    <script>
        
        window.config = {
            duration: "<?= $data['duration']?>",
            id: "<?= $data['id']?>",
            test_end_at: "<?= $data['test_end_at']?>",
            test_id: "<?= $data['test_id']?>",
            test_start_at: "<?= $data['test_start_at']?>",
            result_test_id : "<?= $data['result_test_id']?>",
            questions_list : JSON.parse(`<?= $data['questions_list']?>`)
        }

    </script>
    <script type="module" src="<?= base_url('js/tests/test_kecerdasan/index.js')?>"></script>
<?= $this->endSection()?>