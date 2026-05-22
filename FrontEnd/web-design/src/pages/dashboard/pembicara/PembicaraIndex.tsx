import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Pembicara = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export default function PembicaraIndex() {
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);

  const getPembicara = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/pembicara`);
      const result = await response.json();

      setPembicara(Array.isArray(result.data) ? result.data : []);
    } catch (error) {
      console.error(error);
      setPembicara([]);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus pembicara ini?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/pembicara/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Gagal menghapus pembicara");
      }

      alert("Pembicara berhasil dihapus");
      getPembicara();
    } catch (error) {
      console.error(error);
      alert("Pembicara gagal dihapus");
    }
  };

  useEffect(() => {
    getPembicara();
  }, []);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Pembicara</h1>
        <p className="text-gray-500 mt-2">Daftar Pembicara Biromus</p>
      </div>

      <Link
        to="/dashboard/pembicara/create"
        className="inline-block px-6 py-3 mb-8 bg-[#8b1e3f] text-white rounded-xl font-semibold"
      >
        + Create New
      </Link>

      <div className="grid md:grid-cols-3 gap-8">
        {pembicara.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-2xl shadow-md p-5"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-xl"
            />

            <h2 className="text-2xl font-bold mt-5">{item.name}</h2>
            <p className="text-gray-500">{item.role}</p>

            <div className="flex justify-end gap-3 mt-6">
              <Link
                to={`/dashboard/pembicara/update/${item.id}`}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(item.id)}
                className="px-5 py-2 bg-red-600 text-white rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}