<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Conteúdo do Site — Perdidos & Achados</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Os mesmos assets do teu site -->
<link href="assets/css/bootstrap.min.css" rel="stylesheet">
<link href="assets/css/bootstrap-icons.css" rel="stylesheet">

<!-- Estilo do painel -->
<link href="assets/css/painel.css" rel="stylesheet">
</head>
<body>

  <aside class="sidebar" id="sidebar">
    <div class="brand">
      <div class="brand-mark"><i class="bi bi-back"></i></div>
      <div class="brand-name">Perdidos & Achados<small>EDITOR DE CONTEÚDO</small></div>
    </div>

    <nav id="nav"></nav>

    <div class="sidebar-foot">
      <div class="avatar">MR</div>
      <div class="who">Mariana Rocha<small>Administradora</small></div>
    </div>
  </aside>
  <div class="overlay" id="overlay"></div>

  <div class="main">
    <header class="topbar">
      <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu"><i class="bi bi-list"></i></button>
      <div class="crumb" id="crumb"></div>
      <a class="btn-pill ghost sm ver-site" id="ver-site" target="_blank" rel="noopener" href="/">
        <i class="bi bi-box-arrow-up-right"></i> Ver no site
      </a>
    </header>

    <main class="content" id="app"></main>
  </div>

  <!-- Barra que aparece quando há alterações por guardar -->
  <div class="savebar" id="savebar">
    <span><i class="bi bi-pencil me-2"></i>Tem alterações por guardar</span>
    <span class="d-flex gap-2">
      <button type="button" class="btn-pill ghost sm" id="btn-descartar">Descartar</button>
      <button type="button" class="btn-pill sm" id="btn-guardar"><i class="bi bi-check-lg"></i> Guardar alterações</button>
    </span>
  </div>

  <!-- Modal genérico (categorias, tópicos, confirmações) -->
  <div class="modal fade" id="modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" id="modal-box"></div>
    </div>
  </div>

  <!-- Aviso de sucesso / erro -->
  <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index:1100">
    <div class="toast align-items-center text-bg-success" id="toast" role="status" aria-live="polite" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body" id="toast-msg"></div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Fechar"></button>
      </div>
    </div>
  </div>

  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/painel.js"></script>
</body>
</html>