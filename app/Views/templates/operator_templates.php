<?= $this->extend('templates/main_templates')?>

<?= $this->section("body")?>


<div class="h-screen flex relative">
        <div id="profile" class="absolute z-10 top-0 right-0 p-5 gap-4 flex flex-col items-end ">
            <button 
                id="profileDropdown" 
                data-dropdown-toggle="profieDropdownInfirmation" 
                class="h-14 w-14 text-white bg-gray-700  focus:ring-4  rounded-full text-xl  text-center inline-flex items-center justify-center" 
                type="button"
                >
                <i class="fa-solid fa-user "></i>
            </button>
            
    <!-- Dropdown menu -->
            <div id="profieDropdownInfirmation" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <div class="py-3 px-4 text-gray-900 dark:text-white">
                    <span class="block text-sm"></span>
                </div>
                <ul class="py-1" aria-labelledby="profileDropdown">
                    <li>
                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Ganti Password</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="<?= base_url("Auth/logoutAuth")?>" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </div>



        <div id="navbar" class="h-full w-1/5 transition-all duration-300 overflow-hidden">
            <?= $this->include('templates/sidebar')?>
        </div>
        <div id="content" class="h-full w-4/5 transition-all duration-300 bg-gradient-to-tl  from-gray-300 to-gray-200">
            <?= $this->renderSection("content") ?>
        </div>    
    </div>
    

<?= $this->endSection()?>

