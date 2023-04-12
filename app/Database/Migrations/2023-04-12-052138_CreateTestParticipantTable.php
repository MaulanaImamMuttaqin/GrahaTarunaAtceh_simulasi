<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTestParticipantTable extends Migration
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
                'constraint' => 255,
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
            ],
            'test_id' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'is_start' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'default' => 0,
            ],
            'is_finish' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'default' => 0,
            ],
            'result' => [
                'type' => 'LONGTEXT',
                'null' => true,
            ],
            'is_passed' => [
                'type' => 'VARCHAR',
                'constraint' => 1,
                'default' => '-',
            ],
            'score' => [
                'type' => 'FLOAT',
                'constraint' => 10,
                'default' => 0,
            ],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('test_participant');
    }

    public function down()
    {
        $this->forge->dropTable('test_participant');
    }
}
