export default function Biodata() {
  return (
    <div className="p-8 w-full min-h-[85vh] flex items-start justify-center pt-10">
      {/* Card Container Utama */}
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#e0d6c8]">
        
        {/* Header Banner - Menggunakan warna merah marun dari referensi gambar */}
        <div className="h-36 bg-[#651624] relative">
           {/* Opsional: Efek pattern atau background transparan bisa ditaruh di sini nanti */}
        </div>

        {/* Bagian Konten */}
        <div className="px-8 pb-12 sm:px-12 relative">
          
          {/* Bagian Avatar & Badge Status */}
          <div className="relative flex justify-between items-end -mt-16 mb-8">
            <div className="relative z-10 p-1.5 bg-white rounded-full shadow-md">
              {/* Ganti src ini dengan path fotomu jika sudah ada (misal: src="/fotoku.jpg") */}
              <img
                src="data:image/jpeg;base64,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"
                alt="Profile Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-white object-top"
              />
            </div>
            <div className="mb-4 text-right">
              <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                Mahasiswa Aktif
              </span>
            </div>
          </div>

          {/* Judul Halaman */}
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-[#3e2f1c] mb-2 tracking-tight">
              Biodata Mahasiswa
            </h2>
            <p className="text-gray-500 font-medium">
              Informasi akademik dan profil singkat mahasiswa.
            </p>
          </div>

          {/* Grid Data Mahasiswa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            
            {/* Field: Nama */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Nama Lengkap
              </p>
              <p className="text-xl font-semibold text-gray-800">
                Mustofa Achmad
              </p>
            </div>

            {/* Field: NIM */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Nomor Induk Mahasiswa
              </p>
              <p className="text-xl font-semibold text-gray-800">
                24090102
              </p>
            </div>

            {/* Field: Kelas */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Program Studi / Kelas
              </p>
              <p className="text-xl font-semibold text-gray-800">
                Teknik Informatika - TI 4C
              </p>
            </div>

            {/* Field: Mata Kuliah */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Mata Kuliah
              </p>
              <p className="text-xl font-semibold text-gray-800">
                Pemrograman Web 2
              </p>
            </div>

            {/* Field Tambahan: Institusi (Lebar penuh / Col-span-2) */}
            <div className="space-y-1.5 md:col-span-2 pt-6 border-t border-gray-100 mt-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Institusi Pendidikan
              </p>
              <p className="text-xl font-semibold text-gray-800">
                Politeknik Harapan Bersama
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}