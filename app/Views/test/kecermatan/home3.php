<?= $this->extend('templates/main_templates')?>

<?= $this->section("body")?>
    <?= $this->include("widgets/modals/resultModal")?>
    <div id="test" class="h-screen w-screen center bg-gray-200">
        <div id="logout" class="absolute  top-0 left-0 p-5">
            <a href="<?= base_url('authTest/logoutAuth')?>" class="text-blue-800 text-2xl hover:text-blue-600">
                <i class="fa-solid fa-delete-left"></i>
            </a>
        </div>
        <div>
            <div class="flex justify-end text-6xl font-normal px-20 ">
                <div id="timer" class="p-5 bg-gray-300"></div>
            </div>
            <div class="w-screen h-[500px] border-y-8  border-black items-center-v px-20">
                <div id="soal" class="h-3/5  flex items-center justify-center hidden">
                    <!-- di render secara dinamis lewat js -->
                </div>
                <div id="pertanyaan"  class="h-1/5 flex hidden justify-center items-center">
                    <div class="flex flex-col text-center font-semibold ">
                        <div class="question w-full h-12 border border-gray-400 font-bold  center text-4xl">0000</div>
                        <div id="choices" class=" flex gap-3 p-2 px-5 ">
                            <!-- di render secara dinamis lewat js -->
                        </div>
                    </div>
                </div>
            
                <div id="start-test" class="flex justify-center">
                    <button
                        class="px-10 py-2 border border-gray-400 rounded-lg bg-blue-500 font-bold text-white hover:bg-blue-600 transition"
                        id="start_test_button"
                    >
                        MULAI TES
                    </button>
                </div>

                <div id="message" class="flex flex-col items-center hidden">
                    <p>Tes sudah selesai</p>
                    <button class="mt-5 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button" data-modal-toggle="resultModal">
                        Tampilkan Hasil
                    </button>
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
            number_digits: "<?= $data['number_digits']?>",
            question_total: "<?= $data['question_total']?>",
            test_end_at: "<?= $data['test_end_at']?>",
            test_id: "<?= $data['test_id']?>",
            test_start_at: "<?= $data['test_start_at']?>",
            result_test_id : "<?= $data['result_test_id']?>",
            auto: "<?= $data['mode']?>" === "0" ? false : true
        }

        window.question_list = JSON.parse('<?= isset($data['questions_list']) ? $data['questions_list'] : '[]'?>')
    </script>

    <script type="module" src="<?= base_url('js/tests/test_kecermatan/index.js')?>"></script>
<?= $this->endSection()?>