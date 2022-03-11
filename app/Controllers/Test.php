<?php

namespace App\Controllers;
use App\Models\TestModel;
use App\Models\ParticipantModel;
use CodeIgniter\I18n\Time;
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
        if(!$this->session->has('participant_data')){
            return redirect()->to(base_url("authtest"));
        }

        if(!($this->session->get('participant_data')['test_id'] == $id) ){
            return redirect()->to(base_url("authtest"));
        }


        $participant_model = new ParticipantModel();
        $model = new TestModel();


        $participant_data = $participant_model->where('id' , $this->session->get('participant_data')['id'])->first();
        $data['data'] = $model->where('test_id', $id)->first();
        $data['data']['result_test_id'] = $this->session->get('participant_data')['id'];


        $test_end = Time::parse($data['data']['test_end_at'], "Asia/Jakarta");
        $test_start = Time::parse($data['data']['test_start_at'], "Asia/Jakarta");
        $now = Time::now("Asia/Jakarta");


        $test_end_at = $test_end->getTimestamp();
        $test_start_at = $test_start->getTimestamp();
        $time_now = $now->getTimestamp();

        if($participant_data['is_finish']){
            $this->session->setFlashdata('msg', 'Anda Sudah menyelesaikan Test Ini, silahkan hubungi Operator');
            return redirect()->to(base_url("authtest"));
        }
        if (($time_now >= $test_end_at) && ($time_now >= $test_start_at)){
            $this->session->setFlashdata('msg', "Waktu Tes sudah Selesai, silahkan hubungi operator");
            return redirect()->to(base_url("authtest"));

        } else if( ($time_now < $test_end_at) && ($time_now < $test_start_at)){
            $this->session->setFlashdata('msg', "Tes belum di mulai, coba lagi nanti");
            return redirect()->to(base_url("authtest"));
        }
        
        return view("Test/home2", $data);
        
        
    }
}
