<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KomikController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\HeroProdukController;
use App\Models\Komik;
use App\Http\Controllers\KuisController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\KomikAdminController;


// ===================
//=== Auth routes ===
// ===================

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ===================
//=== Guest routes ===
// ===================

// =Home route=
Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

// =Komik route=
Route::get('/komik', [KomikController::class, 'komikGuest'])->name('komik.guest');
Route::get('/komik/{id_komik}', [KomikController::class, 'showGuest'])->name('komik.show');


// =Produk route=
Route::get('/produk', [ProdukController::class, 'produkGuest'])->name('produk.guest');

// =Artikel route=
Route::get('/artikel', [ArtikelController::class, 'artikelGuest'])->name('artikel.guest');

// =Tentang route=
Route::get('/sejarah-ekosistem', function () {
    return Inertia::render('Guest/Tentang/SejarahEkosistem');
})->name('sejarah-ekosistem');
Route::get('/fungsi-gambut', function () {
    return Inertia::render('Guest/Tentang/FungsiGambut');
})->name('fungsi-gambut');


// =Lainnya route=
Route::get('/kontributor', function () {
    return Inertia::render('Guest/Lainnya/Kontributor');
})->name('kontributor');




// ===================
//=== Admin routes ===
// ===================
Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    // =Produk route=
    Route::get('/produk', [ProdukController::class, 'produkAdmin'])->name('produk.admin');
    Route::get('/produk/create', [ProdukController::class, 'create'])->name('produk.create');
    Route::post('/produk', [ProdukController::class, 'store'])->name('produk.store');
    Route::get('/produk/{id}/edit', [ProdukController::class, 'edit'])->name('produk.edit');
    Route::post('/produk/{id}/update', [ProdukController::class, 'update'])->name('produk.update');
    Route::delete('/produk/{id}', [ProdukController::class, 'destroy'])->name('produk.destroy');

    // =Hero Produk route=
    Route::get('/hero-produk', [HeroProdukController::class, 'index'])->name('produk.hero');
    Route::get('/hero-produk/create', [HeroProdukController::class, 'create'])->name('hero.create');
    Route::get('/hero-produk/{id}/edit', [HeroProdukController::class, 'edit'])->name('hero.edit');
    Route::post('/hero-produk', [HeroProdukController::class, 'store'])->name('hero.store');
    Route::post('/hero-produk/{id}', [HeroProdukController::class, 'update'])->name('hero.update');
    Route::delete('/hero-produk/{id}', [HeroProdukController::class, 'destroy'])->name('hero.destroy');

    // =Komik route=
    Route::get('/komik', [KomikController::class, 'KomikAdmin'])->name('komik.admin');
    Route::get('/komik/create', [KomikController::class, 'create'])->name('komik.create');
    Route::post('/komik', [KomikController::class, 'store'])->name('komik.store');
    Route::get('/komik/{id}/edit', [KomikController::class, 'edit'])->name('komik.edit');
    Route::post('/komik/{id}/update', [KomikController::class, 'update'])->name('komik.update');
    Route::delete('/komik/{id}', [KomikController::class, 'destroy'])->name('komik.destroy');

    // =Kuis route=
    Route::get('/kuis', [KuisController::class, 'KuisAdmin'])->name('kuis.admin');
    Route::get('/kuis/create', [KuisController::class, 'create'])->name('kuis.create');
    Route::post('/kuis', [KuisController::class, 'store'])->name('kuis.store');
    Route::get('/kuis/{id}/edit', [KuisController::class, 'edit'])->name('kuis.edit');
    Route::put('/kuis/{id}', [KuisController::class, 'update'])->name('kuis.update');
    Route::delete('/kuis/{id}', [KuisController::class, 'destroy'])->name('kuis.destroy');

    // Route::delete('/artikel-admin/{id_artikel}', [ArtikelController::class, 'destroy'])->name('artikel-admin.destroy');
    // Route::resource('/artikel-admin', ArtikelController::class);
});


// ===================
//=== Error routes ===
// ===================

Route::fallback(function () {
    return Inertia::render('Errors/Error404')->toResponse(request())->setStatusCode(404);
});












require __DIR__ . '/auth.php';
require __DIR__ . '/auth.php';
