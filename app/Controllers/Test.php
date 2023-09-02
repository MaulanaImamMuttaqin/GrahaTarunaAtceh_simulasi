<?php

namespace App\Controllers;
use App\Models\TestKecermatanModel;
use App\Models\TestKepribadianModel;
use App\Models\TestsResultsModel;
use App\Models\TestListModel;
use App\Models\TestKecerdasanModel;
use CodeIgniter\I18n\Time;
use CodeIgniter\API\ResponseTrait;
class Test extends BaseController
{
    protected $session;
    use ResponseTrait;

    function __construct()
    {
        $this->session = \Config\Services::session();
        $this->session->start();
    }
    public function kecermatan($id = null)
    {   
        if(!$this->session->has('participant_data')){
            $this->session->setFlashdata('test_id', $id);
            $this->session->setFlashdata('msg', "Anda Belum Login");
            return redirect()->to(base_url("authTest"));
        }

        if(!($this->session->get('participant_data')['test_id'] == $id) ){
            $allowed = false;
        }

        $test_list = new TestListModel();
        $test_exist = $test_list->select("kecermatan")->where('test_id', $id)->first();
        if(!$test_exist["kecermatan"]){
            $this->session->setFlashdata('test_id', $id);
            return redirect()->to(base_url("authTest"));
        }

        $test_results_model = new TestsResultsModel();
        $model = new TestKecermatanModel();
                                                             
        $participant_data = $test_results_model->select("kecermatan")->where('id' , $this->session->get('participant_data')['id'])->first();
        $data['data'] = $model->where('test_id', $id)->first();
        $data['data']['result_test_id'] = $this->session->get('participant_data')['id'];


        $test_end = Time::parse($data['data']['test_end_at'], "Asia/Jakarta");
        $test_start = Time::parse($data['data']['test_start_at'], "Asia/Jakarta");
        $now = Time::now("Asia/Jakarta");


        $test_end_at = $test_end->getTimestamp();
        $test_start_at = $test_start->getTimestamp();
        $time_now = $now->getTimestamp();

        $allowed = true;

        if(isset($participant_data['kecermatan'])){
            $this->session->setFlashdata('msg', 'Anda Sudah menyelesaikan Test Ini, silahkan hubungi Operator');
            $allowed = false;
        }

        if (($time_now >= $test_end_at) && ($time_now >= $test_start_at)){
            $this->session->setFlashdata('msg', "Waktu Tes sudah Selesai, silahkan hubungi operator");
            $allowed = false;

        } else if( ($time_now < $test_end_at) && ($time_now < $test_start_at)){
            $this->session->setFlashdata('msg', "Tes belum di mulai, coba lagi nanti");
            $allowed = false;
        }
        
        if (!$allowed){
            $this->session->setFlashdata('test_id', $id);
            return redirect()->to(base_url("authTest"));
        }
        return view("Test/kecermatan/home3", $data);
    }


