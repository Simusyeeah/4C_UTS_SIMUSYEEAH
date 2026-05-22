import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Pembicara = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export default function PembicaraIndex() {
  const [pembicaraList, setPembicaraList] = useState<Pembicara[]>([]);

  const fetchPembicara = async () => {
    const response = await fetch("VITE_API_URL=https://4-c-uts-simusyeeah.vercel.app/pembicara");
    const result = await response.json();

    setPembicaraList(Array.isArray(result.data) ? result.data : []);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus pembicara ini?")) return;

    await fetch(`VITE_API_URL=https://4-c-uts-simusyeeah.vercel.app/pembicara/${id}`, {
      method: "DELETE",
    });

    alert("Pembicara berhasil dihapus");
    fetchPembicara();
  };

  useEffect(() => {
    fetchPembicara();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Pembicara</h1>

      <p className="text-gray-500 mb-6">Daftar Pembicara Biromus</p>

      <Link
        to="/dashboard/pembicara/create"
        className="inline-block mb-6 bg-fuchsia-600 text-white rounded-xl px-5 py-2"
      >
        + Create New
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pembicaraList.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl shadow-md p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />

            <h2 className="text-xl font-semibold">{item.name}</h2>

            <p className="text-gray-500">{item.role}</p>

            <div className="flex justify-end gap-3 mt-6">
              <Link
                to={`/dashboard/pembicara/update/${item.id}`}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(item.id)}
                className="px-5 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700"
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