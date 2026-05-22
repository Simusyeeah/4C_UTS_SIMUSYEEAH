import Button from "../components/Button";

function Kontak() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== HEADER ===== */}
      <div className="bg-red-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Hubungi Kami</h1>
        <p className="mt-2">Silakan hubungi kami untuk konsultasi umroh</p>
      </div>

      {/* ===== FORM + INFO ===== */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="bg-white shadow-md rounded-xl p-8 grid md:grid-cols-2 gap-8">

          {/* ===== FORM ===== */}
          <form className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-red-700">
              Form Konsultasi
            </h2>

            <input
              type="text"
              placeholder="Nama Lengkap"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              type="text"
              placeholder="No. WhatsApp"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            {/* ✅ TEXTAREA FIX */}
            <textarea
              placeholder="Pesan Anda"
              rows={4}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>

            <Button label="Kirim Pesan" variant="primary" />
          </form>

          {/* ===== INFO KONTAK ===== */}
          <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-2xl font-semibold text-red-700">
              Info Kontak
            </h2>

            <p>📍 Alamat: Tegal, Jawa Tengah</p>
            <p>📞 Telepon: 0812-3456-7890</p>
            <p>📧 Email: umrohtravel@gmail.com</p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="Chat WhatsApp" variant="outline" />
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Kontak;