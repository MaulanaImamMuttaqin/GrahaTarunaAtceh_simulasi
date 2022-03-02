<?php 
namespace App\Models;
use CodeIgniter\Model;

class AdminUser extends Model
{
    protected $table = 'admin_user';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name','username','password'];

   
}