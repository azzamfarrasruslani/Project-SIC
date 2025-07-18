<?php

namespace App\Http\Controllers;

use App\Models\Komik;
use App\Models\GambarKomik;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;



class KomikController extends Controller
{

    public function komikGuest()
    {
        $komik = Komik::with('gambarKomik')->get();
        return Inertia::render('Guest/Komik/Index', [
            'komik' => $komik,
        ]);
    }

    public function showGuest($id_komik)
    {
        $komik = Komik::with('gambarKomik')->findOrFail($id_komik);
        return Inertia::render('Guest/Komik/Show', ['komik' => $komik]);
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

        // Buat folder jika belum ada
        if (!file_exists(public_path('storage/thumbnails'))) {
            mkdir(public_path('storage/thumbnails'), 0755, true);
        }

        $thumbnailName = Str::random(20) . '.' . $request->file('thumbnail')->getClientOriginalExtension();
        $request->file('thumbnail')->move(public_path('storage/thumbnails'), $thumbnailName);

        $komik = Komik::create([
            'judul' => $validated['judul'],
            'deskripsi' => $validated['deskripsi'],
            'thumbnail' => "thumbnails/$thumbnailName",
            'pengarang' => $validated['pengarang'],
        ]);

        // Upload gambar panel
        foreach ($request->file('gambar') as $index => $file) {
            $gambarName = Str::random(20) . '.' . $file->getClientOriginalExtension();

            $dir = public_path("storage/komik/{$komik->id_komik}");
            if (!file_exists($dir)) {
                mkdir($dir, 0755, true);
            }

            $file->move($dir, $gambarName);

            GambarKomik::create([
                'id_komik' => $komik->id_komik,
                'gambar' => "komik/{$komik->id_komik}/$gambarName",
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

    public function update(Request $request, $id)
    {
        $komik = Komik::findOrFail($id);

        $request->validate([
            'judul' => 'required|string|max:255',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'gambar.*' => 'nullable|image|mimes:jpeg,png,jpg|max:4096',
        ]);

        $data = [
            'judul' => $request->judul,
        ];

        if ($request->hasFile('thumbnail')) {
            $thumbnailName = Str::random(20) . '.' . $request->file('thumbnail')->getClientOriginalExtension();
            $request->file('thumbnail')->move(public_path('storage/thumbnails'), $thumbnailName);
            $data['thumbnail'] = "thumbnails/$thumbnailName";
        }

        $komik->update($data);

        if ($request->hasFile('gambar')) {
            foreach ($request->file('gambar') as $index => $file) {
                $gambarName = Str::random(20) . '.' . $file->getClientOriginalExtension();
                $dir = public_path("storage/komik/{$komik->id_komik}");

                if (!file_exists($dir)) {
                    mkdir($dir, 0755, true);
                }

                $file->move($dir, $gambarName);

                GambarKomik::create([
                    'id_komik' => $komik->id_komik,
                    'gambar' => "komik/{$komik->id_komik}/$gambarName",
                    'urutan' => $komik->gambarKomik()->count() + $index + 1,
                ]);
            }
        }

        return redirect()->route('komik.index')->with('success', 'Komik berhasil diperbarui');
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
