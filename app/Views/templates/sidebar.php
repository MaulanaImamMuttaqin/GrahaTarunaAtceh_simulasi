
    <aside class="w-full h-full " aria-label="Sidebar">
    <div class="px-3 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-full flex flex-col justify-between relative p-10 py-20 " >
        <div class="center" >
        <div class=" w-48 mb-5 center ">
            <img src="<?= base_url("/images/logo_small.png")?>" alt="">
        </div>
        </div>
        
        <ul class="space-y-2 ">
            <li>
                <a href="<?= base_url('operator')?>" class="flex items-center px-5 p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <i class="fa-solid fa-house "></i>
                <span class="ml-3">Dashboard</span>
                </a>
            </li>
            <li>
                <button type="button" class="flex items-center px-5 p-2 w-full text-base font-normal text-blue-700 rounded-lg transition duration-75 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-tes" data-collapse-toggle="dropdown-tes">
                    <i class="fa-solid fa-file-lines"></i>                    
                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Daftar Tes</span>
                    <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-tes" class="hidden py-2 space-y-2  ">
                    <li>
                        <a href="<?= base_url('operator/test_list')?>" class="hover:bg-gray-200 text-blue-700 flex items-center p-2 pl-11 w-full text-base font-normal  rounded-lg transition duration-75 group  dark:text-white dark:hover:bg-gray-700">Tes Angka Hilang</a>
                    </li>
                    <li>
                        <a href="<?= base_url('operator/test_tkm_list')?>" class="hover:bg-gray-200 text-blue-700 flex items-center p-2 pl-11 w-full text-base font-normal  rounded-lg transition duration-75 group  dark:text-white dark:hover:bg-gray-700">Tes Kompetensi Manajerial</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="<?= base_url('operator/kelas')?>" class="flex items-center px-5 p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <i class="fa-solid fa-user-group"></i>       
                <span class="flex-1 ml-3 whitespace-nowrap">Kelas</span>
                </a>
            </li>
            <li>
                <a href="<?= base_url('operator/users')?>" class="flex items-center px-5 p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <i class="fa-solid fa-user "></i>                
                <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
            </li>
            <li>
                <a href="<?= base_url('operator/settings')?>" class="flex items-center px-5 p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <i class="fa-solid fa-gear"></i>
                <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
                </a>
            </li>
            <li>
                <a href="<?= base_url("Auth/logoutAuth")?>"  class="flex items-center px-5 p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                </a>
            </li>
            
        </ul>
        <div></div>
    </div>
    </aside>