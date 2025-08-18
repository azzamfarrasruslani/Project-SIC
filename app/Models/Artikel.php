<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;

    // Jika primary key bukan 'id', tentukan di sini
    protected $primaryKey = 'id_artikel';

    // Jika nama tabel tidak konvensional jamak (optional)
    // protected $table = 'artikels';

    // Kolom yang boleh diisi (mass assignment)
    protected $fillable = [
        'judul',
        'slug',
        'isi',
        'gambar',
        'penulis',
        'status',
        'kategori',
    ];
}
