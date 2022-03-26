<?php 
namespace App\Models;
use CodeIgniter\Model;


class TestKecermatanModel extends Model
{
    protected $table = 'test_kecermatan';
    protected $primaryKey = 'id';
    protected $allowedFields = ['test_id','class_id', 'question_total', 'number_digits', 'duration', 'test_start_at', 'test_end_at', 'isOpen', 'description', 'description', 'auto', 'questions_list'];
}