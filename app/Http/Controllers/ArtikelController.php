<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    public function artikelGuest()
    {
        $artikels = Artikel::where('status', 'publish')->latest()->get();
        return Inertia::render('Guest/Artikel/Index', [
            'artikels' => $artikels,
        ]);
    }

    public function artikelAdmin()
    {
        $artikels = Artikel::latest()->get();
        return Inertia::render('Admin/Artikel/Index', [
            'artikels' => $artikels,
        ]);
    }

    public function show($id)
    {
        $artikel = Artikel::findOrFail($id);

        return Inertia::render('Guest/Artikel/Show', [
            'artikel' => $artikel
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Artikel/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            'penulis' => 'nullable|string|max:100',
            'status' => 'required|in:draft,publish',
            'kategori' => 'nullable|string|max:100',
        ]);

        // Simpan gambar jika ada
        $gambarPath = null;
        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            $namaFile = time() . '_' . $file->getClientOriginalName();
            $tujuan = 'uploads/artikels';
            $file->move(public_path($tujuan), $namaFile);
            $gambarPath = "$tujuan/$namaFile";
        }

        Artikel::create([
            'judul' => $validated['judul'],
            'slug' => Str::slug($validated['judul']),
            'isi' => $validated['isi'],
            'gambar' => $gambarPath,
            'penulis' => $validated['penulis'] ?? null,
            'status' => $validated['status'],
            'kategori' => $validated['kategori'] ?? null,
        ]);

        return redirect()->route('artikel.admin')->with('success', 'Artikel berhasil ditambahkan.');
    }

    public function edit($id_artikel)
    {
        $artikel = Artikel::findOrFail($id_artikel);
        return Inertia::render('Admin/Artikel/Edit', [
            'artikel' => $artikel,
        ]);
    }

    public function update(Request $request, $id_artikel)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            'penulis' => 'nullable|string|max:100',
            'status' => 'required|in:draft,publish',
            'kategori' => 'nullable|string|max:100',
        ]);

        $artikel = Artikel::findOrFail($id_artikel);

        $data = [
            'judul' => $validated['judul'],
            'slug' => Str::slug($validated['judul']),
            'isi' => $validated['isi'],
            'penulis' => $validated['penulis'] ?? null,
            'status' => $validated['status'],
            'kategori' => $validated['kategori'] ?? null,
        ];

        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            $namaFile = time() . '_' . $file->getClientOriginalName();
            $tujuan = 'uploads/artikels';
            $file->move(public_path($tujuan), $namaFile);
            $data['gambar'] = "$tujuan/$namaFile";
        }

        $artikel->update($data);

        return redirect()->route('artikel.admin')->with('success', 'Artikel berhasil diperbarui.');
    }

    public function destroy($id_artikel)
    {
        $artikel = Artikel::findOrFail($id_artikel);
        $artikel->delete();

        return redirect()->route('artikel.admin')->with('success', 'Artikel berhasil dihapus.');
    }
}
