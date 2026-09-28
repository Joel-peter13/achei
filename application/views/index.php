
<?php $this->load->view('layout/header')?>

<main>

<nav class="navbar navbar-expand-lg">

    <div class="container">

        <a class="navbar-brand" href="index.html">
            <i class="bi-back"></i>
            <span class="fs-5"><?= html_escape($config_site['nav_nome_entidade'])?></span>
        </a>

        <div class="d-lg-none ms-auto me-4">
            <a href="#top" class="navbar-icon bi-person smoothscroll"></a>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <?= menu_principal(); ?>

            <div class="d-none d-lg-block">
                <a href="#top" class="navbar-icon bi-person smoothscroll"></a>
            </div>
        </div>
    </div>

</nav>


<section class="hero-section d-flex justify-content-center align-items-center" id="section_1">

    <div class="container">

        <div class="row">

            <div class="col-lg-8 col-12 mx-auto">

                <h1 class="text-white text-center "><?= html_escape($config_site['hero_titulo'])?></h1>

                <h6 class="text-center"><?= html_escape($config_site['hero_subtitulo'])?></h6>

                <form method="get" class="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">

                    <div class="input-group input-group-lg">

                        <span class="input-group-text bi-search" id="basic-addon1">
                        </span>

                        <input name="keyword"
                               type="search"
                               class="form-control"
                               id="keyword"
                               placeholder="<?= html_escape($config_site['hero_busca_placeholder']) ?>"
                               aria-label="Search">

                        <button type="submit" class="form-control"><?= html_escape($config_site['hero_busca_botao'])?></button>

                    </div>

                </form>

            </div>

        </div>

    </div>

</section>


<section class="section-padding" id="section_2">

    <div class="container">

        <div class="row align-items-center">

            <div class="col-lg-6 col-12 mb-4 mb-lg-0">

                <h2 class="mb-4 fs-3"><?= html_escape($config_site['sobre_titulo'])?></h2>

                <p>
                    <?= $config_site['sobre_paragrafo_1'] ?>
                </p>

                <p>
                    <?= html_escape($config_site['sobre_paragrafo_2'])?>
                </p>

                <p>
                    <?= html_escape($config_site['sobre_paragrafo_3'])?>
                </p>

            </div>


            <div class="col-lg-5 col-12 ms-auto">

                <div class="custom-block bg-white shadow-lg p-4">

                    <h4 class="mb-3"><?= html_escape($config_site['sobre_card_titulo'])?></h4>

                    <p>
                        <i class="bi-search me-2"></i>
                        Procurar objetos perdidos
                    </p>

                    <p>
                        <i class="bi-plus-circle me-2"></i>
                        Publicar um objeto perdido
                    </p>

                    <p>
                        <i class="bi-check-circle me-2"></i>
                        Publicar um objeto encontrado
                    </p>

                    <p>
                        <i class="bi-geo-alt me-2"></i>
                        Consultar o local onde o objeto foi perdido ou encontrado
                    </p>

                    <p class="mb-0">
                        <i class="bi-person me-2"></i>
                        Entrar em contacto para facilitar a devolução
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>

