<?php 
namespace App\Controllers;  
use CodeIgniter\Controller;
use App\Models\AdminUser;
  
class Auth extends Controller
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
        return view('Auth/auth_operator');
    } 
    
    public function loginAuth()
    {
        $adminUser = new AdminUser();
        $username = $this->request->getVar('username');
        $password = $this->request->getVar('password');
        
        $data = $adminUser->where('username', $username)->first();
        
        if($data){
            $pass = $data['password'];
            $authenticatePassword = password_verify($password, $pass);
            if($authenticatePassword){
                $ses_data = [
                    'data' => [
                        'id' => $data['id'],
                        'name' => $data['name'],
                        'username' => $data['username'],
                    ],
                    'isLoggedIn' => TRUE
                ];
                $this->session->set($ses_data);
                return redirect()->to('/operator');
            
            }else{
                $this->session->setFlashdata('msg', 'UserName atau Password tidak terdaftar');
                return redirect()->to('Auth/');
            }
        }else{
            $this->session->setFlashdata('msg', 'UserName atau Password tidak terdaftar');
            return redirect()->to('Auth/');
        }
    }


    public function logoutAuth()
    {
        $this->session = session();
        $this->session->destroy();
        return redirect()->to('Auth/');
     
    }
}