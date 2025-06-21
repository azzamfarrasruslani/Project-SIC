<?php

namespace App\Http\Controllers;

use App\Models\Komik;
use App\Models\GambarKomik;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class KomikController extends Controller
{

    public function komikGuest()
    {
        $komik = Komik::with('gambarKomik')->get();
        return Inertia::render('Guest/Komik/Index', [
            'komik' => $komik,
        ]);
    }

    public function komikAdmin()
    {
        $komik = Komik::with('gambarKomik')->get(); // penting
        return Inertia::render('Admin/Komik/Index', [
            'komik' => $komik,
        ]);
    }



    public function create()
    {
        return Inertia::render('Admin/Komik/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required',
            'thumbnail' => 'required|image|mimes:jpg,jpeg,png,gif|max:5120',
            'gambar.*' => 'required|image|mimes:jpg,jpeg,png,gif|max:5120',
            'pengarang' => 'required|string|max:255',
        ]);

        $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 'public');

        // Simpan komik dulu
        $komik = Komik::create([
            'judul' => $validated['judul'],
            'deskripsi' => $validated['deskripsi'],
            'thumbnail' => $thumbnailPath,
            'pengarang' => $validated['pengarang'],
        ]);

        // Simpan semua gambar panel komik
        foreach ($request->file('gambar') as $index => $file) {
            $path = $file->store("komik/{$komik->id_komik}", 'public'); // ganti id → id_komik
            GambarKomik::create([
                'id_komik' => $komik->id_komik, // ganti id → id_komik
                'gambar' => $path,
                'urutan' => $index + 1,
            ]);
        }

        return redirect()->route('komik.admin')->with('success', 'Komik berhasil ditambahkan.');
    }



    // Menampilkan halaman form edit untuk mengubah komik
    public function edit($id_komik)
    {
        $komik = Komik::findOrFail($id_komik);
        return Inertia::render('Admin/Komik/Edit', ['komik' => $komik]);
    }

    public function update(Request $request, $id_komik)
    {
        $request->validate([
            'judul' => 'required',
            'deskripsi' => 'required',
            'pengarang' => 'required',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg|max:5120',
            'gambar.*' => 'nullable|image|mimes:jpeg,png,jpg|max:5120',
        ]);

        $komik = Komik::findOrFail($id_komik);

        $data = $request->only(['judul', 'deskripsi', 'pengarang']);

        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')->store('thumbnails', 'public');
        }

        $komik->update($data);

        // Jika user upload gambar baru, tambahkan sebagai panel baru
        if ($request->hasFile('gambar')) {
            foreach ($request->file('gambar') as $index => $file) {
                $path = $file->store("komik/{$komik->id_komik}", 'public'); // ganti id → id_komik
                GambarKomik::create([
                    'id_komik' => $komik->id_komik, // ganti id → id_komik
                    'gambar' => $path,
                    'urutan' => $komik->gambarKomik()->count() + $index + 1,
                ]);
            }
        }

        return redirect()->route('komik.admin')->with('success', 'Komik berhasil diperbarui.');
    }


    // Menghapus data komik
    public function destroy($id_komik)
    {
        // Mencari komik berdasarkan id_komik
        $komik = Komik::findOrFail($id_komik);

        // Menghapus komik dari database
        $komik->delete();

        // Redirect ke halaman index setelah berhasil menghapus
        return redirect()->route('komik.admin')->with('success', 'Komik berhasil dihapus.');
    }
}
