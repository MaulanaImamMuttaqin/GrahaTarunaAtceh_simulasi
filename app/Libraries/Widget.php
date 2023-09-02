<?php namespace App\Libraries;

class Widget
{

    public function test_list(array $params)
    {
        return view('Widgets/View_Cells/test_table', $params);
    }

    public function title_header(array $params)
    {
        return view('Widgets/View_Cells/headers', $params);
    }

    public function class_list(array $params){
        return view('Widgets/View_Cells/class_table', $params);
    }
    public function class_test_list(array $params){
        return view('Widgets/View_Cells/class_detail/class_test_list', $params);
    }

    public function question_detail(array $params){
        return view('Widgets/Modals/class_detail/common/QuestionDetails', $params);
    }
}