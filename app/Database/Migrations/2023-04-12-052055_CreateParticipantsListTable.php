<?php namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateParticipantsListsTable extends Migration
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
            'user_id' => [
                'type' => 'VARCHAR',
                'constraint' => 100
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => 100
            ],
            'class_id' => [
                'type' => 'VARCHAR',
                'constraint' => 100
            ]
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('participants_lists', true);
    }

    public function down()
    {
        $this->forge->dropTable('participants_lists', true);
    }
}
