<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTestKepribadianTable extends Migration
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
                'null' => false,
            ],
            'class_id' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true,
            ],
            'duration' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => false,
            ],
            'test_start_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
            'test_end_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
            'questions_list' => [
                'type' => 'LONGTEXT',
                'null' => false,
                'default' => '[]',
                'constraint' => 'longtext',
                'collation' => 'utf8mb4_bin',
            ],
            'sorted' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'null' => false,
                'default' => 1,
            ],
        ]);

        $this->forge->addKey('id', true);
        $this->forge->createTable('test_kepribadian');
    }

    public function down()
    {
        $this->forge->dropTable('test_kepribadian');
    }
}
