<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url('css/styles.css')?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"/>
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
    <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>

    <?= $this->renderSection("additional-scripts")?>
</body>
</html>