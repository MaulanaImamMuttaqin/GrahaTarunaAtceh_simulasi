<?php foreach($data as $row): ?>

<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <a target="_blank" style="text-decoration:none;" href='<?= base_url("operator/class_detail/{$row['id']}")?>' class="px-4 py-2 rounded-full text-blue-500 font-bold hover:underline hover:cursor-pointer" >
            <?= $row['class_name']?>    
        </a>

    </td>
    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <?= $row['participant_total']?>
    </td>
    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <?= $row['test_total']?>
    </td>
    <td class="py-4 text-sm font-medium text-center whitespace-nowrap">
        <a style="text-decoration:none;"  onclick="deleteClass(<?= $row['id']?>)"  class="px-4 py-2 rounded-full bg-red-500 text-white hover:underline hover:cursor-pointer" >Hapus</a>
    </td>
</tr>

<?php endforeach;?>