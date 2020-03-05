<?php

class Model extends Connection{
    private $db = null;
    public function __construct(){
        $this->db = $this->connect(); //In DB there will be PDO
    }

    public function getProjects(){
        $sql = "SELECT * from projects";
        $statement = $this->db->prepare($sql);
        $statement->execute();
        return $statement->fetchAll();
    }
}