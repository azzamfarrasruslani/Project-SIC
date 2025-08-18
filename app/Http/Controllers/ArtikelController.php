<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    // Halaman untuk tamu (pengunjung)
    public function artikelGuest()
    {
        $artikels = Artikel::where('status', 'publish')->latest()->get();
        return Inertia::render('Guest/Artikel/Index', [
            'artikels' => $artikels,
        ]);
    }

    // Halaman admin
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


    // Form create
    public function create()
    {
        return Inertia::render('Admin/Artikel/Create');
    }

    // Simpan data baru
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
            $gambarPath = $request->file('gambar')->store('artikels', 'public');
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

    // Form edit
    public function edit($id_artikel)
    {
        $artikel = Artikel::findOrFail($id_artikel);
        return Inertia::render('Admin/Artikel/Edit', [
            'artikel' => $artikel,
        ]);
    }

    // Update data artikel
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
            $data['gambar'] = $request->file('gambar')->store('artikels', 'public');
        }

        $artikel->update($data);

        return redirect()->route('artikel.admin')->with('success', 'Artikel berhasil diperbarui.');
    }

    // Hapus artikel
    public function destroy($id_artikel)
    {
        $artikel = Artikel::findOrFail($id_artikel);
        $artikel->delete();

        return redirect()->route('artikel.admin')->with('success', 'Artikel berhasil dihapus.');
    }
}
