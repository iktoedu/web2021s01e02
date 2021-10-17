<?php

require_once __DIR__ . '/../include/bootstrap.php';

$response = render_page('contact');
$response->send();
