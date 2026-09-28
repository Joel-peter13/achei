<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Config_model extends CI_Model {


    public function __construct() {
        parent::__construct();
    }

    public function get_todas(){
        
        $sql = "SELECT chave,conteudo FROM config";

        $query = $this->db->query($sql);

        $config = array();

        foreach($query->result() as $linha){
            $config[$linha->chave] = $linha->conteudo;
        }

        return $config;

    }
}

?>