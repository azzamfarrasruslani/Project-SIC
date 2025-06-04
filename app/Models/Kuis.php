<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Kuis extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_kuis';


    // Tentukan kolom yang bisa diisi secara massal
    protected $fillable = [
        'pertanyaan',
        'opsi_a',
        'opsi_b',
        'opsi_c',
        'opsi_d',
        'jawaban',
        'id_komik',
    ];
}
