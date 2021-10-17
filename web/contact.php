<?php

require_once __DIR__ . '/../include/bootstrap.php';

/** @var \Symfony\Component\HttpFoundation\Request $request */
if ($request->request->has('submit_request')) {
    $submission_filename = date('Y-m-d_H-i-s') . '-' . sprintf('%06d', rand(0, 999999)) . '.txt';
    $email = $request->request->get('email');
    $subject = $request->request->get('subject');
    $content = <<<TXT
{$email}

{$subject}
TXT;
    file_put_contents(__DIR__ . '/../submissions/' . $submission_filename, $content);

    $response = new \Symfony\Component\HttpFoundation\RedirectResponse('contact.php?is_done=1');
}
else {
    $response = render_page('contact', [
        'is_broken' => !is_writable(__DIR__ . '/../submissions/'),
        'is_done' => $request->query->get('is_done'),
    ]);
}
$response->send();
