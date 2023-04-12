<?php namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTestListTable extends Migration
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
            'test_name' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
            ],
            'date_created' => [
                'type' => 'DATE',
                'null' => false,
                'default' => 'current_timestamp()',
            ],
            'kecermatan' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'null' => true,
            ],
            'kecerdasan' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'null' => true,
            ],
            'kepribadian' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'null' => true,
            ],
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('test_list');
    }

    public function down()
    {
        $this->forge->dropTable('test_list');
    }
}
