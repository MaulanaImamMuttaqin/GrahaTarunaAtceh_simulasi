<?php 
namespace App\Controllers;  
use CodeIgniter\Controller;
use App\Models\ParticipantModel;
  
class AuthTest extends Controller
{
    protected $session;


    function __construct()
    {

        $this->session = \Config\Services::session();
        $this->session->start();

    }
    public function index()
    {
        helper(['form']);
        return view('Auth/auth_participant');
    } 
    
    
    public function loginAuth()
    {
        $user_id = $this->request->getVar('user_id');
		$token = $this->request->getVar('token');
        $model = new ParticipantModel();

        $user_data = [
            'test_id' => $token,
            'user_id'=> $user_id    
        ];
        $data = $model->where($user_data)->first();
        
        if(!empty($data)){
            if(!$data['is_finish']){
                $this->session->set($data);
                return redirect()->to(site_url("test/index/{$data['test_id']}"));
            }else{
                $this->session->setFlashdata('msg', 'Anda Sudah menyelesaikan Test Ini, silahkan hubungi Operator');
                return redirect()->to('/authtest');
            }
        }else{
            $this->session->setFlashdata('msg', 'User ID atau Token yang anda Masukkan tidak terdaftar');
            return redirect()->to('/authtest');
        }
    }


    public function logoutAuth()
    {
        $this->session = session();
        $this->session->destroy();
        return redirect()->to('Auth/');
     
    }
}