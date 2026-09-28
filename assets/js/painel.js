(function () {
  'use strict';

  var SITE_URL = '/'; // URL da página inicial do teu site (para o botão "Ver no site")

  /* ------------------------------------------------------------
     DEFINIÇÃO DAS SECÇÕES  →  espelha a coluna "secao" da tabela config
     campo = [chave, rótulo, tipo]   tipo: texto | longo | html | imagem
     (uma string solta no array vira um subtítulo de grupo)
  ------------------------------------------------------------ */
  var SECOES = [
    { id: 'nav', nome: 'Navegação', icon: 'bi-list', anchor: '', desc: 'Barra superior, presente em todas as páginas do site.',
      campos: [['nav_nome_entidade', 'Nome da entidade', 'texto']] },

    { id: 'hero', nome: 'Hero', icon: 'bi-house', anchor: '#section_1', desc: 'Bloco principal com o título e a caixa de pesquisa.',
      campos: [
        ['hero_titulo', 'Título', 'texto'],
        ['hero_subtitulo', 'Subtítulo', 'texto'],
        ['hero_busca_placeholder', 'Texto de ajuda da pesquisa', 'texto'],
        ['hero_busca_botao', 'Texto do botão de pesquisa', 'texto']] },

    { id: 'sobre', nome: 'Sobre', icon: 'bi-info-circle', anchor: '#section_2', desc: 'Texto de apresentação da plataforma.',
      campos: [
        ['sobre_titulo', 'Título', 'texto'],
        ['sobre_paragrafo_1', 'Parágrafo 1', 'html'],
        ['sobre_paragrafo_2', 'Parágrafo 2', 'longo'],
        ['sobre_paragrafo_3', 'Parágrafo 3', 'longo'],
        ['sobre_card_titulo', 'Título do cartão lateral', 'texto']] },

    { id: 'explore', nome: 'Explorar', icon: 'bi-grid', anchor: '', desc: 'Título da secção e as categorias/tópicos que aparecem em abas.', extra: 'explore',
      campos: [['explore_titulo', 'Título da secção', 'texto']] },

    { id: 'como_funciona', nome: 'Como funciona', icon: 'bi-signpost', anchor: '#section_3', desc: 'Linha do tempo com 3 passos e chamada final.',
      campos: [
        ['como_funciona_titulo', 'Título da secção', 'texto'],
        'Passo 1', ['passo1_titulo', 'Título', 'texto'], ['passo1_texto', 'Texto', 'longo'],
        'Passo 2', ['passo2_titulo', 'Título', 'texto'], ['passo2_texto', 'Texto', 'longo'],
        'Passo 3', ['passo3_titulo', 'Título', 'texto'], ['passo3_texto', 'Texto', 'longo'],
        'Chamada final', ['como_funciona_cta_texto', 'Texto', 'texto'], ['como_funciona_cta_botao', 'Texto do botão', 'texto']] },

    { id: 'faq', nome: 'Perguntas frequentes', icon: 'bi-question-circle', anchor: '#section_4', desc: 'Título, imagem e as perguntas do acordeão.', extra: 'faq',
      campos: [['faq_titulo', 'Título', 'texto'], ['faq_imagem', 'Imagem', 'imagem']] },

    { id: 'contacto', nome: 'Contacto', icon: 'bi-telephone', anchor: '#section_5', desc: 'Mapa, dados da sede e do atendimento.',
      campos: [
        ['contacto_titulo', 'Título da secção', 'texto'],
        ['contacto_mapa_url', 'URL do Google Maps (embed)', 'texto'],
        'Sede', ['contacto_sede_titulo', 'Título', 'texto'], ['contacto_sede_endereco', 'Endereço', 'texto'],
        ['contacto_sede_telefone', 'Telefone', 'texto'], ['contacto_sede_email', 'E-mail', 'texto'],
        'Atendimento', ['contacto_atendimento_titulo', 'Título', 'texto'], ['contacto_atendimento_texto', 'Texto', 'longo'],
        ['contacto_atendimento_telefone', 'Telefone', 'texto'], ['contacto_atendimento_email', 'E-mail', 'texto']] }
  ];

  /* ---------- Dados (o que hoje está na tabela config) ---------- */
  var VAL = {
    nav_nome_entidade: 'Perdidos & Achados',
    hero_titulo: 'Encontre. Recupere. Devolva.',
    hero_subtitulo: 'Ajude a encontrar objetos perdidos e devolver o que foi encontrado.',
    hero_busca_placeholder: 'Procure por objeto, local ou descrição...',
    hero_busca_botao: 'Pesquisar',
    sobre_titulo: 'Sobre o Perdidos & Achados',
    sobre_paragrafo_1: 'O <strong>Perdidos & Achados</strong> é um espaço criado para facilitar a procura e a devolução de objetos perdidos ou encontrados.',
    sobre_paragrafo_2: 'Através do sistema, qualquer utilizador pode publicar informações sobre um objeto que perdeu ou encontrou, indicando características, local e data, permitindo que outras pessoas possam identificá-lo.',
    sobre_paragrafo_3: 'O nosso objetivo é aproximar quem perdeu um objeto de quem o encontrou, tornando o processo de localização e recuperação mais simples, organizado e acessível.',
    sobre_card_titulo: 'O que pode fazer?',
    explore_titulo: 'Encontre o que procura',
    como_funciona_titulo: 'Como funciona?',
    passo1_titulo: 'Publique um objeto perdido ou encontrado',
    passo1_texto: 'Informe o que perdeu ou encontrou, adicione uma descrição, indique o local e a data e, se possível, inclua uma fotografia para facilitar a identificação.',
    passo2_titulo: 'Procure pelo seu objeto',
    passo2_texto: 'Utilize a pesquisa para encontrar objetos perdidos ou encontrados e consulte as informações publicadas pela comunidade.',
    passo3_titulo: 'Entre em contacto e recupere',
    passo3_texto: 'Ao encontrar uma possível correspondência, entre em contacto com o responsável pela publicação e confirme os detalhes antes de recuperar o objeto.',
    como_funciona_cta_texto: 'Quer saber mais?',
    como_funciona_cta_botao: 'Perguntas frequentes',
    faq_titulo: 'Perguntas Frequentes',
    faq_imagem: 'faq_graphic.jpg',
    contacto_titulo: 'Entre em contacto',
    contacto_mapa_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665...',
    contacto_sede_titulo: 'Sede',
    contacto_sede_endereco: 'Luanda, Angola',
    contacto_sede_telefone: '+244 XXX XXX XXX',
    contacto_sede_email: 'contacto@perdidoseachados.ao',
    contacto_atendimento_titulo: 'Atendimento',
    contacto_atendimento_texto: 'Entre em contacto connosco para esclarecer dúvidas, comunicar problemas ou obter informações sobre o sistema.',
    contacto_atendimento_telefone: '+244 XXX XXX XXX',
    contacto_atendimento_email: 'suporte@perdidoseachados.ao'
  };

  /* tabelas categorias, topicos e (futura) faq_perguntas */
  var CATEGORIAS = [{ id: 1, nome: 'Documentos', ordem: 1 }];
  var TOPICOS = [
    { id: 1, categoria_id: 1, titulo: 'Bilhete de Identidade', descricao: 'Procure ou publique informações sobre Bilhetes de Identidade perdidos ou encontrados.', imagem: 'undraw_Remote_design_team_re_urdx.png', ordem: 1 },
    { id: 2, categoria_id: 1, titulo: 'Passaportes', descricao: 'Consulte anúncios relacionados com passaportes perdidos ou encontrados.', imagem: 'undraw_Redesign_feedback_re_jvm0.png', ordem: 2 },
    { id: 3, categoria_id: 1, titulo: 'Cartões e Documentos', descricao: 'Encontre cartões de estudante, cartões bancários e outros documentos.', imagem: 'colleagues-working-cozy-office-medium-shot.png', ordem: 3 }
  ];
  var PERGUNTAS = [
    { id: 1, q: 'O que é o site de Perdidos e Achados?', a: 'É uma plataforma que permite publicar e procurar informações sobre objetos perdidos ou encontrados, facilitando o contacto entre quem perdeu um objeto e quem o encontrou.' },
    { id: 2, q: 'Como posso procurar um objeto perdido?', a: 'Utilize a pesquisa na página inicial e informe o nome, tipo ou características do objeto. Também pode consultar as diferentes categorias disponíveis.' },
    { id: 3, q: 'Encontrei um objeto. O que devo fazer?', a: 'Publique as informações sobre o objeto encontrado, indicando onde e quando foi encontrado. Evite divulgar informações que possam comprometer a identificação segura do verdadeiro proprietário.' }
  ];

  var SAVED = clone({ VAL: VAL, PERGUNTAS: PERGUNTAS });
  var PREV = {};           // pré-visualizações de imagem (só no navegador)
  var atual = 'nav';
  var CORES = ['#00B0FF', '#00BFA6', '#536DFE', '#F9A826', '#F50057'];

  /* ---------- Utilitários ---------- */
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel) { return document.querySelector(sel); }
  function nextId(arr) { return arr.reduce(function (m, x) { return Math.max(m, x.id); }, 0) + 1; }
  function catNome(id) { var c = CATEGORIAS.filter(function (x) { return x.id === id; })[0]; return c ? c.nome : '—'; }
  function catCor(id) { var i = CATEGORIAS.findIndex(function (x) { return x.id === id; }); return CORES[(i < 0 ? 0 : i) % CORES.length]; }

  var app = $('#app'), savebar = $('#savebar');

  function marcarAlterado() { savebar.classList.add('show'); }
  function limparAlterado() { savebar.classList.remove('show'); }

  function toast(msg, tipo) {
    var el = $('#toast');
    el.className = 'toast align-items-center text-bg-' + (tipo || 'success');
    $('#toast-msg').textContent = msg;
    bootstrap.Toast.getOrCreateInstance(el, { delay: 2600 }).show();
  }

  /* ---------- Menu lateral ---------- */
  function renderNav() {
    var html = '<div class="nav-label">PÁGINA INICIAL</div>';
    SECOES.forEach(function (s) {
      var pill = s.id === 'explore' ? '<span class="pill">' + TOPICOS.length + '</span>' :
                 s.id === 'faq' ? '<span class="pill">' + PERGUNTAS.length + '</span>' : '';
      html += '<button class="nav-item' + (s.id === atual ? ' active' : '') + '" data-sec="' + s.id + '">' +
              '<i class="bi ' + s.icon + '"></i>' + s.nome + pill + '</button>';
    });
    $('#nav').innerHTML = html;
  }

  /* ---------- Campos ---------- */
  function campoHTML(c) {
    var k = c[0], label = c[1], tipo = c[2], v = VAL[k], input;
    if (tipo === 'texto') {
      input = '<input class="form-control" data-k="' + k + '" value="' + esc(v) + '">';
    } else if (tipo === 'longo' || tipo === 'html') {
      input = '<textarea class="form-control" rows="3" data-k="' + k + '">' + esc(v) + '</textarea>';
    } else {
      input = '<div class="img-campo"><div class="img-prev">' +
              (PREV[k] ? '<img src="' + PREV[k] + '" alt="">' : '<i class="bi bi-image"></i>') + '</div>' +
              '<div><label class="btn-pill ghost sm mb-1"><i class="bi bi-upload"></i> Escolher imagem' +
              '<input type="file" accept="image/*" hidden data-img="' + k + '"></label>' +
              '<div class="img-nome">' + esc(v) + '</div></div></div>';
    }
    var tag = tipo === 'html' ? '<span class="tag-html">HTML</span>' : '';
    var dica = tipo === 'html' ? '<div class="form-text">Aceita HTML (ex.: &lt;strong&gt;). Não é escapado no site — edite só com cuidado.</div>' : '';
    return '<div class="campo"><label class="form-label">' + label + tag + '<span class="chave">' + k + '</span></label>' + input + dica + '</div>';
  }

  function camposHTML(sec) {
    return sec.campos.map(function (c) {
      return typeof c === 'string' ? '<h3 class="grupo">' + c + '</h3>' : campoHTML(c);
    }).join('');
  }

  /* ---------- Explorar: categorias e tópicos ---------- */
  function exploreHTML() {
    var cats = CATEGORIAS.slice().sort(function (a, b) { return a.ordem - b.ordem; });
    var rowsC = cats.length ? cats.map(function (c) {
      var n = TOPICOS.filter(function (t) { return t.categoria_id === c.id; }).length;
      return '<tr><td><span class="chip" style="background:' + catCor(c.id) + '">' + esc(c.nome) + '</span></td>' +
             '<td>' + c.ordem + '</td><td>' + n + '</td>' +
             '<td><div class="acoes"><button class="btn-icon" data-act="edit-cat" data-id="' + c.id + '" title="Editar"><i class="bi bi-pencil"></i></button>' +
             '<button class="btn-icon danger" data-act="del-cat" data-id="' + c.id + '" title="Apagar"><i class="bi bi-trash"></i></button></div></td></tr>';
    }).join('') : '<tr><td colspan="4" class="vazio">Ainda não há categorias.</td></tr>';

    var tops = TOPICOS.slice().sort(function (a, b) { return a.categoria_id - b.categoria_id || a.ordem - b.ordem; });
    var rowsT = tops.length ? tops.map(function (t) {
      return '<tr><td><div class="thumb"><div class="sq"><i class="bi bi-image"></i></div><div><span class="t-nome">' + esc(t.titulo) + '</span>' +
             '<span class="t-sub">' + esc(t.descricao) + '</span></div></div></td>' +
             '<td><span class="chip" style="background:' + catCor(t.categoria_id) + '">' + esc(catNome(t.categoria_id)) + '</span></td>' +
             '<td>' + t.ordem + '</td>' +
             '<td><div class="acoes"><button class="btn-icon" data-act="edit-top" data-id="' + t.id + '" title="Editar"><i class="bi bi-pencil"></i></button>' +
             '<button class="btn-icon danger" data-act="del-top" data-id="' + t.id + '" title="Apagar"><i class="bi bi-trash"></i></button></div></td></tr>';
    }).join('') : '<tr><td colspan="4" class="vazio">Ainda não há tópicos.</td></tr>';

    return '<div class="cartao"><div class="cartao-head"><div><h2>Categorias</h2><small>Cada categoria é uma aba na página inicial</small></div>' +
           '<button class="btn-pill sm" data-act="new-cat"><i class="bi bi-plus-lg"></i> Nova categoria</button></div>' +
           '<div class="table-wrap"><table class="tabela"><thead><tr><th>Nome</th><th>Ordem</th><th>Tópicos</th><th></th></tr></thead><tbody>' + rowsC + '</tbody></table></div></div>' +

           '<div class="cartao"><div class="cartao-head"><div><h2>Tópicos</h2><small>Os cartões que aparecem dentro de cada aba</small></div>' +
           '<button class="btn-pill sm" data-act="new-top"><i class="bi bi-plus-lg"></i> Novo tópico</button></div>' +
           '<div class="table-wrap"><table class="tabela"><thead><tr><th>Tópico</th><th>Categoria</th><th>Ordem</th><th></th></tr></thead><tbody>' + rowsT + '</tbody></table></div></div>';
  }

  /* ---------- FAQ: perguntas ---------- */
  function faqItensHTML() {
    if (!PERGUNTAS.length) return '<div class="vazio">Ainda não há perguntas.</div>';
    return PERGUNTAS.map(function (p, i) {
      return '<div class="faq-item"><div class="faq-item-head"><span>Pergunta ' + (i + 1) + '</span>' +
             '<button type="button" class="btn-icon danger" data-act="del-faq" data-id="' + p.id + '" title="Remover"><i class="bi bi-trash"></i></button></div>' +
             '<div class="campo"><label class="form-label">Pergunta</label><input class="form-control" data-faq="q" data-id="' + p.id + '" value="' + esc(p.q) + '"></div>' +
             '<div class="campo"><label class="form-label">Resposta</label><textarea class="form-control" rows="3" data-faq="a" data-id="' + p.id + '">' + esc(p.a) + '</textarea></div></div>';
    }).join('');
  }
  function faqHTML() {
    return '<div class="cartao"><div class="cartao-head"><div><h2>Perguntas</h2><small>Aparecem por ordem, de cima para baixo (tabela <code>faq_perguntas</code>, a criar)</small></div>' +
           '<button class="btn-pill sm" data-act="new-faq"><i class="bi bi-plus-lg"></i> Nova pergunta</button></div>' +
           '<div id="faq-lista">' + faqItensHTML() + '</div></div>';
  }

  /* ---------- Painel da secção ---------- */
  function renderPainel() {
    var sec = SECOES.filter(function (s) { return s.id === atual; })[0];
    var verSite = '<a class="btn-pill ghost sm" target="_blank" rel="noopener" href="' + SITE_URL + sec.anchor + '"><i class="bi bi-box-arrow-up-right"></i> Ver no site</a>';
    var head = '<div class="painel-head"><div><h1>' + sec.nome + '</h1><p>' + sec.desc + '</p>' +
               '<span class="origem"><i class="bi bi-folder"></i> tabela <code>config</code> · secao = <code>' + sec.id + '</code></span></div>' + verSite + '</div>';
    var corpo = '<div class="cartao">' + camposHTML(sec) + '</div>';
    if (sec.extra === 'explore') corpo += exploreHTML();
    if (sec.extra === 'faq') corpo += faqHTML();
    app.innerHTML = head + corpo;
    $('#crumb').innerHTML = 'Conteúdo do site / <strong>' + sec.nome + '</strong>';
    $('#ver-site').href = SITE_URL + sec.anchor;
    renderNav();
  }

  /* ---------- Modais (categorias / tópicos / confirmar) ---------- */
  function abrirModal(titulo, corpo, rotuloOk, aoGuardar) {
    $('#modal-box').innerHTML =
      '<div class="modal-header"><h5 class="modal-title">' + titulo + '</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>' +
      '<div class="modal-body">' + corpo + '</div>' +
      '<div class="modal-footer"><button type="button" class="btn-pill ghost sm" data-bs-dismiss="modal">Cancelar</button>' +
      '<button type="button" class="btn-pill sm" id="modal-ok">' + rotuloOk + '</button></div>';
    var m = bootstrap.Modal.getOrCreateInstance($('#modal'));
    $('#modal-ok').onclick = function () { if (aoGuardar() !== false) m.hide(); };
    m.show();
  }
  function fechar() { bootstrap.Modal.getOrCreateInstance($('#modal')).hide(); }
  function val(id) { return $('#' + id).value.trim(); }

  function modalCategoria(c) {
    var novo = !c; c = c || { nome: '', ordem: CATEGORIAS.length + 1 };
    abrirModal(novo ? 'Nova categoria' :  'Editar categoria',
      '<div class="campo"><label class="form-label">Nome</label><input id="f-nome" class="form-control" value="' + esc(c.nome) + '"></div>' +
      '<div class="campo"><label class="form-label">Ordem de exibição</label><input id="f-ordem" type="number" min="0" class="form-control" value="' + c.ordem + '"></div>',
      'Guardar', function () {
        if (!val('f-nome')) { toast('Indique o nome da categoria.', 'danger'); return false; }
        if (novo) { c.id = nextId(CATEGORIAS); CATEGORIAS.push(c); }
        c.nome = val('f-nome'); c.ordem = parseInt(val('f-ordem'), 10) || 0;
        toast('Categoria guardada.'); renderPainel();
      });
  }

  function modalTopico(t) {
    var novo = !t; t = t || { categoria_id: CATEGORIAS[0] ? CATEGORIAS[0].id : 0, titulo: '', descricao: '', imagem: '', ordem: TOPICOS.length + 1 };
    if (!CATEGORIAS.length) { toast('Crie primeiro uma categoria.', 'danger'); return; }
    var opts = CATEGORIAS.map(function (c) { return '<option value="' + c.id + '"' + (c.id === t.categoria_id ? ' selected' : '') + '>' + esc(c.nome) + '</option>'; }).join('');
    abrirModal(novo ? 'Novo tópico' : 'Editar tópico',
      '<div class="campo"><label class="form-label">Categoria</label><select id="f-cat" class="form-select">' + opts + '</select></div>' +
      '<div class="campo"><label class="form-label">Título</label><input id="f-titulo" class="form-control" value="' + esc(t.titulo) + '"></div>' +
      '<div class="campo"><label class="form-label">Descrição</label><textarea id="f-desc" rows="3" class="form-control">' + esc(t.descricao) + '</textarea></div>' +
      '<div class="row g-3"><div class="col-8"><label class="form-label fw-bold" style="font-size:12.5px">Imagem (nome do ficheiro)</label><input id="f-img" class="form-control" placeholder="exemplo.png" value="' + esc(t.imagem) + '"></div>' +
      '<div class="col-4"><label class="form-label fw-bold" style="font-size:12.5px">Ordem</label><input id="f-ordem" type="number" min="0" class="form-control" value="' + t.ordem + '"></div></div>',
      'Guardar', function () {
        if (!val('f-titulo')) { toast('Indique o título do tópico.', 'danger'); return false; }
        if (novo) { t.id = nextId(TOPICOS); TOPICOS.push(t); }
        t.categoria_id = parseInt($('#f-cat').value, 10); t.titulo = val('f-titulo'); t.descricao = val('f-desc');
        t.imagem = val('f-img'); t.ordem = parseInt(val('f-ordem'), 10) || 0;
        toast('Tópico guardado.'); renderPainel();
      });
  }

  function confirmar(msg, aoConfirmar) {
    abrirModal('Confirmar', '<p class="mb-0">' + msg + '</p>', 'Apagar', function () { aoConfirmar(); });
  }

  /* ---------- Eventos ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-sec],[data-act]');
    if (!b) return;

    if (b.dataset.sec) {
      atual = b.dataset.sec; renderPainel(); window.scrollTo(0, 0); fecharMenu(); return;
    }
    var id = parseInt(b.dataset.id, 10), act = b.dataset.act;
    var cat = CATEGORIAS.filter(function (x) { return x.id === id; })[0];
    var top = TOPICOS.filter(function (x) { return x.id === id; })[0];

    if (act === 'new-cat') modalCategoria();
    if (act === 'edit-cat') modalCategoria(cat);
    if (act === 'new-top') modalTopico();
    if (act === 'edit-top') modalTopico(top);

    if (act === 'del-cat') {
      // Mesmo comportamento do ON DELETE RESTRICT da chave estrangeira
      if (TOPICOS.some(function (t) { return t.categoria_id === id; })) {
        toast('Não pode apagar: a categoria ainda tem tópicos. Apague ou mova-os primeiro.', 'danger'); return;
      }
      confirmar('Apagar a categoria <strong>' + esc(cat.nome) + '</strong>?', function () {
        CATEGORIAS = CATEGORIAS.filter(function (x) { return x.id !== id; }); toast('Categoria apagada.'); renderPainel();
      });
    }
    if (act === 'del-top') {
      confirmar('Apagar o tópico <strong>' + esc(top.titulo) + '</strong>?', function () {
        TOPICOS = TOPICOS.filter(function (x) { return x.id !== id; }); toast('Tópico apagado.'); renderPainel();
      });
    }

    if (act === 'new-faq') { PERGUNTAS.push({ id: nextId(PERGUNTAS), q: '', a: '' }); $('#faq-lista').innerHTML = faqItensHTML(); marcarAlterado(); renderNav(); }
    if (act === 'del-faq') { PERGUNTAS = PERGUNTAS.filter(function (x) { return x.id !== id; }); $('#faq-lista').innerHTML = faqItensHTML(); marcarAlterado(); renderNav(); }
  });

  app.addEventListener('input', function (e) {
    var t = e.target;
    if (t.dataset.k) { VAL[t.dataset.k] = t.value; marcarAlterado(); }
    if (t.dataset.faq) {
      var p = PERGUNTAS.filter(function (x) { return x.id === parseInt(t.dataset.id, 10); })[0];
      if (p) { p[t.dataset.faq] = t.value; marcarAlterado(); }
    }
  });

  app.addEventListener('change', function (e) {
    var t = e.target;
    if (t.dataset.img && t.files && t.files[0]) {
      var k = t.dataset.img, f = t.files[0], r = new FileReader();
      r.onload = function (ev) { PREV[k] = ev.target.result; VAL[k] = f.name; marcarAlterado(); renderPainel(); };
      r.readAsDataURL(f);
    }
  });

  $('#btn-guardar').addEventListener('click', function () {
    // No projeto real: POST para o Controller, que chama Config_model->salvar() por cada chave
    SAVED = clone({ VAL: VAL, PERGUNTAS: PERGUNTAS });
    limparAlterado(); toast('Alterações guardadas.');
  });
  $('#btn-descartar').addEventListener('click', function () {
    var s = clone(SAVED); VAL = s.VAL; PERGUNTAS = s.PERGUNTAS; PREV = {};
    limparAlterado(); renderPainel(); toast('Alterações descartadas.', 'secondary');
  });

  /* ---------- Menu móvel ---------- */
  function fecharMenu() { $('#sidebar').classList.remove('open'); $('#overlay').classList.remove('show'); }
  $('#menu-toggle').addEventListener('click', function () { $('#sidebar').classList.add('open'); $('#overlay').classList.add('show'); });
  $('#overlay').addEventListener('click', fecharMenu);

  renderPainel();
})();