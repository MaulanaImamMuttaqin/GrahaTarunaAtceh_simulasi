


<div id="resultModal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0 ">
        <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow ">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-5 rounded-t border-b ">
                    <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
                        HASIL TEST
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="resultModal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <div class="overall">
                        <div class="flex justify-evenly p-2">
                            <div class="h-[100px] w-[130px] relative p-1 flex flex-col rounded-lg shadow-sm border border-gray bg-blue-600 text-white">
                                <p class="text-sm absolute">Terjawab</p>
                                <div class="all-total text-5xl font-semibold tracking-widest center h-full ">00</div>
                            </div>
                            <div class="h-[100px] w-[130px] relative p-1 flex flex-col rounded-lg shadow-sm border border-gray bg-green-600 text-white">
                                <p class="text-sm absolute">Benar</p>
                                <div class="all-correct text-5xl font-semibold tracking-widest center h-full ">00</div>
                            </div>
                            <div class="h-[100px] w-[130px] relative p-1 flex flex-col rounded-lg shadow-sm border border-gray bg-red-600 text-white">
                                <p class="text-sm absolute">Salah</p>
                                <div class="all-wrong text-5xl font-semibold tracking-widest center h-full ">00</div>
                            </div>
                        </div>
                    </div>
                    
                    <div >
                        <h4 class="font-semibold text-xl flex items-center">Detail <small class="ml-3">(total / benar / salah)</small></h4>
                        <h3 id="tot_answered" class="font-semmibold text-sm"></h3>
                        <div class="pl-5 mt-3 detail">
                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>