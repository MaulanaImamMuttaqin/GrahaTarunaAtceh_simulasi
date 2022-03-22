<?= $this->extend('templates/operator_templates')?>

<?= $this->section("content")?>

<div class="h-full w-full flex flex-col p-10">
    
    <?= view_cell('\App\Libraries\Widget::title_header', ['title'=> 'Test Komptensi Manajerial'])?>
    
    <div class="w-full h-full center">test</div>


<?= $this->endSection()?>


<?= $this->section("additional-scripts")?>

<?= $this->endSection()?>