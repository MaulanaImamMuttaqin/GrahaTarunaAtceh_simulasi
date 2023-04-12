<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTestsResultsTable extends Migration
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
            'user_id' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
            ],
            'class_id' => [
                'type' => 'INT',
                'constraint' => 11,
            ],
            'test_id' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
                'null' => true,
            ],
            'kecermatan' => [
                'type' => 'LONGTEXT',
                'null' => true,
                'constraint' => 'json_valid',
            ],
            'kecerdasan' => [
                'type' => 'LONGTEXT',
                'null' => true,
                'constraint' => 'json_valid',
            ],
            'kepribadian' => [
                'type' => 'LONGTEXT',
                'null' => true,
                'constraint' => 'json_valid',
            ],
            'score_kecermatan' => [
                'type' => 'DOUBLE',
                'null' => true,
            ],
            'score_kecerdasan' => [
                'type' => 'DOUBLE',
                'null' => true,
            ],
            'score_kepribadian' => [
                'type' => 'DOUBLE',
                'null' => true,
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('tests_results');
    }

    public function down()
    {
        $this->forge->dropTable('tests_results');
    }
}
