<?php 
namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateClassListTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'auto_increment' => true
            ],
            'class_name' => [
                'type' => 'VARCHAR',
                'constraint' => 100
            ],
            'participant_total' => [
                'type' => 'INT',
                'constraint' => 11,
                'default' => 0
            ],
            'test_total' => [
                'type' => 'INT',
                'constraint' => 11,
                'default' => 0
            ]
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('class_list', true);
    }

    public function down()
    {
        $this->forge->dropTable('class_list', true);
    }
}
