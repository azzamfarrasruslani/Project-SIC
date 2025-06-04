<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('produks', function (Blueprint $table) {
            $table->id('id_produk');
            $table->string('nama');
            $table->text('deskripsi');
            $table->string('gambar')->nullable(); // menyimpan nama file atau URL gambar
            $table->string('kategori');
            $table->decimal('harga', 10, 2); // bisa menampung harga hingga miliaran
            $table->string('linkproduk')->nullable(); // bisa untuk link ke marketplace
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produks');
    }
};
