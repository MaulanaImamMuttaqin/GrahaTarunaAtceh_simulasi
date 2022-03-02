<?php 
namespace App\Models;
use CodeIgniter\Model;


class TestModel extends Model
{
    protected $table = 'test';
    protected $primaryKey = 'id';
    protected $allowedFields = ['test_id', 'question_total', 'number_digits', 'duration', 'test_start_at', 'test_end_at'];
}