<?php

/**
 * This Will take the Last part of the url
 */
header("Access-Control-Allow-Origin: http://localhost:3000");
require_once("./autoloader.php");
define('BASE_URI', str_replace('\\', '/', substr(__DIR__, strlen($_SERVER['DOCUMENT_ROOT']))));
$uri = str_replace(BASE_URI, '', $_SERVER['REQUEST_URI']);

// echo $uri;

$router = new Router();
$router->route($uri);
