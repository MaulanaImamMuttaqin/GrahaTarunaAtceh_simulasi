<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTestKecermatanTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'test_id' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'class_id' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
                'null' => true,
            ],
            'question_total' => [
                'type' => 'INT',
                'constraint' => 255,
            ],
            'number_digits' => [
                'type' => 'INT',
                'constraint' => 20,
            ],
            'duration' => [
                'type' => 'INT',
                'constraint' => 11,
            ],
            'test_start_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
            'test_end_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
            'is_open' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'null' => false,
                'default' => 0,
            ],
            'description' => [
                'type' => 'TEXT',
                'null' => true,
            ],
            'mode' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'null' => true,
            ],
            'total_participant' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => false,
                'default' => 0,
            ],
            'questions_list' => [
                'type' => 'LONGTEXT',
                'null' => true,
                'default' => '[]',
                'constraint' => 'json_valid',
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('test_kecermatan');
    }

    public function down()
    {
        $this->forge->dropTable('test_kecermatan');
    }
}
