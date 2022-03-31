<div id="test_kecermatan_result" class="hidden p-3 flex flex-col gap-3 ">
    <div class="border border-gray-200 flex justify-between items-center p-3">
        <div>
            <div class="flex  gap-1 ">
                <p class="w-20">Nama</p>
                <p> :</p>
                <p class="participant_result_name">Maulana Imam Muttaqin</p>
            </div>
            <div class="flex  gap-1 ">
                <p class="w-20">user ID</p>
                <p> :</p>
                <p class="participant_result_id">1804105010004</p>
            </div>
            <div class="flex  gap-1 ">
                <p class="w-20">Status</p>
                <p> :</p>
                <p id="participant_result_is_passed"></p>
            </div>
        </div>
        <div class="flex border border-gray-200 text-2xl p-3">
            <p class="border-r border-gray-200 p-2">Nilai</p>
            <p class="p-2 text-white font-bold" id="participant_result_final_result">65.44</p>
        </div>
    </div>

    <div class="border border-gray-200 p-3">
        <div class="text-center">
            <p>Resume Hasil Pengerjaan</p>
        </div>
        <div class="flex flex-col">
            <div class="overflow-y-auto max-h-[200px] sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-md sm:rounded-lg">
                        <table class="min-w-full" id="participant_result_table">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" class="py-3 text-center text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                        No
                                    </th>
                                    <th scope="col" class="py-3 text-center px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                        Soal
                                    </th>
                                    <th scope="col" class="py-3 text-center px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                        Total
                                    </th>
                                    <th scope="col" class="py-3 text-center px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                        Salah
                                    </th>
                                    <th scope="col" class="py-3 text-center px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                        Benar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Product 1 -->
                                <tr class="participant-result-row bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="py-1 text-center text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        total
                                    </td>
                                    <td class="py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        
                                    </td>
                                    <td id="participant_result_total_answered" class="py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        
                                    </td>
                                    <td id="participant_result_total_wrong" class="py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        
                                    </td>
                                    <td id="participant_result_total_correct" class="py-1 text-center px-6 text-sm font-medium  whitespace-nowrap">
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="border border-gray-200 p-3">
        <div class="text-center">
            <p>Faktor Penilaian</p>
        </div>
        <div class="border-b border-gray-200">
            <div class="flex justify-between">
                <p>Kecepatan</p>
                <div class="flex justify-evenly w-52 border border-black">
                    <p class="flex-1 text-center" id="participant_result_speed">-</p>
                    <p class="flex-1 text-center">0.35</p>
                    <p class="flex-1 text-center" id="participant_result_speed_final">-</p>
                </div>
            </div>
            <div class="flex justify-between">
                <p>ketelitian</p>
                <div class="flex justify-evenly w-52 border border-black">
                    <p class="flex-1 text-center" id="participant_result_accuracy">-</p>
                    <p class="flex-1 text-center">0.35</p>
                    <p class="flex-1 text-center" id="participant_result_accuracy_final">-</p>
                </div>
            </div>
            <div class="flex justify-between">
                <p>Ketahanan</p>
                <div class="flex justify-evenly w-52 border border-black">
                    <p class="flex-1 text-center" id="participant_result_endurance">-</p>
                    <p class="flex-1 text-center">0.3</p>
                    <p class="flex-1 text-center" id="participant_result_endurance_final">-</p>
                </div>
            </div>
        </div>
        <div class="flex justify-between">
            <p>Total</p>
            <div class="flex justify-evenly w-52 border border-black">
                <p class="flex-1 text-center" id="participant_result_factor_total">-</p>
                <p class="flex-1 text-center">1.00</p>
                <p class="flex-1 text-center font-bold" id="participant_result_final_result_total" >-</p>
            </div>
        </div>
    </div>
</div>