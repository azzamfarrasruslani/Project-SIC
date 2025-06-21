<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Komik extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_komik';

    protected $fillable = [
        'judul',
        'deskripsi',
        'thumbnail',
        'pengarang',
    ];

    public function gambarKomik()
    {
        return $this->hasMany(GambarKomik::class, 'id_komik')->orderBy('urutan');
    }

}
