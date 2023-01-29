<?php 
namespace App\Models;
use CodeIgniter\Model;

class ResultModel extends Model
{
    protected $table = 'tes_result';
    protected $primaryKey = 'id';
    protected $allowedFields = ['user_id',	'name',	'test_id','result'];
}