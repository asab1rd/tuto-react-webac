<?php

spl_autoload_register("autoloader"); 

function autoloader(string $classname){
    $path ="./";
    $extension = ".php";
    $fullPath = $path.$classname.$extension;
    if (!file_exists($fullPath)) {
        return ;
    }
    require_once($fullPath);
}