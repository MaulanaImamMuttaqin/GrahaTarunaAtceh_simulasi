<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTestKecerdasanTable extends Migration
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
                'type' => 'INT',
                'constraint' => 11,
                'null' => true,
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
            'questions_list' => [
                'type' => 'LONGTEXT',
                'null' => true,
                'default' => '[]',
                'constraint' => 'json_valid',
            ],
            'sorted' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'null' => false,
                'default' => 1,
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('test_kecerdasan');
    }

    public function down()
    {
        $this->forge->dropTable('test_kecerdasan');
    }
}
