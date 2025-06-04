<?php

namespace App\Http\Controllers;

use App\Models\Komik;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class KomikController extends Controller
{

     public function komikGuest()
    {
        return Inertia::render('Guest/Komik/Index');
    }

    public function komikAdmin()
    {
        return Inertia::render('Admin/Komik/Index');
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }
    public function show(Komik $komik)
    {
        //
    }


    public function edit(Komik $komik)
    {
        //
    }


    public function update(Request $request, Komik $komik)
    {
        //
    }

        public function destroy(Komik $komik)
    {
        //
    }
}
