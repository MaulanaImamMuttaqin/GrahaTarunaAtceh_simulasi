<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url('css/styles.css')?>">
    <link rel="stylesheet" href="<?= base_url('css/fontawesome.css')?>"/>
    <link rel="stylesheet" href="<?= base_url('css/flowbite.min.css')?>"/>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="<?= base_url('images/favicon.ico')?>"  type="image/x-icon">   
 
    <title>Graha Taruna Aceh</title>
</head>
<body>
    
    <?= $this->renderSection("body")?>

    <script>
        var base_url = "<?= base_url()?>"
    </script>
    
    <script src="<?= base_url('js/jquery.js')?>"></script>
    <script src="<?= base_url('js/flowbite.js')?>"></script>
    <?= $this->renderSection("additional-scripts")?>
</body>
</html>