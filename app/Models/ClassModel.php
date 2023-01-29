<?php 
namespace App\Models;
use CodeIgniter\Model;

class ClassModel extends Model
{
    protected $table = 'class_list';
    protected $primaryKey = 'id';
    protected $allowedFields = ['class_name', 'participant_total', 'test_total'];
}