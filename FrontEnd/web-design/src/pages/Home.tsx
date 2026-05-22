import Button from "../components/Button";
import { Collapse } from '../ui/Collapse';
import kabahImg from '../assets/kabah.png';
import pemmus from '../assets/pemmus.jpeg';
import pemto from '../assets/pemto.jpeg';
import CardProduct from '../components/CardProduct';
import SpeakerCard from '../ui/SpeakerCard';
import useInView from '../hooks/useInView';

function App() {
  const [kabah, heroShow] = useInView();
  const [aboutRef, aboutShow] = useInView();
  const [speakerRef, speakerShow] = useInView();

  // 🔥 DATA PEMBIMBING
  const speakers = [
    {
      name: "HABIB MARTIEN",
      role: "Owner & Pembimbing Umroh",
      imageUrl: pemmus,
    },
    {
      name: "GUS MAMA GHUFRON",
      role: "Pembimbing Umroh",
      imageUrl: "https://terasmedia.net/wp-content/uploads/2024/06/ryfhk.jpg",
    },
    {
      name: "HABIB TITO",
      role: "Pembimbing Umroh",
      imageUrl: pemto,
    },
  ];

  // 🔥 FAQ UMROH
  const collapseItems = [
    {
      title: "Apa saja syarat untuk umroh?",
      description:
        "Syarat umroh meliputi paspor yang masih berlaku, visa umroh, vaksin, dan dokumen pendukung lainnya.",
    },
    {
      title: "Berapa lama perjalanan umroh?",
      description:
        "Durasi umroh biasanya 9–12 hari tergantung paket yang dipilih.",
    },
    {
      title: "Apakah ada pembimbing selama ibadah?",
      description:
        "Ya, setiap jamaah akan didampingi oleh pembimbing berpengalaman.",
    },
  ];

  return (
    <div>

      {/* ================= HERO ================= */}
      <section ref={kabah} className="bg-white relative overflow-hidden pt-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">

            {/* KIRI */}
            <div className="flex flex-col gap-6 max-w-xl">

              <div className={`reveal ${heroShow ? "show animate-left" : ""}`}>
                <img src={kabahImg} alt="kaba" className="w-60" />
              </div>

              <p className={`text-2xl reveal ${heroShow ? "show animate-left" : ""}`}>
                Jasa Biro Umroh Terpercaya & Profesional. Kami siap membantu Anda 
                mewujudkan perjalanan ibadah ke Tanah Suci dengan nyaman, aman, 
                dan sesuai sunnah.
              </p>

              <div className={`flex gap-4 ${heroShow ? "show animate-up" : ""}`}>
                <Button label ="Lihat Paket" variant="primary" />
                <Button title="Konsultasi Gratis" variant="outline" />
              </div>
            </div>

            {/* KANAN */}
            <div className={`w-1/2 flex justify-center ${heroShow ? "show animate-right" : ""}`}>
              <img src={kabahImg} alt="maskot" className="w-[400px]" />
            </div>

          </div>
        </div>
      </section>

      {/* ================= TENTANG ================= */}
      <section ref={aboutRef} className="bg-red-50 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-semibold text-4xl text-red-700">
            Tentang Kami
          </h1>

          <p className="text-gray-700 mt-5">
            Kami adalah biro perjalanan umroh yang berpengalaman dalam melayani 
            jamaah dengan fasilitas terbaik, pembimbing profesional, dan pelayanan 
            yang amanah untuk perjalanan ibadah Anda.
          </p>
        </div>

        {/* LAYANAN */}
        <div className="flex justify-center gap-6 mt-12 flex-wrap">

          {[
            {
              title: 'Paket Umroh',
              desc: 'Berbagai pilihan paket umroh reguler, plus, dan VIP dengan harga terbaik.'
            },
            {
              title: 'Hotel Nyaman',
              desc: 'Akomodasi hotel dekat Masjidil Haram & Nabawi.'
            },
            {
              title: 'Pembimbing Ibadah',
              desc: 'Didampingi ustadz berpengalaman selama ibadah.'
            },
            {
              title: 'Transportasi & Visa',
              desc: 'Pengurusan visa dan transportasi full selama perjalanan.'
            },
          ].map((item, i) => (
            <div key={i} className={`${aboutShow ? "animate-up" : ""}`}>
              <CardProduct title={item.title} description={item.desc}>
                <Button label="Detail" variant="primary" />
              </CardProduct>
            </div>
          ))}

        </div>
      </section>

      {/* ================= PEMBIMBING ================= */}
      <section ref={speakerRef} className="py-20">
        <h2 className="text-center text-3xl font-semibold mb-10">
          Pembimbing Umroh
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {speakers.map((speaker, index) => (
            <div key={index} className={`${speakerShow ? "animate-up" : ""}`}>
              <SpeakerCard
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Pertanyaan Umum
        </h2>

        {collapseItems.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>

    </div>
  );
}

export default App;