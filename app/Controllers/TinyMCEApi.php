<?php

namespace App\Controllers;
use App\Models\TestModel;
use App\Models\ParticipantModel;
use App\Models\AdminUser;
use App\Models\ClassModel;

use App\Models\TestListModel;
class TinyMCEApi extends BaseController
{
    protected $session;


    function __construct()
    {

        $this->session = \Config\Services::session();
        $this->session->start();

    }
    public function image(){
        $config['upload_path'] = './LOKASI_IMAGE_AKAN_DISIMPAN/';
		$config['allowed_types'] = 'jpg|png|jpeg';
		$config['max_size'] = 0;
		$this->load->library('upload', $config);
		if ( ! $this->upload->do_upload('file')) {
			$this->output->set_header('HTTP/1.0 500 Server Error');
			exit;
		} else {
			$file = $this->upload->data();
			$this->output
				->set_content_type('application/json', 'utf-8')
				->set_output(json_encode(['location' => base_url().'LOKASI_IMAGE_AKAN_DISIMPAN/'.$file['file_name']]))
				->_display();
			exit;
		}
    }
    
}
