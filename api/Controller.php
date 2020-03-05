<?php


class Controller{
    public function getMyProjects(){
        $model = new Model;
        $projects = $model->getProjects();
        $this->returnJson($projects);
    }
    public function getHome(){
        echo "home";
    }
    public function getDefault(){
        echo "DEFAULT";
    }
    private function returnJson(array $arr){
        echo json_encode($arr);
    }


}