<?php

namespace App\Controllers;
use App\Models\TestModel;
use App\Models\ParticipantModel;
use App\Models\AdminUser;
class Operator extends BaseController
{
    protected $session;


    function __construct()
    {

        $this->session = \Config\Services::session();
        $this->session->start();

    }
    public function index()
    {   
        $model = new TestModel();
        $participant_model = new ParticipantModel();
        $data['count_test'] = $model->countAllResults();
        $data['count_ratio'] = $participant_model->select('is_passed, COUNT(is_passed) as total')->groupBy('is_passed')->findAll();
        $data['count_participant']['finished'] = $participant_model->select('id')->where('result !=', NULL)->countAllResults();
        $data['count_participant']['total'] = $participant_model->select('id')->countAllResults();

        $average_score = $participant_model->selectAvg('score')->where('result !=', NULL)->find();
        $data['count_average_score'] = round(floatval($average_score[0]["score"]), 2);

        $max_score = $participant_model->selectMax('score')->where('result !=', NULL)->find();
        $data['count_max_score'] = round(floatval($max_score[0]["score"]), 2);

        $avg_score_list = $participant_model->select('test_id ,CAST(AVG(score) as DECIMAL(10,2)) as score')->where('result !=', NULL)->groupBy('test_id')->orderBy('id', 'ASC')->limit(7)->find();
        $data['avg_score_list'] = $avg_score_list;
        
        return view('Operator/home', $data);
    }
    public function test_list(){
        $model = new TestModel();
        $data['data'] = $model->orderBy('id', 'DESC')->findAll();
        return view("operator/test_list", $data);
    }
    
    public function users(){
        if ($this->request->getMethod() == "post"){
            helper(['form']);
            $rules = [
                'name'          => 'required|min_length[2]|max_length[50]',
                'username'         => 'required|min_length[4]|max_length[100]|is_unique[admin_user.username]',
                'password'      => 'required|min_length[4]|max_length[50]',
                'password2'  => 'matches[password]'
            ];
              
            if($this->validate($rules)){
                $userModel = new AdminUser();
                $data = [
                    'name'     => $this->request->getVar('name'),
                    'username'    => $this->request->getVar('username'),
                    'password' => password_hash($this->request->getVar('password'), PASSWORD_DEFAULT)
                ];
                $userModel->save($data);
                return view('operator/users', ["success" => true]);
            }else{
                $data['validation'] = $this->validator;
                return view('operator/users', $data);
            }
        }

        return view('operator/users');
        
    }

    public function settings(){
    
        return view('operator/settings');
    }
}
