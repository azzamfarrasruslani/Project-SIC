<?php

namespace App\Http\Controllers;

use App\Models\Kuis;
use Inertia\Inertia;
use App\Models\Komik;
use Illuminate\Http\Request;

class KuisController extends Controller
{

    public function kuisGuest()
    {
        $kuis = Kuis::all();
        return Inertia::render('Guest/Kuis/Index', [
            'kuis' => $kuis,
        ]);
    }

    public function kuisAdmin()
    {
        $kuis = Kuis::all();
        return Inertia::render('Admin/Kuis/Index', [
            'kuis' => $kuis,
        ]);
    }


    public function create()
    {
        // Ambil data komik dari database
        $komiks = Komik::all();  // Ambil semua komik dari database

        // Kirimkan komik ke view
        return inertia('Kuis/Create', [
            'komiks' => $komiks,
        ]);
    }



    public function store(Request $request)
    {
        $request->validate([
            'id_komik' => 'required|exists:komiks,id_komik',
            'pertanyaan' => 'required|string|max:255',
            'opsi_a' => 'required|string|max:255',
            'opsi_b' => 'required|string|max:255',
            'opsi_c' => 'required|string|max:255',
            'opsi_d' => 'required|string|max:255',
            'jawaban' => 'required|string|max:255',
        ]);

        // Simpan kuis
        Kuis::create([
            'id_komik' => $request->id_komik,
            'pertanyaan' => $request->pertanyaan,
            'opsi_a' => $request->opsi_a,
            'opsi_b' => $request->opsi_b,
            'opsi_c' => $request->opsi_c,
            'opsi_d' => $request->opsi_d,
            'jawaban' => $request->jawaban,
        ]);

        return redirect()->route('kuis.index');
    }




    public function edit($id)
    {
        $kuis = Kuis::findOrFail($id);
        return Inertia::render('Kuis/Edit', [
            'kuis' => $kuis
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'pertanyaan' => 'required|string',
            'opsi_a' => 'required|string',
            'opsi_b' => 'required|string',
            'opsi_c' => 'required|string',
            'opsi_d' => 'required|string',
            'jawaban' => 'required|in:a,b,c,d',
        ]);

        $kuis = Kuis::findOrFail($id);

        // Update kuis dengan data dari form
        $kuis->update($request->only([
            'pertanyaan',
            'opsi_a',
            'opsi_b',
            'opsi_c',
            'opsi_d',
            'jawaban'
        ]));

        return redirect()->route('kuis.index')->with('success', 'Kuis berhasil diperbarui');
    }


    public function destroy($id)
    {
        $kuis = Kuis::findOrFail($id);

        $kuis->delete();

        return redirect()->route('kuis.index')->with('success', 'Kuis berhasil dihapus');
    }


}
