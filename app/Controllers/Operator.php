<?php

namespace App\Controllers;
use App\Models\TestModel;
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
        $session_data = $this->session->get('data');
        return view('Operator/home', ['data'=> $session_data]);
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
}
