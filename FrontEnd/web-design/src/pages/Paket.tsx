import Button from "../components/Button";
//import kabahImg from '../assets/kabah.png';

function Paket() {

  const paketList = [
    {
      title: "Umroh Reguler",
      price: "25 Juta",
      desc: "9 Hari, Hotel Bintang 3, Full Service",
      highlight: false
    },
    {
      title: "Umroh Plus Turki",
      price: "35 Juta",
      desc: "12 Hari + Wisata Turki",
      highlight: true
    },
    {
      title: "Umroh Ramadhan",
      price: "40 Juta",
      desc: "Program Spesial Ramadhan",
      highlight: false
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== HEADER SIMPLE (BEDA DARI BERANDA) ===== */}
      <div className="bg-red-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Paket Umroh</h1>
        <p className="mt-2">Pilih paket terbaik untuk perjalanan ibadah Anda</p>
      </div>

      {/* ===== LIST PAKET ===== */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">

        {paketList.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 relative 
              ${item.highlight ? "border-2 border-red-600 scale-105" : ""}`}
          >

            {/* Badge */}
            {item.highlight && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs px-3 py-1 rounded-bl-lg">
                BEST SELLER
              </span>
            )}

            <h2 className="text-2xl font-semibold text-red-800">
              {item.title}
            </h2>

            <p className="text-gray-600">{item.desc}</p>

            <h3 className="text-3xl font-bold text-red-600">
              Rp {item.price}
            </h3>

            <Button label="Ambil Paket" variant="primary" />
          </div>
        ))}

      </div>

      {/* ===== BANNER TAMBAHAN ===== */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-xl shadow-md p-8 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-red-800">
              Butuh Konsultasi?
            </h2>
            <p className="text-gray-600">
              Hubungi kami untuk mendapatkan paket terbaik sesuai kebutuhan Anda.
            </p>
          </div>

          <Button label="Hubungi Kami" variant="primary" />
        </div>
      </div>

    </div>
  );
}

export default Paket;