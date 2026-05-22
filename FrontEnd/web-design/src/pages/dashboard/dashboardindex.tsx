import { Link } from "react-router-dom";

export default function DashboardIndex() {
    return (
        <div className="p-6">
            <div className="bg-gradient-to-r from-[#8b1e3f] to-[#c79a4b] text-white rounded-3xl p-8 shadow-xl mb-8">
                <h1 className="text-4xl font-extrabold">Selamat Datang 👋</h1>
                <p className="mt-3 text-white/90">
                    Kelola data paket, pembicara, event, dan biodata Biromus dengan mudah.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-3xl p-6 shadow hover:shadow-xl transition">
                    <p className="text-gray-500">Total Category</p>
                    <h2 className="text-4xl font-bold text-[#8b1e3f] mt-2">5</h2>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow hover:shadow-xl transition">
                    <p className="text-gray-500">Total Pembicara</p>
                    <h2 className="text-4xl font-bold text-[#8b1e3f] mt-2">4</h2>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow hover:shadow-xl transition">
                    <p className="text-gray-500">Total Event</p>
                    <h2 className="text-4xl font-bold text-[#8b1e3f] mt-2">3</h2>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Link
                    to="/dashboard/category/create"
                    className="bg-[#fff] border border-[#f1d6d6] rounded-3xl p-6 shadow hover:-translate-y-1 hover:shadow-xl transition"
                >
                    <h3 className="text-xl font-bold text-[#8b1e3f]">Tambah Category</h3>
                    <p className="text-gray-500 mt-2">Buat kategori paket baru.</p>
                </Link>

                <Link
                    to="/dashboard/pembicara/create"
                    className="bg-[#fff] border border-[#f1d6d6] rounded-3xl p-6 shadow hover:-translate-y-1 hover:shadow-xl transition"
                >
                    <h3 className="text-xl font-bold text-[#8b1e3f]">Tambah Pembicara</h3>
                    <p className="text-gray-500 mt-2">Input data pembicara baru.</p>
                </Link>

                <Link
                    to="/dashboard/event/create"
                    className="bg-[#fff] border border-[#f1d6d6] rounded-3xl p-6 shadow hover:-translate-y-1 hover:shadow-xl transition"
                >
                    <h3 className="text-xl font-bold text-[#8b1e3f]">Tambah Event</h3>
                    <p className="text-gray-500 mt-2">Buat event terbaru.</p>
                </Link>
            </div>
        </div>
    );
}