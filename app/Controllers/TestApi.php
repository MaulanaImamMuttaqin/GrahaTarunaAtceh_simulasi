<?php

namespace App\Controllers;
use App\Models\ParticipantModel;
use CodeIgniter\API\ResponseTrait;
class TestApi extends BaseController
{
    protected $session;
    use ResponseTrait;

    function __construct()
    {
        $this->session = \Config\Services::session();
        $this->session->start();
    }
    public function index(){
        return null;
    }
    public function submit_result(){
        if ($this->request->getMethod() != "post"){
            $error = [
                'message' => 'method not allowed'
            ];
            return $this->fail($error, 405);
        }

        $model = new ParticipantModel();
        $id = $this->request->getVar('result_test_id');

        $data = [
            'result' =>$this->request->getVar('result'),
            'is_start' => true,
            'is_finish' => true,
        ];
        $update = $model->update($id, $data);
        if($update){
            return $this->respond(["message" => json_decode($this->request->getVar('result'))], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }

    }
}
