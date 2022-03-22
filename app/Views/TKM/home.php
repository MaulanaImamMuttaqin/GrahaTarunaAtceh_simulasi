<?= $this->extend('templates/main_templates')?>

<?= $this->section("body")?>
   
<div class="h-screen w-screen flex flex-col">
    <div class="w-full h-16 bg-gray-900 flex justify-between items-center px-5 text-gray-200 shadow-lg">
        <div>
            TES KOMPETENSI MANAJERIAL
        </div>
        <div>
            METRIAL (85739202)
        </div>
    </div>
    <div class="flex flex-grow w-full">
        <div class="h-full bg-gray-900 w-1/6  flex flex-col justify-between ">
            <div class="flex flex-col  p-5 gap-5">
                <div class="text-gray-400">SOAL</div>
                <div id="question_number_container" class="grid grid-cols-4 gap-1 "></div>
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
            <div class="bg-gray-800 h-14 px-5 py-2.5 text-gray-400 text-sm">
                <p>Anda Login Sebagai</p>
                <p>METRIAL (85739202)</p>
            </div>
        </div>
        <div class="h-full  w-5/6 flex relative">
            <div class="w-3/5 p-5">
                <h1 class="border-b border-gray-300 font-bold text-2xl pb-4">
                    SOAL <span class="nomor_soal"></span> 
                </h1>
                <div id="soal" class=" text-sm py-2">
                    <!-- Ketika pemilihan kepala desa sedang berlangsung di tempat tinggal Anda. nenek anda yang mempunyai hak pilih dalam pemilihan kepala desa tetapi pada saat pencoblosan nenek dirawat di rumah sakit. Apa yang anda lakukan. -->
                </div>
            </div>
            <div class="w-2/5 p-5">
                <h1  class="border-b border-gray-300 font-bold text-2xl pb-4">
                    PILIH JAWABAN SOAL <span class="nomor_soal"></span> 
                </h1>
                <div id="options_soal" class=" text-sm py-2 flex flex-col gap-2">
                   
                </div>
            </div>
            <div class="w-2/5 p-5">
                <div class="h-52 grid grid-cols-2 gap-2">
                    <div class="border border-black col-span-2 flex flex-col items-center justify-center bg-yellow-300">
                        <p>sisa waktu</p>
                        <p id="test_timer" class="font-bold text-2xl"></p>
                    </div>
                    <div class="border border-black  col-span-2 bg-blue-500 text-white flex flex-col items-center justify-center">
                        <p class="font-bold text-sm">TEST KOMPETENSI MANAJERIAL (TKM) </p>
                        <a  href="#" class="text-xs">Baca Instruksi Selengkapnya</a>
                    </div>
                    <div id="question_controller" class="hidden col-span-2 flex gap-2">
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
<script type="module" src="<?= base_url('js/tkm/tkm.js')?>"></script>
    
<?= $this->endSection()?>