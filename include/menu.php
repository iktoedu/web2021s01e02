<?php

$items = [
    'index' => [
        'title' => 'Головна',
        'url' => 'index.php',
    ],
    'news' => [
        'title' => 'Останні новини',
        'url' => 'news.php',
    ],
    'people' => [
        'title' => 'Люди',
        'url' => 'people.php',
    ],
    'contact' => [
        'title' => 'Зв\'язатись',
        'url' => 'contact.php',
    ],
];

foreach ($items as $id => &$item) {
    $item['id'] = $id;
}

return $items;
