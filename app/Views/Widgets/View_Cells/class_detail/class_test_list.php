<?php foreach($data as $key => $row): ?>
<div class="mb-2">
    <div class="text-blue-500 font-semibold border border-gray-200 bg-white rounded-lg h-12 shadow-lg flex items-center justify-between px-5 ">
        <div class="flex  w-3/4">
            <div class="w-10 py-4 text-center text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <?= $key+1?>
            </div>
            <div class="flex-1  py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                <a><?= $row['test_name']?></a>
            </div>
            <div class="flex-1  py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                <a> <?= $row['test_id']?></a>
            </div>
            <div class="flex-1  py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                <a><?= $row['date_created']?></a>
            </div>
        </div>
        <div>
            <button onclick="toggleTestDetailDropdown(<?=$key?>)"  class="text-blue-500 font-bold bg-gray-100 hover:bg-gray-200  rounded-lg text-sm px-4 py-2 text-center">
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <button onclick="deleteTest(<?= $row['test_id']?>)"  class="text-white bg-red-500 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center">
                <i class="fa-solid fa-trash-can"></i>  
            </button>
        </div>
    </div>

    <div id="test_detail_drop_down_<?=$key?>" class="hidden flex justify-center gap-10 py-2 test_detail">

        <button onclick="openKecermatanModal('<?=$row['test_id']?>', '<?= $row['kecermatan']?>')" >
            <div class="<?= $row['kecermatan'] ? 'bg-blue-200' : 'bg-white' ?> hover:bg-gray-300 transition text-blue-500 font-semibold border border-gray-200  rounded-lg h-auto shadow-lg flex flex-col items-center justify-between px-5">
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

        <button onclick="">
            <div class="hover:bg-gray-300 transition text-blue-500 font-semibold border border-gray-200 bg-white rounded-lg h-auto shadow-lg flex flex-col items-center justify-between px-5">
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

        <button onclick="">
            <div class="hover:bg-gray-300 transition text-blue-500 font-semibold border border-gray-200 bg-white rounded-lg h-auto shadow-lg flex flex-col items-center justify-between px-5">
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