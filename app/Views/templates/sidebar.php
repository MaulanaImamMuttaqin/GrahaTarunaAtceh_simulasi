
    <aside class="w-full h-full" aria-label="Sidebar">
    <div class="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-full flex flex-col justify-center relative p-10" >
        <!-- <a href="https://flowbite.com" class="flex pl-2.5 mb-5 absolute top-0 border border-black ">
                <svg class="mr-3 h-9" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA"/><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE"/><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2"/></svg>
                <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">FlowBite</span>
        </a> -->
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
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="fa-solid fa-gear"></i>
                <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                </a>
            </li>
            
        </ul>
    </div>
    </aside>