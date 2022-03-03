<?= $this->extend('templates/operator_templates')?>

<?= $this->section("content")?>

    <div class="h-full w-full flex justify-center items-center flex-col ">
    <h1>This is the dashboard page</h1>
    </div>

<?= $this->endSection()?>


<?= $this->section("additional_scripts")?>
    <script src="<?= base_url('js/operator_scripts.js')?>"></script>
<?= $this->endSection()?>