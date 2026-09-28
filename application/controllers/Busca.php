<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Busca extends CI_Controller {

	protected $config_site;
	public function __construct(){
		parent:: __construct();

		$this->load->model('Config_model');
		$this->load->model('Topico_model');
		$this->config_site= $this->Config_model->get_todas();
		$this->load->vars(array('config_site'=>$this->config_site));
	}

	public function index()
	{
		$data['categorias'] = $this->Topico_model->get_topicos();

		$this->load->view('index', $data);
	}
}