<section class="explore-section section-padding">

    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="mb-4"><?= html_escape($config_site['explore_titulo']) ?></h2>
            </div>
        </div>
    </div>


    <div class="container-fluid">
        <div class="row">

            <ul class="nav nav-tabs" id="myTab" role="tablist">

                <?php $i = 0; ?>
                <?php foreach ($categorias as $categoria_id => $categoria): ?>

                    <li class="nav-item" role="presentation">

                        <button class="nav-link <?= ($i === 0) ? 'active' : '' ?>"
                                id="cat-<?= $categoria_id ?>-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#cat-<?= $categoria_id ?>-pane"
                                type="button"
                                role="tab"
                                aria-controls="cat-<?= $categoria_id ?>-pane"
                                aria-selected="<?= ($i === 0) ? 'true' : 'false' ?>">

                            <?= html_escape($categoria['nome']) ?>

                        </button>

                    </li>

                    <?php $i++; ?>
                <?php endforeach; ?>

            </ul>

        </div>
    </div>


    <div class="container">
        <div class="row">
            <div class="col-12">

                <div class="tab-content" id="myTabContent">

                    <?php $i = 0; ?>
                    <?php foreach ($categorias as $categoria_id => $categoria): ?>

                        <div class="tab-pane fade <?= ($i === 0) ? 'show active' : '' ?>"
                             id="cat-<?= $categoria_id ?>-pane"
                             role="tabpanel"
                             aria-labelledby="cat-<?= $categoria_id ?>-tab"
                             tabindex="0">

                            <div class="row">

                                <?php foreach ($categoria['topicos'] as $topico): ?>

                                    <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">

                                        <div class="custom-block bg-white shadow-lg">

                                            <a href="<?= site_url('topico/' . $topico['id']) ?>">

                                                <div class="d-flex">

                                                    <div>
                                                        <h5 class="mb-2"><?= html_escape($topico['titulo']) ?></h5>
                                                        <p class="mb-0"><?= html_escape($topico['descricao']) ?></p>
                                                    </div>

                                                </div>

                                                <img src="<?= assets('images/topics/' . $topico['imagem']) ?>"
                                                     class="custom-block-image img-fluid"
                                                     alt="<?= html_escape($topico['titulo']) ?>">

                                            </a>

                                        </div>

                                    </div>

                                <?php endforeach; ?>

                            </div>

                        </div>

                        <?php $i++; ?>
                    <?php endforeach; ?>

                </div>

            </div>
        </div>
    </div>

</section>


<section class="timeline-section section-padding" id="section_3">

    <div class="section-overlay"></div>

    <div class="container">
        <div class="row">

            <div class="col-12 text-center">
                <h2 class="text-white mb-4"><?= html_escape($config_site['como_funciona_titulo']) ?></h2>
            </div>

            <div class="col-lg-10 col-12 mx-auto">
                <div class="timeline-container">
                    <ul class="vertical-scrollable-timeline" id="vertical-scrollable-timeline">

                        <div class="list-progress"><div class="inner"></div></div>

                        <li>
                            <h4 class="text-white mb-3"><?= html_escape($config_site['passo1_titulo']) ?></h4>
                            <p class="text-white"><?= html_escape($config_site['passo1_texto']) ?></p>
                            <div class="icon-holder"><i class="bi-search"></i></div>
                        </li>

                        <li>
                            <h4 class="text-white mb-3"><?= html_escape($config_site['passo2_titulo']) ?></h4>
                            <p class="text-white"><?= html_escape($config_site['passo2_texto']) ?></p>
                            <div class="icon-holder"><i class="bi-bookmark"></i></div>
                        </li>

                        <li>
                            <h4 class="text-white mb-3"><?= html_escape($config_site['passo3_titulo']) ?></h4>
                            <p class="text-white"><?= html_escape($config_site['passo3_texto']) ?></p>
                            <div class="icon-holder"><i class="bi-book"></i></div>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="col-12 text-center mt-5">
                <p class="text-white">
                    <?= html_escape($config_site['como_funciona_cta_texto']) ?>
                    <a href="#section_4" class="btn custom-btn custom-border-btn ms-3">
                        <?= html_escape($config_site['como_funciona_cta_botao']) ?>
                    </a>
                </p>
            </div>

        </div>
    </div>

</section>

