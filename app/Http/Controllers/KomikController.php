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

        $komik = Komik::all();

        return Inertia::render('Admin/Komik/Index', [
            'komik' => $komik,
        ]);
    }


    public function create()
    {
        return Inertia::render('Admin/Komik/Create');
    }

    // Menyimpan data komik yang baru ditambahkan
    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required',
            'thumbnail' => 'required|image|mimes:jpg,jpeg,png,gif|max:2048',
            'gambar' => 'required|image|mimes:jpg,jpeg,png,gif|max:2048',
            'pengarang' => 'required|string|max:255',
        ]);

        // Upload file thumbnail
        $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 'public');
        // Upload file gambar
        $gambarPath = $request->file('gambar')->store('gambar', 'public');

        // Simpan data komik ke database
        Komik::create([
            'judul' => $validated['judul'],
            'deskripsi' => $validated['deskripsi'],
            'thumbnail' => $thumbnailPath,
            'gambar' => $gambarPath,
            'pengarang' => $validated['pengarang'],
        ]);


        return redirect()->route('komik.admin')->with('success', 'Komik berhasil ditambahkan.');
    }


    // Menampilkan halaman form edit untuk mengubah komik
    public function edit($id_komik)
    {
        $komik = Komik::findOrFail($id_komik);
        return Inertia::render('KomikAdmin/Edit', ['komik' => $komik]);
    }

    public function update(Request $request, $id_komik)
    {
        $request->validate([
            'judul' => 'required',
            'deskripsi' => 'required',
            'pengarang' => 'required',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $komik = Komik::findOrFail($id_komik);

        $data = $request->only(['judul', 'deskripsi', 'pengarang']);

        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')->store('thumbnails', 'public');
        }

        if ($request->hasFile('gambar')) {
            $data['gambar'] = $request->file('gambar')->store('gambars', 'public');
        }

        $komik->update($data);

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
