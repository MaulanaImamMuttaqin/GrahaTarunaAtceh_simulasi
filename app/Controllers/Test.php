<?php

namespace App\Controllers;
use App\Models\TestModel;

class Test extends BaseController
{
    protected $session;


    function __construct()
    {
        $this->session = \Config\Services::session();
        $this->session->start();
    }

    public function index($id = null)
    {   
        if(($this->session->get('test_id') == $id) ){
            $model = new TestModel();
            $data['data'] = $model->where('test_id', $id)->first();
            $data['data']['result_test_id'] = $this->session->get('id');
            return view("Test/home2", $data);
        }else{
            return redirect()->to(base_url("authtest"));
        }
    }
}
