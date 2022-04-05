<?php foreach($data as $key => $row): ?>
<div class="mb-2">
    <div class="text-blue-500 font-semibold border border-gray-200 bg-white rounded-lg h-12 shadow-lg flex items-center justify-between px-5 ">
        <div class="flex  w-3/4 items-center justify-center">
            <div class="w-10 py-4 text-center text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <?= $key+1?>
            </div>
            <div class="flex-1  py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                <a><?= $row['test_name']?></a>
            </div>
            <div class="flex-1  py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 flex items-center gap-5 justify-center ">
                <a> <?= $row['test_id']?></a>
                <div class="">
                    <button onclick="copy_test_id('<?= $row['test_id']?>')" onmouseleave="id_copied()"  data-tooltip-target="tooltip_copy_id_button" type="button" class="text-blue-500 font-medium rounded-lg text-sm p-2 text-center hover:bg-blue-400 hover:text-white"><i class="fa-solid fa-copy"></i></button>
                    <div id="tooltip_copy_id_button" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                        Salin ID Tes
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>
            <div class="flex-1  py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 ">
                <a><?= $row['date_created']?></a>
            </div>
        </div>
        <div>
            <button type="button" onclick="open_test_result_list_modal(<?=$row['test_id']?>)"   class="text-blue-500 font-bold bg-gray-100 hover:bg-gray-200  rounded-lg text-sm px-4 py-2 text-center">
                <i class="fa-solid fa-square-poll-vertical"></i>
            </button>
            <button onclick="toggle_detail_dropdown(<?=$key?>)"  class="text-blue-500 font-bold bg-gray-100 hover:bg-gray-200  rounded-lg text-sm px-4 py-2 text-center">
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <button onclick="delete_test(<?= $row['test_id']?>)"  class="text-white bg-red-500 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center">
                <i class="fa-solid fa-trash-can"></i>  
            </button>
        </div>
    </div>

    <div id="test_detail_drop_down_<?=$key?>" class="hidden flex justify-center gap-10 py-2 test_detail">

        <button onclick="open_kecermatan_modal('<?=$row['test_id']?>', '<?= $row['kecermatan']?>')" >
            <div class="<?= $row['kecermatan'] ? 'bg-white' : 'bg-gray-300' ?> hover:bg-gray-200 transition text-blue-500 font-semibold border border-gray-200  rounded-lg h-auto shadow-lg flex flex-col items-center justify-between px-5">
                <div class="flex text-4xl  p-5">
                    <i class="fa-solid fa-bullseye"></i>
                </div>
                <div class="flex  justify-center gap-5">
                    <div class="flex-1  py-1 text-left px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        <p>Tes Kecermatan</p>
                    </div>
                    <!-- <button onclick="manageTest(<?= $row['test_id']?>)"  class=" text-blue-500 font-bold bg-gray-100 hover:bg-gray-200  rounded-lg text-sm px-4 py-2 text-center">
                       <i class="fa-solid fa-wrench"></i>
                    </button> -->      
                </div>
            </div>
        </button>

        <button onclick="open_kecerdasan_modal('<?=$row['test_id']?>', '<?= $row['kecerdasan']?>')">
            <div class="<?= $row['kecerdasan'] ? 'bg-white' : 'bg-gray-300' ?> hover:bg-gray-200 transition text-blue-500 font-semibold border border-gray-200 rounded-lg h-auto shadow-lg flex flex-col items-center justify-between px-5">
                <div class="flex text-4xl  p-5">
                    <i class="fa-solid fa-brain"></i>
                </div>
                <div class="flex  justify-center gap-5">
                    <div class="flex-1  py-1 text-left px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        <p>Tes Kecerdasan</p>
                    </div>
                    <!-- <button onclick="manageTest(<?= $row['test_id']?>)"  class=" text-blue-500 font-bold bg-gray-100 hover:bg-gray-200  rounded-lg text-sm px-4 py-2 text-center">
                       <i class="fa-solid fa-wrench"></i>
                    </button> -->  
                </div>
            </div>
        </button>

        <button onclick="open_kepribadian_modal('<?=$row['test_id']?>', '<?= $row['kepribadian']?>')">
            <div class="<?= $row['kepribadian'] ? 'bg-white' : 'bg-gray-300' ?> hover:bg-gray-200 transition text-blue-500 font-semibold border border-gray-200  rounded-lg h-auto shadow-lg flex flex-col items-center justify-between px-5">
                <div class="flex text-4xl  p-5">
                    <i class="fa-solid fa-puzzle-piece"></i>
                </div>
                <div class="flex  justify-center gap-5">
                    <div class="flex-1  py-1 text-left px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        <p>Tes Kepribadian</p>
                    </div>
                    <!-- <button onclick="manageTest(<?= $row['test_id']?>)"  class=" text-blue-500 font-bold bg-gray-100 hover:bg-gray-200  rounded-lg text-sm px-4 py-2 text-center">
                       <i class="fa-solid fa-wrench"></i>
                    </button> -->

                </div>
            </div>
        </button>

        <!-- <div class=" text-blue-500 font-semibold border border-gray-200 bg-white rounded-lg h-10 shadow-lg flex items-center justify-between px-5">
            <div class="flex  w-3/4">
                
                <div class="flex-1  py-4 text-left px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <p>Tes Kecermatan</p>
                </div>
                <div class="flex-1  py-4 text-left px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    
                </div>
            </div>
            <div class="flex w-1/4  justify-center gap-5">
                <button onclick="manageTest(<?= $row['test_id']?>)"  class=" text-blue-500 font-bold bg-gray-100 hover:bg-gray-200  rounded-lg text-sm px-4 py-2 text-center">
                   <i class="fa-solid fa-wrench"></i>
                </button>
                
            </div>
        </div>

        <div class=" text-blue-500 font-semibold border border-gray-200 bg-white rounded-lg h-10 shadow-lg flex items-center justify-between px-5">
            <div class="flex  w-3/4">
                <div class="flex-1  py-4 text-left px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <p>Tes Kecerdasan</p>
                </div>
                <div class="flex-1  py-4 text-left px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    
                </div>
            </div>
            <div class="flex w-1/4  justify-center gap-5">
                <button onclick="manageTest(<?= $row['test_id']?>)"  class=" text-blue-500 font-bold bg-gray-100 hover:bg-gray-200  rounded-lg text-sm px-4 py-2 text-center">
                   <i class="fa-solid fa-wrench"></i>
                </button>
                
            </div>
        </div>
        <div class=" text-blue-500 font-semibold border border-gray-200 bg-white rounded-lg h-10 shadow-lg flex items-center justify-between px-5">
            <div class="flex  w-3/4">
                <div class="flex-1  py-4 text-left px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <p>Tes Kepribadian</p>
                </div>
                <div class="flex-1  py-4 text-left px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    
                </div>
            </div>
            <div class="flex w-1/4  justify-center gap-5">
                <button onclick="manageTest(<?= $row['test_id']?>)"  class=" text-blue-500 font-bold bg-gray-100 hover:bg-gray-200  rounded-lg text-sm px-4 py-2 text-center">
                   <i class="fa-solid fa-wrench"></i>
                </button>
                
            </div>
        </div> -->
        
    </div>
</div>

<?php endforeach;?>