<?php

use App\Exceptions\InvalidUserException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        then: function () {
            Route::middleware('api')
                ->prefix('api')
                ->name('api.')
                ->group(base_path('routes/api.php'));
        },
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
    })
    ->withExceptions(function (Exceptions $exceptions) {

        $exceptions->renderable(function (NotFoundHttpException $e) {
            return response()->json([
                'message' => 'Record not found.'
            ], 404);
        });

        $exceptions->reportable(function (InvalidUserException $e) {
            info('User Exception: ' . $e->getMessage());
        });

        //$exceptions->dontReport(InvalidUserException::class);

    })->create();
