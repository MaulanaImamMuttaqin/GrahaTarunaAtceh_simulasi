<?php foreach($data as $row): ?>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

        
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <?= $row['test_id']?>
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <?= $row['question_total']?>
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <?= $row['number_digits']?>
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <?= $row['duration']?>
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <?= $row['test_start_at']?>
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <?= $row['test_end_at']?>
        </td>
        <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <a  class="text-blue-600 hover:cursor-pointer hover:underline"  onclick="set_test_id(<?= $row['test_id']?>)">Peserta</a>
        </td>
        <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <a style="text-decoration:none;" onclick="deleteRow(<?= $row['id']?>)" class="px-4 py-2 rounded-full bg-red-500 text-white hover:underline hover:cursor-pointer" >Hapus</a>
        </td>

        
    </tr>
<?php endforeach;?>