<?php 
namespace App\Models;
use CodeIgniter\Model;

class ParticipantModel extends Model
{
    protected $table = 'test_participant';
    protected $primaryKey = 'id';
    protected $allowedFields = ['user_id','test_id','name',	'is_start','is_finish', 'result'];

   
}