<?php 
namespace App\Controllers;  
use CodeIgniter\Controller;
use App\Models\TestsResultsModel;
  
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
        $test_name = $this->request->getVar('test_name');
        $model = new TestsResultsModel();

        $user_data = [
            'test_id' => $token,
            'user_id'=> $user_id   
        ];
        $data = $model->select("id, user_id, name, class_id, test_id, kecermatan, kepribadian, kecerdasan")->where($user_data)->first();
        if(!empty($data)){
            if(empty($data[$test_name])){
                $this->session->set(['participant_data'=>$data]);
               
                return redirect()->to(base_url("test/{$test_name}/{$data['test_id']}"));
            }else{
                $this->session->setFlashdata('msg', 'Anda Sudah menyelesaikan Test Ini, silahkan hubungi Operator');
                // echo "error";
                return redirect()->to(base_url('authtest'));
            }
        }else{
            $this->session->setFlashdata('msg', 'User ID atau Token yang anda Masukkan tidak terdaftar');
            // echo "error";
            return redirect()->to(base_url('authtest'));
        }
    }
    
    public function logoutAuth()
    {
        $this->session = session();
        $this->session->destroy();
        return redirect()->to(base_url('authtest'));
     
    }
}