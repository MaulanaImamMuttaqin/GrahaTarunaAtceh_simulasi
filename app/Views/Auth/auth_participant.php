<?= $this->extend('templates/main_templates')?>

<?= $this->section("body")?>


<div class="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-tl  from-gray-300 to-gray-200">
        <div class="text-3xl mb-10   flex  flex-col items-center font-thin text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-500">
            <div class=" w-52 mb-5">
                <img src="<?= base_url("/images/logo_small.png")?>" alt="">
            </div>
            <h1 class="text-2xl">SIMULASI CAT CPNS</h1>
        </div>

        <div class=" w-[400px] mobile:w-[320px] border border-gray-200 shadow-lg rounded-lg py-10 p-5 flex flex-col items-center justify-center gap-5 bg-white">
            <div class="text-3xl text-gray-400 font-thin">
                <h1>Masuk Tes</h1>
            </div>
            
            <form class="w-full" method="POST" action="<?= base_url('authtest/loginAuth')?>">
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="user_id" class="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-400 appearance-none dark:border- dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                    <label for="user_id" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User ID</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input value="<?= session()->getFlashdata('test_id')?>" type="text" name="token" id="token" class="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-400 appearance-none dark:border- dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                    <label for="token" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tes Token</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <label for="test_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tes</label>
                    <select name="test_name" id="test_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value="kecermatan">Tes Kecermatan</option>
                        <option value="kecerdasan">Tes Kecerdasan</option>
                        <option value="kepribadian">Tes Kepribadian</option>
                    </select>
                </div>

                <div class="center">
                    <button type="submit" class="text-white text-center bg-blue-900 transition duration-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200  rounded-full w-full sm:w-auto px-5 py-2.5 ">MASUK</button>
                </div>
                <div class="my-5 px-4 py-2 text-sm text-blue-700 bg-blue-100 rounded-lg " role="alert">
                    <small>Masukkan <b>ID User</b>  dan <b>Token</b>  yang didapat dari operator untuk masuk ke dalam Tes</small>
                </div>
                <div>
                <?php if(session()->getFlashdata('msg')):?>
                    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg " role="alert">
                       <small><?= session()->getFlashdata('msg') ?></small>
                    </div>
                <?php endif;?>
            </div>
            </form>
        </div>

    </div>






<?= $this->endSection()?>