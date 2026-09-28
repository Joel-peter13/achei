// application/controllers/Teste_php8.php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Teste_php8 extends CI_Controller {

	public function index()
	{
		// --- Model ---
		$this->load->model('teste_model');
		echo 'Model OK<br>';

		// --- Session ---
		$this->load->library('session');
		$this->session->set_userdata('teste', 'valor');
		echo 'Session OK<br>';

		// --- Form_validation com regras reais (não só carregar vazio) ---
		$this->load->library('form_validation');
		$this->form_validation->set_rules('nome', 'Nome', 'required|min_length[3]|alpha');
		$this->form_validation->set_data(array('nome' => 'ab'));
		$resultado = $this->form_validation->run();
		echo 'Form_validation correu (esperado FALSE, "ab" falha min_length): '
			. var_export($resultado, TRUE) . '<br>';

		// --- Upload (só instanciar + configurar, sem ficheiro real) ---
		$this->load->library('upload', array('upload_path' => sys_get_temp_dir(), 'allowed_types' => 'jpg'));
		echo 'Upload OK<br>';

		// --- Email (monta, não envia de verdade) ---
		$this->load->library('email');
		$this->email->from('teste@teste.com', 'Teste');
		$this->email->to('destino@teste.com');
		$this->email->subject('Assunto de teste');
		$this->email->message('Corpo de teste');
		echo 'Email montado OK (não enviado)<br>';

		// --- Helpers: os que a maioria dos projetos usa ---
		$this->load->helper(array('url', 'form', 'text', 'array', 'string', 'date', 'security'));
		echo 'url_title: ' . url_title('Teste de Título Ç ã õ') . '<br>';
		echo 'form_open: ' . form_open('teste') . '<br>';
		echo 'word_limiter: ' . word_limiter('Isto é um texto longo de teste para o helper', 3) . '<br>';
		echo 'random_string: ' . random_string('alnum', 8) . '<br>';
		echo 'mdate: ' . mdate('%Y-%m-%d', time()) . '<br>';
		echo 'do_hash: ' . do_hash('teste') . '<br>';
		echo 'element (array_helper): ' . var_export(element('a', array('a' => 1)), TRUE) . '<br>';

		// --- Pattern comum em apps reais: instanciar um model que faz query ---
		// (comenta esta linha se ainda não tiveres tabela/credenciais prontas)
		// $this->load->database();

		echo '<br><strong>Se não apareceu nenhum bloco "A PHP Error was encountered" acima desta linha, está tudo limpo.</strong>';
	}
}