<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/',[PostController::class, 'index'])->name('post.index');
Route::get('/new',[PostController::class, 'new'])->name('post.new');



Route::get('/products', function(){
    return Inertia::render('AllProductComponent');
});

Route::get('/students', function(){
    return Inertia::render('AllStudentComponent');
});


Route::get('/appliance', function(){
    return Inertia::render('ApplieanceComponent');
});

Route::get('/color', function(){
    return Inertia::render('ColorComponent');
});


Route::get('/contact', function(){
    return Inertia::render('ContactUs');
});




//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');
//





Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
