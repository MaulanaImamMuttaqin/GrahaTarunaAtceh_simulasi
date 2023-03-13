<?php

namespace App\Controllers;
use App\Models\TestModel;
use App\Models\ParticipantModel;
use App\Models\TestsResultsModel;
use App\Models\ParticipantsListsModel;
use App\Models\ClassModel;
use CodeIgniter\API\ResponseTrait;
use App\Models\AdminUser;
use App\Models\TestListModel;
use App\Models\TestKecermatanModel;
use App\Models\TestKepribadianModel;
use App\Models\TestKecerdasanModel;
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
        return view("widgets/view_cells/test_table", $data);
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
            'mode' => $this->request->getVar('mode')
        ];
        
        $model->insert($data);

        $table = $model->orderBy('id', 'DESC')->findAll();

        $response = [
            'status'   => 201,
            'error'    => null,
            'data' => $data,
            'html' => view("widgets/view_cells/test_table", ['data' => $table]),
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
            'mode' => $this->request->getVar('mode')
        ];
        
        $model->insert($data);

        $table['data'] = $model->orderBy('id', 'DESC')->findAll();

        $response = [
            'status'   => 201,
            'error'    => null,
            'data' => $data,
            'html' => view("widgets/view_cells/test_table", $table),
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
                'html' => view("widgets/view_cells/test_table", $table),
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
            return $this->respond(["html" => view("widgets/view_cells/test_table", $new_data)], 200);
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
    
    public function _get_new_class_list() {
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
        return $data;
    }

    

    public function create_new_class(){
        $data =[
            'class_name' =>$this->request->getVar('class_name')
        ];
        $model = new ClassModel();
        $add_data = $model->insert($data);

        if($add_data){
            $new_data = $this->_get_new_class_list();
            $response = [
                'status'   => 201,
                'error'    => null,
                'data' => $new_data,
                'html' => view("widgets/view_cells/class_table", ['data' => $new_data]),
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
            $all_class = $this->_get_new_class_list();
            $response = [
                'status'   => 201,
                'error'    => null,
                'data' => $all_class,
                'html' => view("widgets/view_cells/class_table", ['data' => $all_class]),
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
        $model = new ParticipantsListsModel();
        $data = $model->select("id, user_id, name")->where('class_id', $id)->findAll();
        return $this->respond(["data"=> $data], 200);

    }

    public function add_new_participant_class(){
        $model = new ParticipantsListsModel();
        $test_list = new TestListModel();
        $test_result = new TestsResultsModel();
        $post_data = json_decode($this->request->getVar('data'), true);
        $id = $this->request->getVar('id');
        $all_participant_exist = $model->select('user_id')->where('class_id', $id)->find();
        $difference = $this->filter_data_2($post_data, $all_participant_exist, 'user_id');
        $test_list_in_class = $test_list->select('test_id')->where('class_id', $id)->find();
        $new_test_results_list = [];

       

        $response = [
            "data"=>$post_data,
            "message" => count($difference)." peserta berhasil di tambah",
            'test_results_list' => $new_test_results_list
        ];
        
        try {
            if(count($difference) > 0 ){
                if($model->insertBatch($difference)){
                    if(count($test_list_in_class) > 0){
                        foreach($test_list_in_class as $a =>$b){
                            foreach($difference as $c => $d ){
                                $d['test_id'] = $b['test_id'];
                                array_push($new_test_results_list, $d);
                            }
                        }
                        $test_result->insertbatch($new_test_results_list);
                    }
                    
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
        $model = new ParticipantsListsModel();
        $tests_results = new TestsResultsModel();

        $args = [
            'class_id' => $class_id,
            'user_id' => $user_id
        ];
        $delete_data = $model->where($args)->delete();
        if($delete_data){
            $tests_results->where($args)->delete();
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
        $class_id = $this->request->getVar("class_id");
        $test_name = $this->request->getVar("test_name");
        $id = $this->request->getVar("test_id");


        $model = new TestListModel();
        $participant_list = new ParticipantsListsModel();
        $test_result = new TestsResultsModel();

        $data = [
            'test_id' => $id,
            'class_id'=> $class_id,
            'test_name' => $test_name
        ];

        $get_participant_list = $participant_list->where(['class_id'=> $class_id])->findAll();

        if(!(count($get_participant_list) > 0)){
            return $this->respond(["message"=> "Silahkan tambahkan peserta terlebih dahulu",  "list"=> $get_participant_list]);
        }
        foreach($get_participant_list as $key=>$value){
            $get_participant_list[$key]['test_id'] = $id;
        }

        
        $add_data = $model->insert($data);
        if($data){
            $test_result->insertbatch($get_participant_list);
            $test_list = $model->where('class_id', $class_id)->orderBy('id', 'DESC')->findAll();
            $test_list_html = view('widgets/view_cells/class_detail/class_test_list', ['data' => $test_list]);  
            return $this->respond(["message"=> "Test '{$test_name}' berhasil di tambah", "html"=>$test_list_html, "list"=> $get_participant_list]);
        }else{
            return $this->fail(["error"=>true]);
        }
    }

    public function delete_class_test($class_id, $test_id){
        $model = new TestListModel();
        $tests_results = new TestsResultsModel();
        $args = [
            'class_id' => $class_id,
            'test_id' => $test_id
        ];

        $delete_data = $model->where($args)->delete();
        if($delete_data){
            $tests_results->where($args)->delete();
            $test_list = $model->where('class_id', $class_id)->orderBy('id', 'DESC')->findAll();
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
            'mode' => $this->request->getVar('mode') === "true" ? true : false ,//
            'description' => $this->request->getVar('description'),
            'questions_list' => $this->request->getVar('questions_list'),
        ];

        // $update_test_list = $test_list->update(['kecermatan' => true], ['test_id' => $data['test_id']]);
        $update_test_list = $test_list->set('kecermatan', true)->where('test_id', $data['test_id'])->update();    
        $model->insert($data);
        $test_list = $test_list->where('class_id', $data["class_id"])->orderBy('id', 'DESC')->findAll();
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
        $class_id = $this->request->getVar('class_id');
        $delete = $model->where(['test_id'=> $test_id])->delete();
        if($delete){
            $update_test_list = $test_list->set('kecermatan', false)->where('test_id', $test_id)->update();
            if(!$update_test_list) return $this->fail(); 
            $tests = $test_list->where('class_id', $class_id)->orderBy('id', 'DESC')->findAll();
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

    public function get_participants_list_test_result($class_id, $test_id){
        $participant_list = new TestsResultsModel();
        $get_participant_list = $participant_list
                                ->select("id, user_id, name, score_kecermatan, score_kecerdasan, score_kepribadian")
                                ->where([
                                    "class_id" => $class_id,
                                    "test_id" => $test_id
                                ])
                                ->findAll();
        return $this->respond(["data"=> $get_participant_list]);

    }

    public function update_test_kecermatan(){
        $model = new TestKecermatanModel();

        $test_id = $this->request->getVar('test_id');
        $data = [
            'question_total' => $this->request->getVar('question_total'),
            'duration' => $this->request->getVar('duration'),
            'test_start_at' => $this->request->getVar('test_start_at'),
            'test_end_at' =>$this->request->getVar('test_end_at'),
        ];
        
        $update = $model->set($data)->where('test_id', $test_id)->update();
        // $new_data['data'] = $model->orderBy('id', 'DESC')->findAll();
        
        if($update){
            return $this->respond(["message" => "test '{$test_id}' berhasil di update"], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }
    }
    

    public function get_participants_test_result($id) {
        $participant_test_result = new TestsResultsModel();
        $get_participant_test_result = $participant_test_result
                                ->where([
                                    "id" => $id,
                                ])
                                ->first();
        
        if($get_participant_test_result){
            $get_participant_test_result["kecermatan"] = isset($get_participant_test_result["kecermatan"]) ?  json_decode( $get_participant_test_result["kecermatan"] , true) : NULL;
            $get_participant_test_result["kecerdasan"] = isset($get_participant_test_result["kecerdasan"]) ?  json_decode( $get_participant_test_result["kecerdasan"] , true) : NULL;
            $get_participant_test_result["kepribadian"] = isset($get_participant_test_result["kepribadian"] )? json_decode(  $get_participant_test_result["kepribadian"], true) : NULL;
            return $this->respond(["data"=> $get_participant_test_result]);
        }else{
            return $this->fail(["error" => true], 400);
        }
    }
    public function delete_participants_test_result($test_name, $id) {
        $model = new TestsResultsModel();
        $data = [
            "{$test_name}" => null,
            "score_{$test_name}" => null,
        ];
        
        $update = $model->set($data)->where('id', $id)->update();

        if($update){
            
            return $this->respond(["message" => "Hasil test {$test_name} peserta berhasil dihapus"],200);
        }else{
            return $this->fail(["error" => true], 400);
        }
    }
    
    public function add_test_kepribadian(){
        $model = new TestKepribadianModel();
        $test_list = new TestListModel();

        $data = [
            'test_id' =>$this->request->getVar('test_id'),//
            'class_id' =>$this->request->getVar('class_id'),//
            'duration' => $this->request->getVar('duration'),//
            'test_start_at' =>$this->request->getVar('test_start_at'),//
            'test_end_at' => $this->request->getVar('test_end_at'),//
            // 'questions_list' => $this->request->getVar('questions_list'),
        ];

        // $update_test_list = $test_list->update(['kecermatan' => true], ['test_id' => $data['test_id']]);
        $update_test_list = $test_list->set('kepribadian', true)->where('test_id', $data['test_id'])->update();    
        $model->insert($data);
        $test_list = $test_list->where('class_id', $data['class_id'])->orderBy('id', 'DESC')->findAll();
        $test_list_html = view('widgets/view_cells/class_detail/class_test_list', ['data' => $test_list]);  
        $response = [
            'status'   => 201,
            'error'    => null,
            'html' => $test_list_html,
            'message' => "Test Kepribadian dengan ID: {$data['test_id']} berhasil dibuat"
        ];
        return $this->respondCreated($response);
    }

    public function delete_test_kepribadian(){
        $model = new TestKepribadianModel();
        $test_list = new TestListModel();

        $test_id = $this->request->getVar('test_id');
        $class_id = $this->request->getVar('class_id');
        $delete = $model->where(['test_id'=> $test_id])->delete();
        if($delete){
            $update_test_list = $test_list->set('kepribadian', false)->where('test_id', $test_id)->update();
            if(!$update_test_list) return $this->fail(); 
            $tests = $test_list->where('class_id', $class_id)->orderBy('id', 'DESC')->findAll();
            $test_list_html = view('widgets/view_cells/class_detail/class_test_list', ['data' => $tests]);
            $response = [
                'status'   => 201,
                'error'    => null,
                'html' => $test_list_html,
                'message' => "Test Kepribadian dengan ID: {$test_id} berhasil dihapus"
            ];
            return $this->respondDeleted($response);     
        }else{
            return $this->fail(["error" => true]);
        }
    }

    public function test_kepribadian_detail($class_id, $test_id){
        $model = new TestKepribadianModel();

        
        $args = [
            'class_id' => $class_id,
            'test_id' => $test_id
        ];

        $get_data = $model->where($args)->first();
        $total_question = count(json_decode($get_data['questions_list'], true));
        $get_data['total_question'] = $total_question;
        

        return $this->respond(["data"=> $get_data]);
        // if($get_data){ 
        //     return $this->respond(["data"=> $get_data]);
        // }else{
        //     return $this->fail(["error" => true], 400);
        // }
    }

    public function update_test_kepribadian(){
        $model = new TestKepribadianModel();

        $test_id = $this->request->getVar('test_id');

        $data = [
            'sorted' => $this->request->getVar('sorted') == "true" ? true: false ,
            'duration' => $this->request->getVar('duration'),
            'test_start_at' => $this->request->getVar('test_start_at'),
            'test_end_at' =>$this->request->getVar('test_end_at'),
        ];
        
        $update = $model->set($data)->where('test_id', $test_id)->update();
        // $new_data['data'] = $model->orderBy('id', 'DESC')->findAll();
        
        if($update){
            return $this->respond(["message" => "test '{$test_id}' berhasil di update"], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }
    }

    public function upload_question_kepribadian(){
        $test_id = $this->request->getVar('test_id');
        $data = json_decode($this->request->getVar('data'), true);
        $model = new TestKepribadianModel();

        $test_data = $model->where('test_id', $test_id)->first();
        $current_question_list = json_decode($test_data['questions_list'], true);

        
        $new_data = array_merge($current_question_list, $data);

        $update = $model->set('questions_list', json_encode($new_data))->where('test_id', $test_id)->update();

        $test_data['questions_list'] = json_encode($new_data);
        $test_data["total_question"] = count($new_data);
        if($update){
            return $this->respond(["message" => "soal berhasil di tambah", 'data' => $test_data ], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }
    }

    public function add_test_kecerdasan(){
        $model = new TestKecerdasanModel();
        $test_list = new TestListModel();

        $data = [
            'test_id' =>$this->request->getVar('test_id'),//
            'class_id' =>$this->request->getVar('class_id'),//
            'duration' => $this->request->getVar('duration'),//
            'test_start_at' =>$this->request->getVar('test_start_at'),//
            'test_end_at' => $this->request->getVar('test_end_at'),//
        ];

        // $update_test_list = $test_list->update(['kecermatan' => true], ['test_id' => $data['test_id']]);
        $update_test_list = $test_list->set('kecerdasan', true)->where('test_id', $data['test_id'])->update();    
        $model->insert($data);
        $test_list = $test_list->where('class_id', $data['class_id'])->orderBy('id', 'DESC')->findAll();
        $test_list_html = view('widgets/view_cells/class_detail/class_test_list', ['data' => $test_list]);  
        $response = [
            'status'   => 201,
            'error'    => null,
            'html' => $test_list_html,
            'message' => "Test Kecerdasan dengan ID: {$data['test_id']} berhasil dibuat"
        ];
        return $this->respondCreated($response);
    }

    public function delete_test_kecerdasan(){
        $model = new TestKecerdasanModel();
        $test_list = new TestListModel();

        $test_id = $this->request->getVar('test_id');
        $class_id = $this->request->getVar('class_id');
        $delete = $model->where(['test_id'=> $test_id])->delete();
        if($delete){
            $update_test_list = $test_list->set('kecerdasan', false)->where('test_id', $test_id)->update();
            if(!$update_test_list) return $this->fail(); 
            $tests = $test_list->where('class_id', $class_id)->orderBy('id', 'DESC')->findAll();
            $test_list_html = view('widgets/view_cells/class_detail/class_test_list', ['data' => $tests]);
            $response = [
                'status'   => 201,
                'error'    => null,
                'html' => $test_list_html,
                'message' => "Test Kecerdasan dengan ID: {$test_id} berhasil dihapus"
            ];
            return $this->respondDeleted($response);     
        }else{
            return $this->fail(["error" => true]);
        }
    }

    public function test_kecerdasan_detail($class_id, $test_id){
        $model = new TestKecerdasanModel();

        
        $args = [
            'class_id' => $class_id,
            'test_id' => $test_id
        ];

        $get_data = $model->where($args)->first();
        $total_question = count(json_decode($get_data['questions_list'], true));
        $get_data['total_question'] = $total_question;     
        if($get_data){ 
            return $this->respond(["data"=> $get_data]);
        }else{
            return $this->fail(["error" => true], 400);
        }
    }

    public function update_test_kecerdasan(){
        $model = new TestKecerdasanModel();

        $test_id = $this->request->getVar('test_id');

        $data = [
            'sorted' => $this->request->getVar('sorted') == "true" ? true: false,
            'duration' => $this->request->getVar('duration'),
            'test_start_at' => $this->request->getVar('test_start_at'),
            'test_end_at' =>$this->request->getVar('test_end_at'),
        ];
        $update = $model->set($data)->where('test_id', $test_id)->update();
        // $new_data['data'] = $model->orderBy('id', 'DESC')->findAll();
        
        if($update){
            return $this->respond(["message" => "test '{$test_id}' berhasil di update"], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }
    }

    public function upload_question_kecerdasan(){
        $test_id = $this->request->getVar('test_id');
        $data = json_decode($this->request->getVar('data'), true);
        $model = new TestKecerdasanModel();

        $test_data = $model->where('test_id', $test_id)->first();
        $current_question_list = json_decode($test_data['questions_list'], true);

        array_push($current_question_list, $data);

        $update = $model->set('questions_list', json_encode($current_question_list))->where('test_id', $test_id)->update();

        $test_data['questions_list'] = json_encode($current_question_list);
        $test_data["total_question"] = count($current_question_list);
        if($update){
            return $this->respond(["message" => "soal berhasil di tambah", 'data' => $test_data ], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }
    }


    public function update_question_test() {
        $test_id = $this->request->getVar('test_id');
        $test_name = $this->request->getVar('test_name');
        $data = $this->request->getVar('data');
        $model = $test_name == 'kecerdasan' ? new TestKecerdasanModel() : new TestKepribadianModel();
        $update_test_question = $model->set('questions_list', $data)->where('test_id', $test_id)->update();    
        $new_data = [
            "total_question" => count(json_decode($data, true)),
            "questions_list" => $data
        ];
        if($update_test_question){
            return $this->respond(["message" => "Soal berhasil di update", "data" => $new_data], 200);
        }else{
            return $this->fail(["message"=> "error"], 400);
        }

    }

    public function class_statistic_detail(){
        
    }

  
}
