<?= $this->extend('templates/operator_templates')?>

<?= $this->section("content")?>

    <div class="h-full w-full flex justify-center items-center flex-col ">
    <h1>My First Bootstrap Page</h1>
    <p>This part is inside a .container class.</p>
    <p>The .container class provides a responsive fixed width container.</p>
    <p>Resize the browser window to see that the container width will change at different breakpoints.</p>
    <p><?= $data['name']?></p>
    </div>

<?= $this->endSection()?>


<?= $this->section("additional_scripts")?>
    <script src="<?= base_url('js/operator_scripts.js')?>"></script>
<?= $this->endSection()?>