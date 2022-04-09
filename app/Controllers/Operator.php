<?php

namespace App\Controllers;
use App\Models\TestModel;
use App\Models\ParticipantModel;
use App\Models\AdminUser;
use App\Models\ClassModel;
use App\Models\ParticipantsListsModel;
use App\Models\TestListModel;

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

    public function test_tkm_list(){
        return view('operator/tkm_list');
    }
    public function class_list(){
        $model = new ClassModel();
        $participants_list = new ParticipantsListsModel();
        $test_list = new TestListModel();
        $data = $model->orderBy('id', 'DESC')->findAll();
        $participant_total = $participants_list->select("class_id, COUNT(*) as `total`")->groupBy('class_id')->findAll();
        $tests_total = $test_list->select("class_id, COUNT(*) as `total`")->groupBy('class_id')->findAll();
        foreach($data as $key => $value){
            
            
            $data[$key]['participant_total'] =  $participant_total[$key]['total'];
            $data[$key]['test_total'] =  $tests_total[$key]['total'];
        }
        return view('operator/class_list', ['data'=> $data]);
    }

    public function class_detail($id){
        $test_list_model = new TestListModel();
        $model = new ClassModel();

        $data['data'] = $model->where('id', $id)->first();
        $data['data']['test_list'] = $test_list_model->where('class_id', $id)->orderBy('id', 'DESC')->findAll();
        return view('class/class', $data);
    }
}
