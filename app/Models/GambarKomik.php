<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GambarKomik extends Model
{
    protected $fillable = ['id_komik', 'gambar', 'urutan'];

    public function komik()
    {
        return $this->belongsTo(Komik::class, 'id_komik');
    }
}
