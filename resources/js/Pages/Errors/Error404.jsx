export default function Error404() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-700">404</h1>
                <p className="text-xl text-gray-500 mt-4">Halaman tidak ditemukan</p>
                <a href="/" className="mt-6 inline-block text-blue-500 hover:underline">Kembali ke Beranda</a>
            </div>
        </div>
    );
}
