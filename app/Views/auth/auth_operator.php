<?= $this->extend('templates/main_templates')?>

<?= $this->section("body")?>



<div class="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-tl from-gray-300 to-gray-200">
        

        <div class="w-[400px] h-[550px] border border-gray-200 shadow-lg rounded-lg p-10 flex flex-col items-center justify-between gap-5 bg-white">
            
            <div class="text-center font-thin  text-blue-900 ">
                <div class=" w-52 mb-5">
                    <img src="<?= base_url("/images/logo_small.png")?>" alt="">
                </div>
                <div class="text-3xl tracking-widest">
                    <h1>LOG IN</h1>
                </div>
            </div>
            
            <form class="w-full flex flex-col items-center" method="post" action="<?= base_url('Auth/loginAuth')?>">
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="username" class="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                    <label for="user_id" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus- peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="password" name="password" id="token" class="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                    <label for="token" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus- peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                
                <div class="center">
                    <button type="submit" class="text-white text-center bg-blue-900 transition duration-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200  rounded-full w-full sm:w-auto px-5 py-2.5 ">MASUK</button>
                </div>
            </form>
            <div>
                <a  href="<?=base_url('/authTest')?>" target="_blank"  class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-semibold mr-2 px-3 py-1 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">Masuk Sebagai Peserta</a>
            </div>
            <div>
              <?php if(session()->getFlashdata('msg')):?>
                    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg " role="alert">
                       <?= session()->getFlashdata('msg') ?>
                    </div>
                <?php endif;?>
            </div>
        </div>

    </div>





<?= $this->endSection()?>