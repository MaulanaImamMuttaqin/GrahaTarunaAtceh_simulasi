<?php 
namespace App\Models;
use CodeIgniter\Model;

class ParticipantsListsModel extends Model
{
    protected $table = 'participants_lists';
    protected $primaryKey = 'id';
    protected $allowedFields = ['user_id','name','class_id'];

}