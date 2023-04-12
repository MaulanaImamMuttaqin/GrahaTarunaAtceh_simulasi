<?php 
namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    public function run()
    {
        $data = [
            'name' => 'Admin',
            'username' => 'admin',
            'password' => password_hash('admin', PASSWORD_DEFAULT),
        ];

        $this->db->table('admin_user')->insert($data);
    }
}
