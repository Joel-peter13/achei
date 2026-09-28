<?php
defined('BASEPATH') OR exit('No direct script access allowed');

if (!function_exists('menu_principal')) {

    function menu_principal()
    {
        $menu = '
        <ul class="navbar-nav ms-lg-5 me-lg-auto">

            <li class="nav-item">
                <a class="nav-link click-scroll" href="' . base_url('#section_1') . '">
                    Inicio
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link click-scroll" href="' . base_url('#section_2') . '">
                    Sobre 
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link click-scroll" href="' . base_url('#section_3') . '">
                    Serviços
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link click-scroll" href="' . base_url('#section_4') . '">
                    FAQs
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link click-scroll" href="' . base_url('#section_5') . '">
                    Contactos
                </a>
            </li>
        </ul>';

        return $menu;
    }
}