<?php

namespace App\Http\Controllers;

use App\Models\HeroProduk;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

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

        $path = $request->file('gambar')->store('hero_produk', 'public');

        HeroProduk::create([
            'gambar' => $path
        ]);

        return redirect()->route('produk.hero')->with('success', 'Hero berhasil ditambahkan.');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'gambar' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $hero = HeroProduk::findOrFail($id);

        if ($hero->gambar && Storage::disk('public')->exists($hero->gambar)) {
            Storage::disk('public')->delete($hero->gambar);
        }

        $path = $request->file('gambar')->store('hero_produk', 'public');

        $hero->update(['gambar' => $path]);

        return redirect()->route('produk.hero')->with('success', 'Hero berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $hero = HeroProduk::findOrFail($id);

        if ($hero->gambar && Storage::disk('public')->exists($hero->gambar)) {
            Storage::disk('public')->delete($hero->gambar);
        }

        $hero->delete();

        return redirect()->route('produk.hero')->with('success', 'Hero berhasil dihapus.');
    }
}
