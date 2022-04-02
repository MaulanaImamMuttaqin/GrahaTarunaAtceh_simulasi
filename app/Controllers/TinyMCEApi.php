<?php

namespace App\Controllers;
use App\Models\TestModel;
use App\Models\ParticipantModel;
use App\Models\AdminUser;
use App\Models\ClassModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Files\File;

use App\Models\TestListModel;
class TinyMCEApi extends BaseController
{
    protected $session;
    use ResponseTrait;
    protected $helpers = ['form'];

    function __construct()
    {

        $this->session = \Config\Services::session();
        $this->session->start();

    }
    public function image(){
        // $file = $this->validate([
        //     'file' => [
        //         'uploaded[file]',
        //         'mime_in[file, image/png, image/jpg, image/jpeg]',
        //         'max_size[file,4096]',
        //     ]
        // ]);
        
        // if (!$file) {
        //     return $this->respond([
        //         'failed' => 'failed'
        //     ], 200);
        // } else {
        //     $imageFile = $this->request->getFile('file');
        //     $imageFile->move(WRITEPATH . 'uploads');

        // }
        $imageFile = $this->request->getFile('file');
        $newName = $imageFile->getRandomName();
        $imageFile->move(ROOTPATH  . '/public/images/test_images',  $newName);
        return $this->respond([
            'location' => base_url()."/images/test_images/{$imageFile->getName()}",
        ], 200);  
        
        
    }
    
}
