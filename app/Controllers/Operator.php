<?php

namespace App\Controllers;

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
}
