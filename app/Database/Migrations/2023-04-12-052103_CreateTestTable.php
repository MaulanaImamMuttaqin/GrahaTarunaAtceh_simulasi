<?php 
namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTestTable extends Migration
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
            'test_id' => [
                'type' => 'VARCHAR',
                'constraint' => 255
            ],
            'question_total' => [
                'type' => 'INT',
                'constraint' => 255
            ],
            'number_digits' => [
                'type' => 'INT',
                'constraint' => 20
            ],
            'duration' => [
                'type' => 'INT',
                'constraint' => 11
            ],
            'test_start_at' => [
                'type' => 'DATETIME',
                'null' => true
            ],
            'test_end_at' => [
                'type' => 'DATETIME',
                'null' => true
            ],
            'is_open' => [
                'type' => 'TINYINT',
                'constraint' => 1
            ],
            'total_participant' => [
                'type' => 'INT',
                'constraint' => 255
            ],
            'description' => [
                'type' => 'TEXT'
            ],
            'auto' => [
                'type' => 'TINYINT',
                'null' => true
            ],
            'questions_list' => [
                'type' => 'LONGTEXT',
                'null' => true,
                'default' => '[]',
                'comment' => 'JSON-formatted string of the questions list'
            ]
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('test', true);
    }

    public function down()
    {
        $this->forge->dropTable('test', true);
    }
}
