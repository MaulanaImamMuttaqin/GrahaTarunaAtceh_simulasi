<?php

namespace App\Controllers;
use App\Models\TestModel;
use App\Models\ParticipantModel;
use CodeIgniter\API\ResponseTrait;
use App\Models\AdminUser;

class OperatorApi extends BaseController
{
    use ResponseTrait;
    protected $session;


    function __construct()
    {

        $this->session = \Config\Services::session();
        $this->session->start();

    }
    public function test_table_list(){
        $model = new TestModel();
        $data['data'] = $model->orderBy('id', 'DESC')->findAll();
        return view("Widgets/View_Cells/test_table", $data);
    }

    public function add_test()
    {

        if ($this->request->getMethod() != "post"){
            $error = [
                'message' => 'method not allowed'
            ];
            return $this->fail($errors, 405);
        }

        $model = new TestModel();
        $data = [
            'test_id' =>$this->request->getVar('test_id'),
            'question_total' => $this->request->getVar('question_total'),
            'number_digits' => $this->request->getVar('digit'),
            'duration' => $this->request->getVar('duration'),
            'test_start_at' =>$this->request->getVar('test_start_at'),
            'test_end_at' => $this->request->getVar('test_end_at'),
            'auto' => $this->request->getVar('auto')
        ];
        
        $model->insert($data);

        $table = $model->orderBy('id', 'DESC')->findAll();

        $response = [
            'status'   => 201,
            'error'    => null,
            'data' => $data,
            'html' => view("Widgets/View_Cells/test_table", ['data' => $table]),
            'messages' => [
                'success' => 'Employee created successfully'
            ]
        ];
        return $this->respondCreated($response);
    }

    public function add_test_manual() {
        if ($this->request->getMethod() != "post"){
            $error = [
                'message' => 'method not allowed'
            ];
            return $this->fail($errors, 405);
        }

        $model = new TestModel();
        $data = [
            'test_id' =>$this->request->getVar('test_id'),
            'questions_list' => $this->request->getVar('questions_list'),
            'duration' => $this->request->getVar('duration'),
            'question_total' => $this->request->getVar('question_total'),
            'test_start_at' =>$this->request->getVar('test_start_at'),
            'test_end_at' => $this->request->getVar('test_end_at'),
            'auto' => $this->request->getVar('auto')
        ];
        
        $model->insert($data);

        $table['data'] = $model->orderBy('id', 'DESC')->findAll();

        $response = [
            'status'   => 201,
            'error'    => null,
            'data' => $data,
            'html' => view("Widgets/View_Cells/test_table", $table),
            'messages' => [
                'success' => 'Employee created successfully'
            ]
        ];
        return $this->respondCreated($response);
    }

    public function delete_test($test_id = null){
        if ($this->request->getMethod() != "delete"){
            $error = [
                'message' => 'method not allowed'
            ];
            return $this->fail($errors, 405);
        }

        $model = new TestModel();
        $participant_model = new ParticipantModel();
        $data = $model->where('test_id', $test_id)->delete();
        $table['data'] = $model->orderBy('id', 'DESC')->findAll();
        if($data){
            $participant_model->where('test_id', $test_id)->delete();
            $response = [
                'status'   => 200,
                'error'    => null,
                'html' => view("Widgets/View_Cells/test_table", $table),
                'messages' => [
                    'success' => 'row successfully deleted'
                ]
            ];
            return $this->respondDeleted($response);
        }else{
            return $this->failNotFound('No row found');
        }
    }

    public function add_participant(){
        if ($this->request->getMethod() != "post"){
            return $this->fail('method not allowed', 405);
        }

        $model = new ParticipantModel();
        $test_model = new TestModel();
        $data = json_decode($this->request->getVar('data'));
        
        try {
            if($model->insertBatch($data)){
                return $this->respond($data,200);
            }
            return $this->fail('failed', 400);
        }catch(Exception $e){
            return $this->fail($e, 400);
        }
    }


    public function change_password($id = null){
        if ($this->request->getMethod() == "post"){
            helper(['form']);
            $adminUser = new AdminUser();
            $data = $adminUser->where('id', $id)->first();

            $rules = [
                'new_password'      => 'required|min_length[4]|max_length[50]',
                'new_password2'  => 'matches[new_password]'
            ];
            $old_password = $this->request->getVar('password');
            $new_password = $this->request->getVar('new_password');
            
            
            if($this->validate($rules)){
                if($data){
                    $pass = $data['password'];
                    $authenticatePassword = password_verify($old_password, $pass);
                    if($authenticatePassword){
                        $new_data = [
                            'password' => password_hash($new_password, PASSWORD_DEFAULT)
                        ];
                        $adminUser->update($id,$new_data);
                        $this->session->setFlashdata('msg', 'Password berhasil di update');
                        return redirect()->to(base_url('operator/settings'));

                    }else{
                        $this->session->setFlashdata('msg', 'Password Salah');
                        return redirect()->to(base_url('operator/settings'));
                    } 
                }else{
                    $this->session->setFlashdata('msg', 'Id tidak Terdaftar');
                    return redirect()->to(base_url('operator/settings'));
                }
            }else{
                $data['validation'] = $this->validator;
                return view('operator/settings', $data);
            }
        }
    }

    public function get_test_detail($test_id = null){
        if ($this->request->getMethod() != "get"){
            $error = [
                'message' => 'method not allowed'
            ];
            return $this->fail($errors, 405);
        }

        $model = new TestModel();
        $participant_model = new ParticipantModel();

        $participant_list = $participant_model->where('test_id', $test_id)->findAll();
        $data = $model->where('test_id', $test_id)->first();
        $data["total_participant"] = count($participant_list);

        if($data){
            $response = [
                'status'   => 200,
                'error'    => null,
                'data' => $data,
                'participant_list' => $participant_list,
            ];
            return $this->respondDeleted($response);
        }else{
            return $this->failNotFound('No row found');
        }
    }
    public function delete_participant_result(){
        if ($this->request->getMethod() != "post"){
            $error = [
                'message' => 'method not allowed'
            ];
            return $this->fail($error, 405);
        }

        $model = new ParticipantModel();
        $id = $this->request->getVar('result_test_id');

        $data = [
            'result' =>null,
            'is_start' => 0,
            'is_finish' => 0,
        ];
        $update = $model->update($id, $data);
        if($update){
            return $this->respond(["message" => "data berhasil di hapus"], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }
    }
}