    public function kepribadian($id = null){
        if(!$this->session->has('participant_data')){
            $this->session->setFlashdata('test_id', $id);
            return redirect()->to(base_url("authTest"));
        }

        if(!($this->session->get('participant_data')['test_id'] == $id) ){
            $allowed = false;
        }

        $test_list = new TestListModel();
        $test_exist = $test_list->select("kepribadian")->where('test_id', $id)->first();

        if(!$test_exist["kepribadian"]){
            $this->session->setFlashdata('test_id', $id);
            $this->session->setFlashdata('msg', 'Tes ini belum tersedia');
            return redirect()->to(base_url("authTest"));
        }

        $test_results_model = new TestsResultsModel();
        $model = new TestKepribadianModel();
                                                             
        $participant_data = $test_results_model->select("kepribadian")->where('id' , $this->session->get('participant_data')['id'])->first();
        $data['data'] = $model->where('test_id', $id)->first();
        $data['data']['result_test_id'] = $this->session->get('participant_data')['id'];

        $questions_list = json_decode($data['data']['questions_list'], true);
        foreach($questions_list as $key => $value){
            unset($questions_list[$key]['answer']);
        }

        $data['data']['questions_list'] = str_replace("\u0022","\\\\\"",json_encode( $questions_list,JSON_HEX_QUOT));
        $test_end = Time::parse($data['data']['test_end_at'], "Asia/Jakarta");
        $test_start = Time::parse($data['data']['test_start_at'], "Asia/Jakarta");
        $now = Time::now("Asia/Jakarta");


        $test_end_at = $test_end->getTimestamp();
        $test_start_at = $test_start->getTimestamp();
        $time_now = $now->getTimestamp();

        $allowed = true;

        if(isset($participant_data['kepribadian'])){
            $this->session->setFlashdata('msg', 'Anda Sudah menyelesaikan Test Ini, silahkan hubungi Operator');
            $allowed = false;
        }

        if (($time_now >= $test_end_at) && ($time_now >= $test_start_at)){
            $this->session->setFlashdata('msg', "Waktu Tes sudah Selesai, silahkan hubungi operator");
            $allowed = false;

        } else if( ($time_now < $test_end_at) && ($time_now < $test_start_at)){
            $this->session->setFlashdata('msg', "Tes belum di mulai, coba lagi nanti");
            $allowed = false;
        }
        
        if (!$allowed){
            $this->session->setFlashdata('test_id', $id);
            return redirect()->to(base_url("authTest"));
        }
        return view("Test/kepribadian/home" ,$data);
    }

    public function kecerdasan($id = null){
        if(!$this->session->has('participant_data')){
            $this->session->setFlashdata('test_id', $id);
            return redirect()->to(base_url("authTest"));
        }

        if(!($this->session->get('participant_data')['test_id'] == $id) ){
            $allowed = false;
        }

        $test_list = new TestListModel();
        $test_exist = $test_list->select("kecerdasan")->where('test_id', $id)->first();

        if(!$test_exist["kecerdasan"]){
            $this->session->setFlashdata('test_id', $id);
            $this->session->setFlashdata('msg', 'Tes ini belum tersedia');
            return redirect()->to(base_url("authTest"));
        }

        $test_results_model = new TestsResultsModel();
        $model = new TestKecerdasanModel();
                                                             
        $participant_data = $test_results_model->select("kecerdasan")->where('id' , $this->session->get('participant_data')['id'])->first();
        $data['data'] = $model->where('test_id', $id)->first();
        $data['data']['result_test_id'] = $this->session->get('participant_data')['id'];

        $questions_list = json_decode($data['data']['questions_list'], true);
        foreach($questions_list as $key => $value){
            unset($questions_list[$key]['answer']);
        }
        $data['data']['questions_list'] = str_replace("\u0022","\\\\\"",json_encode( $questions_list,JSON_HEX_QUOT));
        // $data['data']['questions_list'] = $questions_list;
        $test_end = Time::parse($data['data']['test_end_at'], "Asia/Jakarta");
        $test_start = Time::parse($data['data']['test_start_at'], "Asia/Jakarta");
        $now = Time::now("Asia/Jakarta");


        $test_end_at = $test_end->getTimestamp();
        $test_start_at = $test_start->getTimestamp();
        $time_now = $now->getTimestamp();

        $allowed = true;

        if(isset($participant_data['kecerdasan'])){
            $this->session->setFlashdata('msg', 'Anda Sudah menyelesaikan Test Ini, silahkan hubungi Operator');
            $allowed = false;
        }

        if (($time_now >= $test_end_at) && ($time_now >= $test_start_at)){
            $this->session->setFlashdata('msg', "Waktu Tes sudah Selesai, silahkan hubungi operator");
            $allowed = false;

        } else if( ($time_now < $test_end_at) && ($time_now < $test_start_at)){
            $this->session->setFlashdata('msg', "Tes belum di mulai, coba lagi nanti");
            $allowed = false;
        }
        
        if (!$allowed){
            $this->session->setFlashdata('test_id', $id);
            return redirect()->to(base_url("authTest"));
        }
        return view("Test/kecerdasan/home" ,$data);
    }




}
