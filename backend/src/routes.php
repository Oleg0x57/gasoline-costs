<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/api/v1/expends', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/expends' route");
    $data = [
        [
            'id' => 1,
            'date' => '01-07-2018',
            'type' => 95,
            'odo' => 190000,
            'price' => 42,
            'quantity' => 30,
            'sum' => 1260,
        ],
        [
            'id' => 2,
            'date' => '06-07-2018',
            'type' => 95,
            'odo' => 190100,
            'price' => 42,
            'quantity' => 10,
            'sum' => 420,
        ]
    ];
    // return $data as Json
    return $this->response->withJson($data);
});

$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});