<?= $this->extend('templates/operator_templates')?>

<?= $this->section("content")?>

<div class="h-full w-full flex flex-col p-10">
    <?= view_cell('\App\Libraries\Widget::title_header', ['title'=> 'Dashboard'])?>

    <div class="h-full w-full p-2 grid grid-cols-4">
            <div class=" center p-3">
                <div class="rounded-lg bg-gradient-to-r  from-blue-500 to-blue-400 shadow-lg flex w-full ">
                    <div class="w-2/6 center text-lg h-28 text-white">
                        <div class="center rounded-full h-10 w-10 p-2 bg-blue-800 ">
                            <i class="fa-solid fa-list"></i>
                        </div>
                    </div>
                    <div class="w-5/6 p-3 flex items-center   text-white">
                        <div>
                        <p class="text-sm font-bold text-white mb-2">Total Test</p>
                        <span class="text-xl bg-blue-800 rounded-lg px-5 py-0.5 "><?=$count_test?></span>

                        </div>
                    </div>
                </div>
            </div>
            <div class=" center p-3  ">
                <div class="rounded-lg bg-gradient-to-r  from-green-500 to-green-400 shadow-lg flex w-full ">
                    <div class="w-2/6 center text-lg h-28 text-white">
                        <div class="center rounded-full h-10 w-10 p-2 bg-green-800 ">

                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div class="w-5/6 p-3 flex items-center   text-white">
                        <div>
                        <p class="text-sm font-bold text-white mb-2">Total Peserta Selesai</p>
                        <span class="text-xl bg-green-800 rounded-lg px-5 py-0.5 "><?= $count_participant['finished']?> / <?= $count_participant['total']?></span>

                        </div>
                    </div>
                </div>
            </div>
            <div class=" center p-3  ">
                <div class="rounded-lg bg-gradient-to-r  from-yellow-500 to-yellow-400 shadow-lg flex w-full ">
                    <div class="w-2/6 center text-lg h-28 text-white">
                        <div class="center rounded-full h-10 w-10 p-2 bg-yellow-800 ">

                            <i class="fa-solid fa-gauge-simple"></i>
                        </div>
                    </div>
                    <div class="w-5/6 p-3 flex items-center   text-white">
                        <div>
                        <p class="text-sm font-bold text-white mb-2">Skor Rata-Rata</p>
                        <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "><?= $count_average_score?></span>

                        </div>
                    </div>
                </div>
            </div>
            <div class=" center p-3  ">
                <div class="rounded-lg bg-gradient-to-r  from-purple-500 to-purple-400 shadow-lg flex w-full ">
                    <div class="w-2/6 center text-lg h-28 text-white">
                        <div class="center rounded-full h-10 w-10 p-2 bg-purple-800 ">

                        <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div class="w-5/6 p-3 flex items-center   text-white">
                        <div>
                        <p class="text-sm font-bold text-white mb-2">Skor Tertinggi</p>
                        <span class="text-xl bg-purple-800 rounded-lg px-5 py-0.5 "><?= $count_max_score?></span>

                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-span-2 row-span-5 p-3">
                <div class="flex flex-col">
                    <div class="text-xl  text-center font-thin tracking-wide">
                        Rasio Kelulusan
                    </div>
                    <div class="h-full w-full">
                        <canvas id="donut-chart"></canvas>
                    </div>
                </div>
            </div>
            <div class="  col-span-2 row-span-5 p-3">
                <div class="flex flex-col">
                    <div class="text-xl  text-center font-thin tracking-wide">
                        Perkembangan Nilai Rata-Rata Tes
                    </div>
                    <div class="h-full w-full ">
                        <canvas id="bar-chart"></canvas>
                    </div>
                </div>
            </div>
           

            
    </div>
</div>
    

<?= $this->endSection()?>


<?= $this->section("additional-scripts")?>
    <script>
        let avg_score_list = JSON.parse('<?=json_encode($avg_score_list) ?>')
        let count_ratio = JSON.parse('<?=json_encode($count_ratio) ?>')
        let score_average = '<?= json_encode($count_average_score)?>'
        console.log('<?= json_encode($count_participant)?>')
        
    </script>
    <script src="<?= base_url('js/chart.js')?>"></script>
    <script src="<?= base_url('js/operator_scripts.js')?>"></script>
    <script src="<?= base_url('js/operator_home.js')?>"></script>
    

<?= $this->endSection()?>