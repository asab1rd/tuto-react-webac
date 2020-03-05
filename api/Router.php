<?php

class Router{
    public function route($uri){
        $controller = new Controller;
        switch ($uri) {
            case '/home':
                $controller->getHome();
                break;
            case '/projects':
                $controller->getMyProjects();
                break;
            default:
                $controller->getDefault();
                break;
        }
    }
}