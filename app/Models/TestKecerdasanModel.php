<?php 
namespace App\Models;
use CodeIgniter\Model;


class TestKecerdasanModel extends Model
{
    protected $table = 'test_kecerdasan';
    protected $primaryKey = 'id';
    protected $allowedFields = ['test_id','class_id', 'duration', 'test_start_at', 'test_end_at', 'questions_list'];
}