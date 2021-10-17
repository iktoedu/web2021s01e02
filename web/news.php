<?php

require_once __DIR__ . '/../include/bootstrap.php';

$response = render_page('news');
$response->send();