<section class="faq-section section-padding" id="section_4">

    <div class="container">

        <div class="row">

            <div class="col-lg-6 col-12">

                <h2 class="mb-4">Perguntas Frequentes</h2>

            </div>

            <div class="clearfix"></div>


            <div class="col-lg-5 col-12">

                <img src="<?= assets('images/faq_graphic.jpg')?>"
                     class="img-fluid"
                     alt="Perguntas Frequentes">

            </div>


            <div class="col-lg-6 col-12 m-auto">

                <div class="accordion" id="accordionExample">


                    <div class="accordion-item">

                        <h2 class="accordion-header" id="headingOne">

                            <button class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">

                                O que é o site de Perdidos e Achados?

                            </button>

                        </h2>


                        <div id="collapseOne"
                             class="accordion-collapse collapse show"
                             aria-labelledby="headingOne"
                             data-bs-parent="#accordionExample">

                            <div class="accordion-body">

                                É uma plataforma que permite publicar e procurar informações
                                sobre objetos perdidos ou encontrados, facilitando o contacto
                                entre quem perdeu um objeto e quem o encontrou.

                            </div>

                        </div>

                    </div>


                    <div class="accordion-item">

                        <h2 class="accordion-header" id="headingTwo">

                            <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo">

                                Como posso procurar um objeto perdido?

                            </button>

                        </h2>


                        <div id="collapseTwo"
                             class="accordion-collapse collapse"
                             aria-labelledby="headingTwo"
                             data-bs-parent="#accordionExample">

                            <div class="accordion-body">

                                Utilize a pesquisa na página inicial e informe o nome,
                                tipo ou características do objeto. Também pode consultar
                                as diferentes categorias disponíveis.

                            </div>

                        </div>

                    </div>


                    <div class="accordion-item">

                        <h2 class="accordion-header" id="headingThree">

                            <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree">

                                Encontrei um objeto. O que devo fazer?

                            </button>

                        </h2>


                        <div id="collapseThree"
                             class="accordion-collapse collapse"
                             aria-labelledby="headingThree"
                             data-bs-parent="#accordionExample">

                            <div class="accordion-body">

                                Publique as informações sobre o objeto encontrado,
                                indicando onde e quando foi encontrado. Evite divulgar
                                informações que possam comprometer a identificação segura
                                do verdadeiro proprietário.

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>


<section class="contact-section section-padding section-bg" id="section_5">

    <div class="container">

        <div class="row">

            <div class="col-lg-12 col-12 text-center">

                <h2 class="mb-5">Entre em contacto</h2>

            </div>


            <div class="col-lg-5 col-12 mb-4 mb-lg-0">

                <iframe class="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth"
                        width="100%"
                        height="250"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                </iframe>

            </div>


            <div class="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">

                <h4 class="mb-3">Sede</h4>

                <p>Luanda, Angola</p>

                <hr>

                <p class="d-flex align-items-center mb-1">

                    <span class="me-2">Telefone</span>

                    <a href="tel:+244000000000"
                       class="site-footer-link">

                        +244 XXX XXX XXX

                    </a>

                </p>


                <p class="d-flex align-items-center">

                    <span class="me-2">Email</span>

                    <a href="mailto:contacto@perdidoseachados.ao"
                       class="site-footer-link">

                        contacto@perdidoseachados.ao

                    </a>

                </p>

            </div>


            <div class="col-lg-3 col-md-6 col-12 mx-auto">

                <h4 class="mb-3">Atendimento</h4>

                <p>
                    Entre em contacto connosco para esclarecer dúvidas,
                    comunicar problemas ou obter informações sobre o sistema.
                </p>

                <hr>

                <p class="d-flex align-items-center mb-1">

                    <span class="me-2">Telefone</span>

                    <a href="tel:+244000000000"
                       class="site-footer-link">

                        +244 XXX XXX XXX

                    </a>

                </p>


                <p class="d-flex align-items-center">

                    <span class="me-2">Email</span>

                    <a href="mailto:suporte@perdidoseachados.ao"
                       class="site-footer-link">

                        suporte@perdidoseachados.ao

                    </a>

                </p>

            </div>

        </div>

    </div>

</section>

</main>

<?php $this->load->view('layout/footer')?>
```
