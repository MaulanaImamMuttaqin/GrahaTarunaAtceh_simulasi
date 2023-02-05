<div id="class_statistic" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <div class="relative p-4 w-full max-w-7xl h-full md:h-auto">

                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700  h-[300px] overflow-y-auto">

                    <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <div class="flex gap-5 items-center">
                            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                Statistik Kelas 
                            </h3>
                            <div id="loading" class="text-center hidden">
                                <svg role="status" class="inline mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                        </div>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="class_statistic">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div class="p-3 rounded-lg  max-h-[450px] ">
                        <!-- <div class="flex">
                            <div class=" flex-1 center p-3">
                                <div class="rounded-lg bg-gradient-to-r  from-blue-500 to-blue-400 shadow-lg flex w-full ">
                                    <div class="w-2/6 center text-lg h-28 text-white">
                                        <div class="center rounded-full h-10 w-10 p-2 bg-blue-800 ">
                                            <i class="fa-solid fa-list"></i>
                                        </div>
                                    </div>
                                    <div class="w-5/6 p-3 flex items-center   text-white">
                                        <div>
                                        <p class="text-sm font-bold text-white mb-2">Total Peserta</p>
                                        <span class="text-xl bg-blue-800 rounded-lg px-5 py-0.5 ">60</span>
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" flex-1 center p-3  ">
                                <div class="rounded-lg bg-gradient-to-r  from-green-500 to-green-400 shadow-lg flex w-full ">
                                    <div class="w-2/6 center text-lg h-28 text-white">
                                        <div class="center rounded-full h-10 w-10 p-2 bg-green-800 ">
                
                                            <i class="fa-solid fa-user"></i>
                                        </div>
                                    </div>
                                    <div class="w-5/6 p-3 flex items-center   text-white">
                                        <div>
                                        <p class="text-sm font-bold text-white mb-2">Total Kelas</p>
                                        <span class="text-xl bg-green-800 rounded-lg px-5 py-0.5 "></span>
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <div class=" flex-1 center p-3  ">
                                <div class="rounded-lg bg-gradient-to-r  from-yellow-500 to-yellow-400 shadow-lg flex w-full ">
                                    <div class="w-2/6 center text-lg h-28 text-white">
                                        <div class="center rounded-full h-10 w-10 p-2 bg-yellow-800 ">
                
                                            <i class="fa-solid fa-gauge-simple"></i>
                                        </div>
                                    </div>
                                    <div class="w-5/6 flex self-center h-24 overflow-hidden   text-white">
                                        <div id="max_slider" class="w-full transition duration-300 ease-in-out delay-500">
                                            <div class="h-24 flex flex-col items-start justify-center">
                                                <p class="text-sm font-bold text-white mb-2">Kecermatan tertinggi </p>
                                                <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "></span>
                                            </div>
                                            <div class="h-24 flex flex-col items-start justify-center">
                                                <p class="text-sm font-bold text-white mb-2">Kecerdasan tertinggi </p>
                                                <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "></span>
                                            </div>
                                            <div class="h-24 flex flex-col items-start justify-center">
                                                <p class="text-sm font-bold text-white mb-2">Kepribadian tertinggi </p>
                                                <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <div class=" flex-1 center p-3  ">
                                <div class="rounded-lg bg-gradient-to-r  from-purple-500 to-purple-400 shadow-lg flex w-full ">
                                    <div class="w-2/6 center text-lg h-28 text-white">
                                        <div class="center rounded-full h-10 w-10 p-2 bg-purple-800 ">
                
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <div class="w-5/6 flex self-center  h-24 overflow-hidden   text-white">
                                        <div id="avg_slider" class="w-full duration-300 ease-in-out">
                                            <div class="h-24 flex flex-col items-start justify-center">
                                                <p class="text-sm font-bold text-white mb-2">Kecermatan rata-rata </p>
                                                <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "></span>
                                            </div>
                                            <div class="h-24 flex flex-col items-start justify-center">
                                                <p class="text-sm font-bold text-white mb-2">Kecerdasan rata-rata </p>
                                                <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "></span>
                                            </div>
                                            <div class="h-24 flex flex-col items-start justify-center">
                                                <p class="text-sm font-bold text-white mb-2">Kepribadian rata-rata </p>
                                                <span class="text-xl bg-yellow-800 rounded-lg px-5 py-0.5 "></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <div class="grid grid-cols-3">

                            <div class="  p-3">
                                <div class="flex flex-col">
                                    <div class="text-xl  text-center font-thin tracking-wide">
                                        Rasio Kelulusan T
                                    </div>
                                    <div class="h-full w-full">
                                        <canvas id="test_rasio"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div class="  p-3">
                                <div class="flex flex-col">
                                    <div class="text-xl  text-center font-thin tracking-wide">
                                        Rasio Kelulusan
                                    </div>
                                    <div class="h-full w-full">
                                        <canvas id="test_rasio"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div class="  p-3">
                                <div class="flex flex-col">
                                    <div class="text-xl  text-center font-thin tracking-wide">
                                        Rasio Kelulusan
                                    </div>
                                    <div class="h-full w-full">
                                        <canvas id="test_rasio"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div class="   p-3">
                                <div class="flex flex-col">
                                    <div class="text-xl  text-center font-thin tracking-wide">
                                        Perkembangan Nilai Rata-Rata Tes
                                    </div>
                                    <div class="h-full w-full ">
                                        <canvas id="test_result_charts"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>