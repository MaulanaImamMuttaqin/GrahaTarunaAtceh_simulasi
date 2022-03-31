<?php

namespace App\Controllers;
use App\Models\TestsResultsModel;
use App\Models\TestKepribadianModel;
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
    public function submit_kecermatan_result(){
        if ($this->request->getMethod() != "post"){
            $error = [
                'message' => 'method not allowed'
            ];
            return $this->fail($error, 405);
        }

        $model = new TestsResultsModel();
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
            'kecermatan' =>json_encode($result),
            'score_kecermatan' => $result["test_final_score"]["final_result"]
        ];


        $update = $model->update($id, $data);
        if($update){
            return $this->respond(["message" => "success"], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }

    }

    public function submit_kepribadian_result(){
        if ($this->request->getMethod() != "post"){
            $error = [
                'message' => 'method not allowed'
            ];
            return $this->fail($error, 405);
        }
        $model_kepribadian = new TestKepribadianModel();
        $model = new TestsResultsModel();

        $answers = $model_kepribadian->where('test_id', $this->request->getVar('test_id'))->first();
        $id = $this->request->getVar('result_test_id');
        $result = json_decode($this->request->getVar('result'), true);
        $total_correct  = 0;
        $total_wrong = 0;
        $question_list = json_decode($answers['questions_list'], true);
        foreach($question_list as $key =>$value){
            foreach($result as  $q => $v){
                if($value["q_id"] == $v["q_id"]){
                    $question_list[$key]['answered'] = $v["answer"];
                    if(strtolower($value["answer"]) == strtolower($v["answer"])){
                        $total_correct++;
                        $question_list[$key]['correct'] = true;
                    }else{
                        $total_wrong++;
                        $question_list[$key]['correct'] = false ;
                    }
                }
            }
            
        }

        $final_score = ($total_correct / count($question_list)) * 100;
        
        $test_result  = array();
        $test_result["overall"] = array(
            "total" => count($question_list),
            "correct" => $total_correct,
            "wrong" =>  $total_wrong,
        );
        $test_result["detail"] = $question_list;
        $test_result["final_score"] = $final_score;

        $data = [
            'kepribadian' =>json_encode($test_result),
            'score_kepribadian' => $final_score
        ];

        $update = $model->update($id, $data);
        if($update){
            return $this->respond(["message" => "success", "data" =>$data]);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }
    }
    
}
