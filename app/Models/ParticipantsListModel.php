<?php 
namespace App\Models;
use CodeIgniter\Model;

class ParticipantsListModel extends Model
{
    protected $table = 'participants_list';
    protected $primaryKey = 'id';
    protected $allowedFields = ['user_id','name','class_id', 'kecermatan', 'kecerdasan', 'kepribadian'];

}