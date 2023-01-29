<?php 
namespace App\Models;
use CodeIgniter\Model;


class TestListModel extends Model
{
    protected $table = 'test_list';
    protected $primaryKey = 'id';
    protected $allowedFields = ['test_id', 'class_id', 'test_name', 'duration', 'date_created', 'kecermatan', 'kecerdasan', 'kepribadian'];
}