<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\HeroProduk;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class ProdukController extends Controller
{

    public function produkGuest(): Response
{
    $heroImages = HeroProduk::all();
    return Inertia::render('Guest/Produk/Index', [
        'heroImages' => $heroImages,
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

    // Menyimpan data komik yang baru ditambahkan
    public function store(Request $request)
    {
        // Validasi input
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'kategori' => 'required|string|max:100',
            'harga' => 'required|numeric|min:0',
            'linkproduk' => 'nullable|url',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // max 2MB
        ]);

        // Upload file gambar
        $gambarPath = $request->file('gambar')->store('produk/gambar', 'public');

        // Simpan data produk ke database
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



    // Menampilkan halaman form edit untuk mengubah komik
    public function edit($id_produk)
    {
        $produk = Produk::findOrFail($id_produk);
        return Inertia::render('Admin/Produk/Edit', ['produk' => $produk]);
    }

    public function update(Request $request, $id_produk)
    {
        // Validasi data yang dikirim
        $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'kategori' => 'required|string|max:100',
            'harga' => 'required|numeric|min:0',
            'linkproduk' => 'nullable|url',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Ambil data produk berdasarkan id
        $produk = Produk::findOrFail($id_produk);

        // Ambil data dari request kecuali file
        $data = $request->only(['nama', 'deskripsi', 'kategori', 'harga', 'linkproduk']);

        // Jika ada file gambar baru diupload
        if ($request->hasFile('gambar')) {
            $data['gambar'] = $request->file('gambar')->store('produk/gambar', 'public');
        }

        // Update produk
        $produk->update($data);

        return redirect()->route('produk.admin')->with('success', 'Produk berhasil diperbarui.');
    }


    // Menghapus data komik
    public function destroy($id_produk)
    {
        // Mencari komik berdasarkan id_komik
        $produk = Produk::findOrFail($id_produk);

        // Menghapus komik dari database
        $produk->delete();

        // Redirect ke halaman index setelah berhasil menghapus
        return redirect()->route('produk.admin')->with('success', 'Produk berhasil dihapus.');
    }
}
