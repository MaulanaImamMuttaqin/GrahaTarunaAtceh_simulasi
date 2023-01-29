<?php 
namespace App\Models;
use CodeIgniter\Model;

class TestsResultsModel extends Model
{
    protected $table = 'tests_results';
    protected $primaryKey = 'id';
    protected $allowedFields = ['user_id','name','class_id','test_id', 'kecermatan', 'kecerdasan', 'kepribadian', 'score_kecermatan', 'score_kecerdasan', 'score_kepribadian'];

}