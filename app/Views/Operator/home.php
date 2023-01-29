<?= $this->extend('templates/operator_templates')?>

<?= $this->section("content")?>

<div class="h-full w-full flex flex-col p-10">
    <?= view_cell('\App\Libraries\Widget::title_header', ['title'=> 'Dashboard'])?>

    <div class="h-full w-full p-2 flex flex-col gap-5">
            <div class="flex">
                <div class=" flex-1 center p-3">
                    <div class="rounded-lg bg-gradient-to-r  from-blue-500 to-blue-400 shadow-lg flex w-full ">
                        <div class="w-2/6 center text-lg h-28 text-white">
                            <div class="center rounded-full h-10 w-10 p-2 bg-blue-800 ">
                                <i class="fa-solid fa-list"></i>
                            </div>
                        </div>
                        <div class="w-5/6 p-3 flex items-center   text-white">
                            <div>
                            <p class="text-sm font-bold text-white mb-2">Total Peserta</p>
                            <span class="text-xl bg-blue-800 rounded-lg px-5 py-0.5 "><?= $total_participant?></span>
    
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class=" flex-1 center p-3  ">
                    <div class="rounded-lg bg-gradient-to-r  from-green-500 to-green-400 shadow-lg flex w-full ">
                        <div class="w-2/6 center text-lg h-28 text-white">
                            <div class="center rounded-full h-10 w-10 p-2 bg-green-800 ">
    
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </div>
                        <div class="w-5/6 p-3 flex items-center   text-white">
                            <div>
                            <p class="text-sm font-bold text-white mb-2">Total Kelas</p>
                            <span class="text-xl bg-green-800 rounded-lg px-5 py-0.5 "><?= $total_class?></span>
    
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class=" flex-1 center p-3  ">
                    <div class="rounded-lg bg-gradient-to-r  from-yellow-500 to-yellow-400 shadow-lg flex w-full ">
                        <div class="w-2/6 center text-lg h-28 text-white">
                            <div class="center rounded-full h-10 w-10 p-2 bg-yellow-800 ">
    
                                <i class="fa-solid fa-gauge-simple"></i>
                            </div>
                        </div>
                        <div class="w-5/6 flex self-center h-24 overflow-hidden   text-white">
                            <div id="max_slider" class="w-full transition duration-300 ease-in-out delay-500">
                                <div class="h-24 flex flex-col items-start justify-center">
                                    <p class="text-sm font-bold text-white mb-2">Kecermatan tertinggi </p>
                                    <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "><?= $max_score[0]?></span>
                                </div>
                                <div class="h-24 flex flex-col items-start justify-center">
                                    <p class="text-sm font-bold text-white mb-2">Kecerdasan tertinggi </p>
                                    <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "><?= $max_score[1]?></span>
                                </div>
                                <div class="h-24 flex flex-col items-start justify-center">
                                    <p class="text-sm font-bold text-white mb-2">Kepribadian tertinggi </p>
                                    <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "><?= $max_score[2]?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class=" flex-1 center p-3  ">
                    <div class="rounded-lg bg-gradient-to-r  from-purple-500 to-purple-400 shadow-lg flex w-full ">
                        <div class="w-2/6 center text-lg h-28 text-white">
                            <div class="center rounded-full h-10 w-10 p-2 bg-purple-800 ">
    
                            <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="w-5/6 flex self-center  h-24 overflow-hidden   text-white">
                            <div id="avg_slider" class="w-full duration-300 ease-in-out">
                                <div class="h-24 flex flex-col items-start justify-center">
                                    <p class="text-sm font-bold text-white mb-2">Kecermatan rata-rata </p>
                                    <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "><?= $avg_score[0]?></span>
                                </div>
                                <div class="h-24 flex flex-col items-start justify-center">
                                    <p class="text-sm font-bold text-white mb-2">Kecerdasan rata-rata </p>
                                    <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "><?= $avg_score[1]?></span>
                                </div>
                                <div class="h-24 flex flex-col items-start justify-center">
                                    <p class="text-sm font-bold text-white mb-2">Kepribadian rata-rata </p>
                                    <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "><?= $avg_score[2]?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="text-4xl  text-center font-thin tracking-wide mb-5">
                    Rasio Kelulusan Tes 
                </div>
                <div class="flex">
                    
                    <div class="  p-3 flex-1">
                        <div class="flex flex-col">
                            <div class="text-xl  text-center font-thin tracking-wide">
                                Tes Kecermatan
                            </div>
                            <div class="h-full w-full">
                                <canvas id="donut_chart_kecermatan"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="  p-3 flex-1">
                        <div class="flex flex-col">
                            <div class="text-xl  text-center font-thin tracking-wide">
                                Tes Kecerdasan
                            </div>
                            <div class="h-full w-full">
                                <canvas id="donut_chart_kecerdasan"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="  p-3 flex-1">
                        <div class="flex flex-col">
                            <div class="text-xl  text-center font-thin tracking-wide">
                                Tes Kepribadian
                            </div>
                            <div class="h-full w-full">
                                <canvas id="donut_chart_kepribadian"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
    </div>
</div>
    
<?= $this->endSection()?>


<?= $this->section("additional-scripts")?>
    <script>
        window.kecermatan_rasio = JSON.parse('<?= $kecermatan?>')
        window.kecerdasan_rasio = JSON.parse('<?= $kecerdasan?>')
        window.kepribadian_rasio = JSON.parse('<?= $kepribadian?>')
    </script>
     <script src="<?= base_url('js/chart.js')?>"></script>
    <script type="module" src="<?= base_url('js/operator/home/index.js')?>"></script>
<!-- 
    <script src="<?= base_url('js/chart.js')?>"></script>
    <script src="<?= base_url('js/operator_scripts.js')?>"></script>
    <script src="<?= base_url('js/operator_home.js')?>"></script>
     -->

<?= $this->endSection()?>