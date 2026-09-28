<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Topico_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function get_topicos() {
        $sql = "
            SELECT
                c.id AS categoria_id,
                c.nome AS categoria_nome,
                t.id AS topico_id,
                t.titulo,
                t.descricao,
                t.imagem
            FROM
                topicos t
            INNER JOIN
                categorias c ON c.id = t.categoria_id
            ORDER BY
                c.ordem, t.ordem
        ";

        $query = $this->db->query($sql);

        $categorias = array();

        foreach ($query->result() as $linha) {

            // Se ainda não existe essa categoria no array, cria a "gaveta" dela
            if (!isset($categorias[$linha->categoria_id])) {
                $categorias[$linha->categoria_id] = array(
                    'nome'    => $linha->categoria_nome,
                    'topicos' => array(),
                );
            }

            // Adiciona o tópico dentro da categoria certa
            $categorias[$linha->categoria_id]['topicos'][] = array(
                'id'        => $linha->topico_id,
                'titulo'    => $linha->titulo,
                'descricao' => $linha->descricao,
                'imagem'    => $linha->imagem,
            );
        }

        return $categorias;
    }

}