<?php

namespace App\Http\Controllers;

use App\Models\HeroProduk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class HeroProdukController extends Controller
{
    public function index()
    {
        $heroes = HeroProduk::all();
        return Inertia::render('Admin/Produk/Hero/HeroProduk', [
            'heroes' => $heroes
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Produk/Hero/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'gambar' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if (HeroProduk::count() >= 5) {
            return back()->with('error', 'Maksimal 5 gambar hero diperbolehkan.');
        }

        $gambar = $request->file('gambar');
        $gambarName = time() . '_' . $gambar->getClientOriginalName();
        $gambarDir = 'uploads/hero';
        $gambar->move(public_path($gambarDir), $gambarName);
        $gambarPath = "$gambarDir/$gambarName";

        HeroProduk::create([
            'gambar' => $gambarPath
        ]);

        return redirect()->route('produk.hero')->with('success', 'Hero berhasil ditambahkan.');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'gambar' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $hero = HeroProduk::findOrFail($id);

        // Hapus gambar lama jika ada
        if ($hero->gambar && File::exists(public_path($hero->gambar))) {
            File::delete(public_path($hero->gambar));
        }

        // Upload gambar baru
        $gambar = $request->file('gambar');
        $gambarName = time() . '_' . $gambar->getClientOriginalName();
        $gambarDir = 'uploads/hero';
        $gambar->move(public_path($gambarDir), $gambarName);
        $gambarPath = "$gambarDir/$gambarName";

        $hero->update(['gambar' => $gambarPath]);

        return redirect()->route('produk.hero')->with('success', 'Hero berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $hero = HeroProduk::findOrFail($id);

        // Hapus gambar dari folder jika ada
        if ($hero->gambar && File::exists(public_path($hero->gambar))) {
            File::delete(public_path($hero->gambar));
        }

        $hero->delete();

        return redirect()->route('produk.hero')->with('success', 'Hero berhasil dihapus.');
    }
}
