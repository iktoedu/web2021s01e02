<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$request = Request::createFromGlobals();

/**
 * @return Response
 */
function render_page($page_id, $context = []) {
    $twig = new Environment(new FilesystemLoader([__DIR__ . '/../templates']));
    $menu_items = require_once __DIR__ . '/menu.php';

    $context += [
        'menu_items' => $menu_items,
    ];
    $content = $twig->render("{$page_id}.html.twig", $context);

    return new Response($content);
}
