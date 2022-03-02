<?php namespace App\Libraries;

class Widget
{

    public function test_list(array $params)
    {
        return view('widgets/test_table', $params);
    }
}