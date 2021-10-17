<?php

require_once __DIR__ . '/../include/bootstrap.php';

$response = render_page('index');
$response->send();
