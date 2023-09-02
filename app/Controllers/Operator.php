<?php

namespace App\Controllers;
use App\Models\TestModel;
use App\Models\ParticipantModel;
use App\Models\AdminUser;
use App\Models\ClassModel;
use App\Models\ParticipantsListsModel;
use App\Models\TestListModel;
use App\Models\TestsResultsModel;

class Operator extends BaseController
{
    protected $session;


    function __construct()
    
    {
        $this->session = \Config\Services::session();
        $this->session->start();
    }

    // public function index()
    // {   
    //     $model = new TestModel();
    //     $participant_model = new ParticipantModel();
    //     $data['count_test'] = $model->countAllResults();
    //     $data['count_ratio'] = $participant_model->select('is_passed, COUNT(is_passed) as total')->groupBy('is_passed')->findAll();
    //     $data['count_participant']['finished'] = $participant_model->select('id')->where('result !=', NULL)->countAllResults();
    //     $data['count_participant']['total'] = $participant_model->select('id')->countAllResults();

    //     $average_score = $participant_model->selectAvg('score')->where('result !=', NULL)->find();
    //     $data['count_average_score'] = round(floatval($average_score[0]["score"]), 2);

    //     $max_score = $participant_model->selectMax('score')->where('result !=', NULL)->find();
    //     $data['count_max_score'] = round(floatval($max_score[0]["score"]), 2);

    //     $avg_score_list = $participant_model->select('test_id ,CAST(AVG(score) as DECIMAL(10,2)) as score')->where('result !=', NULL)->groupBy('test_id')->orderBy('id', 'ASC')->limit(7)->find();
    //     $data['avg_score_list'] = $avg_score_list;
        
    //     return view('Operator/home', $data);
    // }

    public function index() {
        $model = new TestsResultsModel();
        $d = $model->select('
                            tests_results.id,
                            t.total_participant, 
                            r.total_class, 
                            m.max_score, 
                            a.avg_score
                           ')
                        ->join("(
                            SELECT id, COUNT(DISTINCT user_id) as total_participant FROM tests_results
                        ) t", "tests_results.id = t.id")
                        ->join("(
                            SELECT id, COUNT(DISTINCT class_id) as total_class FROM tests_results
                        ) r", "tests_results.id = r.id")
                        ->join('(
                            SELECT id,CONCAT("[", MAX(score_kecermatan), ", ", MAX(score_kecerdasan), ", ", MAX(score_kepribadian), "]") as max_score FROM tests_results
                        ) m', "tests_results.id = m.id")
                        ->join('(
                            SELECT id,CONCAT("[", ROUND(AVG(score_kecermatan), 2), ", ", ROUND(AVG(score_kecerdasan), 2), ", ", ROUND(AVG(score_kepribadian),2), "]") as avg_score FROM tests_results
                        ) a', "tests_results.id = a.id")
                        ->findAll();
        $data = $d[0];
        $tests = ['kecermatan', 'kecerdasan', 'kepribadian'];

        // foreach($tests as $val){
        //     $data[$val] = $model->select("CASE
        //                                     WHEN score_{$val} >= 60 THEN 1
        //                                     WHEN score_{$val} < 60 THEN 0
        //                                     ELSE -1
        //                                 END AS status,
        //                                 Count(*) AS total")
        //                         ->groupBy("CASE
        //                                     WHEN score_{$val} >= 60 THEN 1
        //                                     WHEN score_{$val} < 60 THEN 0
        //                                     ELSE -1
        //                                 END ")
        //                         ->findAll();
        // }
        foreach($tests as $val){
            $data[$val] =json_encode($model->select("s.status, count(s.status) as total")
                                ->join("(SELECT id,
                                        CASE
                                            WHEN score_{$val} >= 60 then 1
                                            when score_{$val} < 60 then 0
                                            ELSE -1
                                        end as status
                                        from tests_results
                                ) s", "tests_results.id = s.id")
                                ->groupBy("s.status")
                                ->find());
        }                   
        
        $data['max_score'] = isset($data["max_score"]) ? json_decode($data["max_score"], true) : [0,0,0];
        $data['avg_score'] = isset($data["avg_score"]) ? json_decode($data["avg_score"], true) : [0,0,0];
        return view('Operator/home', $data);
    }   


    public function test_list(){
        $model = new TestModel();
        $data['data'] = $model->orderBy('id', 'DESC')->findAll();
        return view("Operator/test_list", $data);
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
                return view('Operator/users', ["success" => true]);
            }else{
                $data['validation'] = $this->validator;
                return view('Operator/users', $data);
            }
        }

        return view('Operator/users');
        
    }

    public function settings(){
    
        return view('Operator/settings');
    }

    public function test_tkm_list(){
        return view('Operator/tkm_list');
    }
    public function class_list(){
        $model = new ClassModel();
        $data = $model->select("class_list.id, class_list.class_name, p.participant_total, t.test_total")
                        ->join("(
                            SELECT class_id, COUNT(*) as participant_total FROM participants_lists GROUP BY class_id
                        ) p", "class_list.id = p.class_id", "left")
                        ->join("(
                            SELECT class_id, COUNT(*) as test_total FROM test_list GROUP BY class_id
                        ) t", "class_list.id = t.class_id", "left")
                        ->orderBy("class_list.id", "DESC")
                        ->findAll();
        return view('Operator/class_list', ['data'=> $data]);
    }

    public function class_detail($id){
        $test_list_model = new TestListModel();
        $model = new ClassModel();

        $data['data'] = $model->where('id', $id)->first();
        $data['data']['test_list'] = $test_list_model->where('class_id', $id)->orderBy('id', 'DESC')->findAll();
        return view('Class/class', $data);
    }
}
