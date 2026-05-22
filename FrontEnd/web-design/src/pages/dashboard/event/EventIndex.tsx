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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/event`);
            const result = await response.json();

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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/event/${id}`, {
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
                    <p className="text-gray-500 mt-2">Kelola data event Biromus</p>
                </div>

                <Link
                    to="/dashboard/event/create"
                    className="px-6 py-3 bg-[#8b1e3f] text-white rounded-xl font-semibold"
                >
                    Tambah Event
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {events.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-2xl shadow">
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                        <p className="text-gray-500 mt-2">{item.description}</p>
                        <p className="text-gray-500 mt-2">Lokasi: {item.location}</p>
                        <p className="text-gray-500 mt-2">
                            Tanggal: {item.dateEvent?.slice(0, 10)}
                        </p>

                        <div className="flex gap-3 mt-5">
                            <Link
                                to={`/dashboard/event/update/${item.id}`}
                                className="px-4 py-2 bg-blue-600 text-white rounded-xl"
                            >
                                Edit
                            </Link>

                            <button
                                onClick={() => handleDelete(item.id)}
                                className="px-4 py-2 bg-red-600 text-white rounded-xl"
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