
    <aside class="w-full h-full" aria-label="Sidebar">
    <div class="px-3 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-full flex flex-col justify-between relative p-10 py-20" >
        <div class="center" >
        <div class=" w-48 mb-5 center ">
            <img src="<?= base_url("/images/logo_small.png")?>" alt="">
        </div>
        </div>
        
        <ul class="space-y-2 ">
            <li>
                <a href="<?= base_url('operator')?>" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="fa-solid fa-house "></i>
                <span class="ml-3">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="<?= base_url('operator/test_list')?>" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="fa-solid fa-file-lines"></i>
                <span class="flex-1 ml-3 whitespace-nowrap">Daftar Tes</span>
                </a>
            </li>
        
            <li>
                <a href="<?= base_url('operator/users')?>" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="fa-solid fa-user "></i>                
                <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
            </li>
            <li>
                <a href="<?= base_url('operator/settings')?>" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="fa-solid fa-gear"></i>
                <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
                </a>
            </li>
            <li>
                <a href="<?= base_url("Auth/logoutAuth")?>"  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                </a>
            </li>
            
        </ul>
        <div></div>
    </div>
    </aside>