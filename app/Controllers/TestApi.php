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
        
        $result["test_final_score"] = [
            "ketahanan" => round($result["test_final_score"]["ketahanan"], 2),
            "ketelitian" => round($result["test_final_score"]["ketelitian"], 2),
            "kecepatan" => round($result["test_final_score"]["kecepatan"], 2),
            "kecepatan_final" => round($result["test_final_score"]["kecepatan_final"], 2),
            "ketelitian_final" => round($result["test_final_score"]["ketelitian_final"], 2),
            "ketahanan_final" => round($result["test_final_score"]["ketahanan_final"], 2),
            "final_result" => round($result["test_final_score"]["final_result"], 2),
        ];

        $data = [
            'result' =>json_encode($result),
            'is_start' => true,
            'is_finish' => true,
            'is_passed' => $result["test_final_score"]["final_result"] >= 60 ? 1 : 0,
            'score' => $result["test_final_score"]["final_result"]
        ];


        $update = $model->update($id, $data);
        if($update){
            return $this->respond(["message" => $result, 'lulus' => $data['is_passed']], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }

    }
    
}
