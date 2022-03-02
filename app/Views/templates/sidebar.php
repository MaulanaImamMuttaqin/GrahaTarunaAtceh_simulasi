<!-- 
        <div class="h-full w-full sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex py-6">
            <div class="h-full flex flex-col justify-between ">
                <div class="h-16 w-full center  ">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg1.svg" alt="Logo">
                </div>
                <ul class="mt-12 text-xl ">
                    <li class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
                        <a class=" px-8 w-full  flex items-center focus:outline-none focus:ring-2 focus:ring-white " href="<?= base_url('/')?>">
                            <i class="fa-solid fa-house "></i>
                            <span class="text-sm ml-9 ">Dashboard</span>
                        </a>
                    </li>
                    <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                        <a class=" px-8 w-full  flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                            <i class="fa-solid fa-user "></i>
                            <span class="text-sm ml-9 ">User</span>
                        </a>
                    </li>
                    <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                        <a class=" px-8 w-full  flex items-center focus:outline-none focus:ring-2 focus:ring-white" href="<?= base_url('operator/test')?>">
                            <i class="fa-solid fa-file-lines"></i>
                            <span class="text-sm ml-9 ">Test</span>
                        </a>
                    </li>
                    
                    <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center">
                        <a class=" px-8 w-full  flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                        <i class="fa-solid fa-gear"></i>
                            <span class="text-sm ml-9 ">Settings</span>
                        </a>
                    </li>
                </ul>
                <div class=" w-full center text-2xl p-5">
                    <a id="nav_controller" class="center  transition-all duration-300 text-gray-300 text-center rounded-full textfocus:outline-none focus:ring-2 focus:ring-white block h-8 w-8">
                        <i class="fa-solid fa-chevron-left"></i>                 
                    </a>   
                </div>
            </div>
        </div>
        
    
     -->
    <aside class="w-full h-full" aria-label="Sidebar">
    <div class="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-full flex flex-col justify-center relative p-10" >
        <!-- <a href="https://flowbite.com" class="flex pl-2.5 mb-5 absolute top-0 border border-black ">
                <svg class="mr-3 h-9" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA"/><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE"/><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2"/></svg>
                <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">FlowBite</span>
        </a> -->
        <ul class="space-y-2 ">
            <li>
                <a href="<?= base_url('/')?>" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="fa-solid fa-house "></i>
                <span class="ml-3">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="<?= base_url('operator/test')?>" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
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