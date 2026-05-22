import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Event = {
    id: number;
    title: string;
    description: string;
    location: string;
    dateEvent: string;
};

export default function EventIndex() {
    const [events, setEvents] = useState<Event[]>([]);

    const getEvents = async () => {
        try {
            const response = await fetch("VITE_API_URL=https://4-c-uts-simusyeeah.vercel.app/event");
            const result = await response.json();

            console.log("HASIL EVENT:", result);

            setEvents(Array.isArray(result.data) ? result.data : []);
        } catch (error) {
            console.error(error);
            setEvents([]);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm("Yakin ingin menghapus event ini?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`VITE_API_URL=https://4-c-uts-simusyeeah.vercel.app/event/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Gagal menghapus event");
            }

            alert("Event berhasil dihapus");
            getEvents();
        } catch (error) {
            console.error(error);
            alert("Event gagal dihapus");
        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-4xl font-bold">Event</h1>
                    <p className="text-gray-500 mt-2">
                        Kelola data event Invofest di sini
                    </p>
                </div>

                <Link
                    to="/dashboard/event/create"
                    className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600"
                >
                    Tambah Event
                </Link>
            </div>

            {events.length === 0 ? (
                <p className="text-center text-gray-400 mt-10">
                    Belum ada data event
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {events.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-2xl shadow-md p-5 bg-white"
                        >
                            <h2 className="text-2xl font-bold mb-2">
                                {item.title}
                            </h2>

                            <p className="text-gray-600 mb-2">
                                {item.description}
                            </p>

                            <p className="text-gray-500 mb-2">
                                Lokasi: {item.location}
                            </p>

                            <p className="text-gray-500">
                                Tanggal: {item.dateEvent?.slice(0, 10)}
                            </p>

                            <div className="flex justify-end gap-3 mt-6">
                                <Link
                                    to={`/dashboard/event/update/${item.id}`}
                                    className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                                >
                                    Edit
                                </Link>

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}