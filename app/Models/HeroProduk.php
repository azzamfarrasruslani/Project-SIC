<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroProduk extends Model
{
    protected $table = 'hero_produk';
    protected $primaryKey = 'id_hero';

    protected $fillable = ['gambar'];
}
