<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Operator');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Operator::index', ['filter' => 'authGuard']);

$routes->group('operator',['filter' => 'authGuard'], function($routes){
    $routes->get("/", "Operator::index");
    $routes->get("test_list/", "Operator::test_list");
    $routes->get("users/", "Operator::users");
    $routes->get("kelas/", "Operator::class_list");
});


$routes->group('test',['filter' => 'authTestGuard'], function($routes){
    $routes->get("/", "Test::index");
    $routes->get("/index/(:any)", "Test::index");
});
$routes->group('operatorApi',['filter' => 'authGuardApi'], function($routes){
    $routes->get('test_table_list/', 'OperatorApi::test_table_list');
    $routes->post('add_test/', 'OperatorApi::add_test');
    $routes->delete('delete_test/', 'OperatorApi::delete_test');
    // $routes->post('create_class/', 'OperatorApi::create_new_class');
    // $routes->post('add_participant/', 'OperatorApi::add_participant');
});

$routes->group('testApi',['filter' => 'authTestGuard'], function($routes){
    $routes->get('submit_result/', 'TestApi::submit_result');
});

$routes->post('create_class/', 'OperatorApi::create_new_class');

$routes->get('tkm_manajerial/', 'TKMController::index');


/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
