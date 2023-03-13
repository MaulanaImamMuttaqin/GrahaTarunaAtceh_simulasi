<?php namespace App\Libraries;

class Widget
{

    public function test_list(array $params)
    {
        return view('widgets/view_cells/test_table', $params);
    }

    public function title_header(array $params)
    {
        return view('widgets/view_cells/headers', $params);
    }

    public function class_list(array $params){
        return view('widgets/view_cells/class_table', $params);
    }
    public function class_test_list(array $params){
        return view('widgets/view_cells/class_detail/class_test_list', $params);
    }

    public function question_detail(array $params){
        if($params['type'] == 'normal'){
            return view('widgets/modals/class_detail/common/QuestionDetails', $params);
        }
        return view('widgets/modals/class_detail/common/QuestionDetailsScore', $params);
    }
}