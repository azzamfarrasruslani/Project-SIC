<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    public function artikelGuest()
    {
        return Inertia::render('Guest/Artikel/Index');
    }

    public function artikelAdmin()
    {
        return Inertia::render('Admin/Artikel/Index');
    }

    public function create()
    {
        return Inertia::render('Artikel/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);

        $gambarPath = null;
        if ($request->hasFile('gambar')) {
            $gambarPath = $request->file('gambar')->store('artikels', 'public');
        }

        Artikel::create([
            'judul' => $validated['judul'],
            'deskripsi' => $validated['deskripsi'],
            'gambar' => $gambarPath,
        ]);

        return redirect()->route('artikel-admin.index')->with('success', 'Artikel berhasil ditambahkan.');
    }

    public function edit($id_artikel)
    {
        $artikel = Artikel::findOrFail($id_artikel);
        return Inertia::render('Artikel/Edit', ['artikel' => $artikel]);
    }

    public function update(Request $request, $id_artikel)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);

        $artikel = Artikel::findOrFail($id_artikel);

        $data = $request->only(['judul', 'deskripsi']);

        if ($request->hasFile('gambar')) {
            $data['gambar'] = $request->file('gambar')->store('artikels', 'public');
        }

        $artikel->update($data);

        return redirect()->route('artikel-admin.index')->with('success', 'Artikel berhasil diperbarui.');
    }

    public function destroy($id_artikel)
    {
        $artikel = Artikel::findOrFail($id_artikel);
        $artikel->delete();

        return redirect()->route('artikel-admin.index')->with('success', 'Artikel berhasil dihapus.');
    }
}
