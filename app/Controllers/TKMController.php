<?php

namespace App\Controllers;
use CodeIgniter\I18n\Time;


class TKMController extends BaseController
{
    protected $session;


    function __construct()
    {
        $this->session = \Config\Services::session();
        $this->session->start();
    }

    public function index($id = null)
    {   

        return view("TKM/home",);
    }
}
