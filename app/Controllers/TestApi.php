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
        $result = json_decode($this->request->getVar('result'), true);
        
        // $ketahanan = round(78.33333333333333, 2);
        // $ketelitian = round(80, 2);
        // $kecepatan = round(48.5, 2);
        // $kecepatan_final = round(16.974999999999998, 2);
        // $ketelitian_final = round(28, 2);
        // $ketahanan_final = round(23.499999999999996, 2);
        // $final_result = round(68.475, 2);
        
        $result["test_final_score"] = [
            "ketahanan" => round(78.33333333333333, 2),
            "ketelitian" => round(80, 2),
            "kecepatan" => round(48.5, 2),
            "kecepatan_final" => round(16.974999999999998, 2),
            "ketelitian_final" => round(28, 2),
            "ketahanan_final" => round(23.499999999999996, 2),
            "final_result" => round(68.475, 2),
        ];

        
        $data = [
            'result' =>json_encode($result),
            'is_start' => true,
            'is_finish' => true,
        ];


        $update = $model->update($id, $data);
        if($update){
            return $this->respond(["message" => $result], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }

    }
    
}
