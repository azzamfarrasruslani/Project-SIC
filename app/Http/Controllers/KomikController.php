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

    public function showGuest($id_komik)
    {
        $komik = Komik::with('gambarKomik')->findOrFail($id_komik);
        return Inertia::render('Guest/Komik/Show', ['komik' => $komik]);
    }

    public function komikAdmin()
    {
        $komik = Komik::with('gambarKomik')->get();
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

        // Upload thumbnail ke public/uploads/thumbnails
        $thumbnail = $request->file('thumbnail');
        $thumbnailName = time() . '_' . $thumbnail->getClientOriginalName();
        $thumbnail->move(public_path('uploads/thumbnails'), $thumbnailName);
        $thumbnailPath = 'uploads/thumbnails/' . $thumbnailName;

        // Simpan data komik
        $komik = Komik::create([
            'judul' => $validated['judul'],
            'deskripsi' => $validated['deskripsi'],
            'thumbnail' => $thumbnailPath,
            'pengarang' => $validated['pengarang'],
        ]);

        // Upload dan simpan gambar panel komik
        foreach ($request->file('gambar') as $index => $file) {
            $gambarName = time() . '_' . $file->getClientOriginalName();
            $destination = 'uploads/komik/' . $komik->id_komik;
            $file->move(public_path($destination), $gambarName);

            GambarKomik::create([
                'id_komik' => $komik->id_komik,
                'gambar' => $destination . '/' . $gambarName,
                'urutan' => $index + 1,
            ]);
        }

        return redirect()->route('komik.admin')->with('success', 'Komik berhasil ditambahkan.');
    }

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

        // Jika ada thumbnail baru
        if ($request->hasFile('thumbnail')) {
            $thumb = $request->file('thumbnail');
            $thumbName = time() . '_' . $thumb->getClientOriginalName();
            $thumb->move(public_path('uploads/thumbnails'), $thumbName);
            $data['thumbnail'] = 'uploads/thumbnails/' . $thumbName;
        }

        $komik->update($data);

        // Jika ada gambar baru
        if ($request->hasFile('gambar')) {
            foreach ($request->file('gambar') as $index => $file) {
                $gambarName = time() . '_' . $file->getClientOriginalName();
                $destination = 'uploads/komik/' . $komik->id_komik;
                $file->move(public_path($destination), $gambarName);

                GambarKomik::create([
                    'id_komik' => $komik->id_komik,
                    'gambar' => $destination . '/' . $gambarName,
                    'urutan' => $komik->gambarKomik()->count() + $index + 1,
                ]);
            }
        }

        return redirect()->route('komik.admin')->with('success', 'Komik berhasil diperbarui.');
    }

    public function destroy($id_komik)
    {
        $komik = Komik::findOrFail($id_komik);
        $komik->delete();
        return redirect()->route('komik.admin')->with('success', 'Komik berhasil dihapus.');
    }
}
