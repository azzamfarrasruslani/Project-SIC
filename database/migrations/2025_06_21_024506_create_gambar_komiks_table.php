<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gambar_komiks', function (Blueprint $table) {
            $table->unsignedBigInteger('id_komik');
            $table->foreign('id_komik')->references('id_komik')->on('komiks')->onDelete('cascade');
            $table->string('gambar');  // path gambar panel
            $table->integer('urutan'); // untuk urutan gambar scroll
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gambar_komiks');
    }
};
