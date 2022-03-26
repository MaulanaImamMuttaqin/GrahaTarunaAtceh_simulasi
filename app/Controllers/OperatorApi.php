<?php

namespace App\Controllers;
use App\Models\TestModel;
use App\Models\ParticipantModel;
use App\Models\ParticipantsListModel;
use App\Models\ClassModel;
use CodeIgniter\API\ResponseTrait;
use App\Models\AdminUser;
use App\Models\TestListModel;
use App\Models\TestKecermatanModel;

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
        $test_id = $this->request->getVar('test_id');
        $post_data = json_decode($this->request->getVar('data'), true);
        $all_participant_exist = $model->select('user_id')->where('test_id', $test_id)->find();

        $difference = $this->filter_data($post_data, $all_participant_exist);

        try {
            if(count($difference) > 0 ){
                if($model->insertBatch($difference)){
                    return $this->respond($difference,200);
                }
            }else{
                return $this->respond($difference, 200);
            }
            return $this->fail('failed', 400);
        }catch(Exception $e){
            return $this->fail($e, 400);
        }
    }

    public function check_participant_list(){
        $model = new ParticipantModel();

        $test_id = $this->request->getVar('test_id');
        $post_data = json_decode($this->request->getVar('data'), true);
        $data = $model->select('user_id')->where('test_id', $test_id)->find();
        $difference = $this->filter_data($post_data, $data);

        return $this->respond(["data" => $difference], 200);
    }

    private function filter_data($arr_request, $arr_database){
        $diff = $arr_request;
        forEach($arr_request as $key =>$val){
            if(isset($arr_database[$key])){
                if($val['user_id'] == $arr_database[$key]['user_id']){

                    unset($diff[$key]);
                }
            }
        }

        return $diff;
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
    
    public function update_test_detail(){
        if ($this->request->getMethod() != "post"){
            $error = [
                'message' => 'method not allowed'
            ];
            return $this->fail($error, 405);
        }

        $model = new TestModel();

        $id = $this->request->getVar('id');

        $data = [
            'question_total' => $this->request->getVar('question_total'),
            'duration' => $this->request->getVar('duration'),
            'test_start_at' => $this->request->getVar('test_start_at'),
            'test_end_at' =>$this->request->getVar('test_end_at'),
        ];
        
        

        $update = $model->update($id, $data);

        $new_data['data'] = $model->orderBy('id', 'DESC')->findAll();
        if($update){
            return $this->respond(["html" => view("Widgets/View_Cells/test_table", $new_data)], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }
    }

    
    public function delete_participant(){
        if ($this->request->getMethod() != "post"){
            $error = [
                'message' => 'method not allowed'
            ];
            return $this->fail($error, 405);
        }

        $model = new ParticipantModel();
        $id = $this->request->getVar('result_test_id');

        $delete = $model->where('id', $id)->delete();
        if($delete){
            return $this->respondDeleted(["message" => "data berhasil di hapus"]);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }
    }

    public function create_new_class(){
        $data =[
            'class_name' =>$this->request->getVar('class_name')
        ];
        $model = new ClassModel();
        
        $add_data = $model->insert($data);

        if($add_data){
            $all_class = $model->orderby('id', "DESC")->findAll();
            $response = [
                'status'   => 201,
                'error'    => null,
                'data' => $all_class,
                'html' => view("Widgets/View_Cells/class_table", ['data' => $all_class]),
                'messages' => "Kelas {$data['class_name']} Berhasil di tambah"
            ];
            return $this->respond($response,200);
        }else{
            return $this->fail(["message"=> "error"], 400);  
        }
         
    }

    public function delete_class($id = null){
        $model = new ClassModel();
        
        $delete = $model->where('id', $id)->delete();

        if($delete){
            $all_class = $model->orderby('id', "DESC")->findAll();
            $response = [
                'status'   => 201,
                'error'    => null,
                'data' => $all_class,
                'html' => view("Widgets/View_Cells/class_table", ['data' => $all_class]),
                'messages' => "Kelas Berhasil di Hapus"
            ];
            return $this->respond($response,200);
        }else{
            return $this->fail(["message"=> "error"], 400);  
        }
    }

    public function get_detail_class($id = null){
        $model = new ClassModel();
        $data = $model->where('id', $id)->first();
        
        return $this->respond(["data"=> $data], 200);
    }

    public function get_participant_class_list($id = null){
        $model = new ParticipantsListModel();
        $data = $model->select("id, user_id, name")->where('class_id', $id)->findAll();
        return $this->respond(["data"=> $data], 200);

    }

    public function add_new_participant_class(){
        $model = new ParticipantsListModel();
        $post_data = json_decode($this->request->getVar('data'), true);
        $id = $this->request->getVar('id');
        $all_participant_exist = $model->select('user_id')->where('class_id', $id)->find();
        $difference = $this->filter_data_2($post_data, $all_participant_exist, 'user_id');
        
        $response = [
            "data"=>$post_data,
            "message" => count($difference)." peserta berhasil di tambah"
        ];
        try {
            if(count($difference) > 0 ){
                if($model->insertBatch($difference)){
                    return $this->respond($response,200);
                }
            }else{
                return $this->respond($response, 200);
            }
            return $this->fail('failed', 400);
        }catch(Exception $e){
            return $this->fail($e, 400);
        }
    }
    public function delete_participant_in_class($class_id, $user_id){
        $model = new ParticipantsListModel();
        $args = [
            'class_id' => $class_id,
            'user_id' => $user_id
        ];
        $delete_data = $model->where($args)->delete();
        if($delete_data){
            return $this->respondDeleted(["message" => "User dengan id '{$user_id}' berhasil dihapus"]);
        }else{
            return $this->fail(["error" => true], 400);
        }
    }


    private function filter_data_2($arr_post, $arr_database, $field){
        $diff = $arr_post;

        forEach($arr_post as $key=>$val){
            forEach($arr_database as $keyd=> $vald){
                if($val[$field] == $vald[$field]){
                    unset($diff[$key]);
                }
            }
        }

        return $diff;
    }


    public function add_new_test_in_class(){
        $model = new TestListModel();
        $class_id = $this->request->getVar("class_id");
        $test_name = $this->request->getVar("test_name");
        $id = $this->request->getVar("test_id");

        $data = [
            'test_id' => $id,
            'class_id'=> $class_id,
            'test_name' => $test_name
        ];
        $add_data = $model->insert($data);
        if($data){
            $test_list = $model->orderBy('id', 'DESC')->findAll();
            $test_list_html = view('widgets/view_cells/class_detail/class_test_list', ['data' => $test_list]);  
            return $this->respond(["message"=> "Test '{$test_name}' berhasil di tambah", "html"=>$test_list_html]);
        }else{
            return $this->fail(["error"=>true]);
        }
    }

    public function delete_class_test($class_id, $test_id){
        $model = new TestListModel();
        $args = [
            'class_id' => $class_id,
            'test_id' => $test_id
        ];
        $delete_data = $model->where($args)->delete();
        if($delete_data){
            $test_list = $model->orderBy('id', 'DESC')->findAll();
            $test_list_html = view('widgets/view_cells/class_detail/class_test_list', ['data' => $test_list]);  
            return $this->respondDeleted(["message" => "Test dengan id '{$test_id}' berhasil dihapus", "html"=>$test_list_html]);
        }else{
            return $this->fail(["error" => true], 400);
        }
    }

    public function add_test_kecermatan(){
        $model = new TestKecermatanModel();
        $test_list = new TestListModel();
        $data = [
            'test_id' =>$this->request->getVar('test_id'),//
            'class_id' =>$this->request->getVar('class_id'),//
            'question_total' => $this->request->getVar('question_total'),//
            'number_digits' => $this->request->getVar('digit'),//
            'duration' => $this->request->getVar('duration'),//
            'test_start_at' =>$this->request->getVar('test_start_at'),//
            'test_end_at' => $this->request->getVar('test_end_at'),//
            'auto' => $this->request->getVar('auto') === "true" ? true : false ,//
            'description' => $this->request->getVar('description'),
            'questions_list' => $this->request->getVar('questions_list'),
        ];

        // $update_test_list = $test_list->update(['kecermatan' => true], ['test_id' => $data['test_id']]);
        $update_test_list = $test_list->set('kecermatan', true)->where('test_id', $data['test_id'])->update();    
        $model->insert($data);
        $test_list = $test_list->orderBy('id', 'DESC')->findAll();
        $test_list_html = view('widgets/view_cells/class_detail/class_test_list', ['data' => $test_list]);  
        $response = [
            'status'   => 201,
            'error'    => null,
            'html' => $test_list_html,
            'message' => "Test Kecermatan dengan ID: {$data['test_id']} berhasil dibuat"
        ];
        return $this->respondCreated($response);
    }


    public function delete_test_kecermatan(){
        $model = new TestKecermatanModel();
        $test_list = new TestListModel();

        $test_id = $this->request->getVar('test_id');

        $delete = $model->where(['test_id'=> $test_id])->delete();
        if($delete){
            $update_test_list = $test_list->set('kecermatan', false)->where('test_id', $test_id)->update();
            if(!$update_test_list) return $this->fail(); 
            $tests = $test_list->orderBy('id', 'DESC')->findAll();
            $test_list_html = view('widgets/view_cells/class_detail/class_test_list', ['data' => $tests]);
            $response = [
                'status'   => 201,
                'error'    => null,
                'html' => $test_list_html,
                'message' => "Test Kecermatan dengan ID: {$test_id} berhasil dihapus"
            ];
            return $this->respondDeleted($response);     
        }else{
            return $this->fail(["error" => true]);
        }
    }

    public function test_kecermatan_detail($class_id, $test_id){
        $model = new TestKecermatanModel();
        $args = [
            'class_id' => $class_id,
            'test_id' => $test_id
        ];
        $get_data = $model->where($args)->first();
        if($get_data){ 
            return $this->respond(["data"=> $get_data]);
        }else{
            return $this->fail(["error" => true], 400);
        }
    }
    
}
