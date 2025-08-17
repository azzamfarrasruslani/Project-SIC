<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\HeroProduk;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\File;

class ProdukController extends Controller
{
    public function produkGuest(): Response
    {
        $heroImages = HeroProduk::all();
        $produk = Produk::all();

        return Inertia::render('Guest/Produk/Index', [
            'heroImages' => $heroImages,
            'produk' => $produk
        ]);
    }

    public function produkAdmin(): Response
    {
        $produk = Produk::all();
        return Inertia::render('Admin/Produk/Index', [
            'produk' => $produk
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Produk/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'kategori' => 'required|string|max:100',
            'harga' => 'required|numeric|min:0',
            'linkproduk' => 'nullable|url',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $gambar = $request->file('gambar');
        $gambarName = time() . '_' . $gambar->getClientOriginalName();
        $gambarDir = 'uploads/produk';
        $gambar->move(public_path($gambarDir), $gambarName);
        $gambarPath = "$gambarDir/$gambarName";

        Produk::create([
            'nama' => $validated['nama'],
            'deskripsi' => $validated['deskripsi'] ?? '',
            'kategori' => $validated['kategori'],
            'harga' => $validated['harga'],
            'linkproduk' => $validated['linkproduk'] ?? '',
            'gambar' => $gambarPath,
        ]);

        return redirect()->route('produk.admin')->with('success', 'Produk berhasil ditambahkan.');
    }

    public function edit($id_produk)
    {
        $produk = Produk::findOrFail($id_produk);
        return Inertia::render('Admin/Produk/Edit', ['produk' => $produk]);
    }

    public function update(Request $request, $id_produk)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'kategori' => 'required|string|max:100',
            'harga' => 'required|numeric|min:0',
            'linkproduk' => 'nullable|url',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $produk = Produk::findOrFail($id_produk);
        $data = $request->only(['nama', 'deskripsi', 'kategori', 'harga', 'linkproduk']);

        // Ganti gambar jika ada file baru
        if ($request->hasFile('gambar')) {
            // Hapus gambar lama dari folder public
            if ($produk->gambar && File::exists(public_path($produk->gambar))) {
                File::delete(public_path($produk->gambar));
            }

            $gambar = $request->file('gambar');
            $gambarName = time() . '_' . $gambar->getClientOriginalName();
            $gambarDir = 'uploads/produk';
            $gambar->move(public_path($gambarDir), $gambarName);
            $data['gambar'] = "$gambarDir/$gambarName";
        }

        $produk->update($data);

        return redirect()->route('produk.admin')->with('success', 'Produk berhasil diperbarui.');
    }

    public function destroy($id_produk)
    {
        $produk = Produk::findOrFail($id_produk);

        // Hapus gambar dari folder public jika ada
        if ($produk->gambar && File::exists(public_path($produk->gambar))) {
            File::delete(public_path($produk->gambar));
        }

        $produk->delete();

        return redirect()->route('produk.admin')->with('success', 'Produk berhasil dihapus.');
    }
}
