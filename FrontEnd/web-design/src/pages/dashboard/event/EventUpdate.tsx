import { useEffect, useState } from "react";
import { z } from "zod";
import { InputText } from "../../../ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";

type Category = {
  id: number;
  name: string;
};

type Pembicara = {
  id: number;
  name: string;
  role: string;
};

type FormData = {
  title: string;
  description: string;
  location: string;
  dateEvent: string;
  categoryId: string;
  pembicaraId: string;
};

const schema = z.object({
  title: z.string().min(1, "Judul event harus diisi"),
  description: z.string().min(1, "Deskripsi harus diisi"),
  location: z.string().min(1, "Lokasi harus diisi"),
  dateEvent: z.string().min(1, "Tanggal event harus diisi"),
  categoryId: z.string().min(1, "Kategori harus dipilih"),
  pembicaraId: z.string().min(1, "Pembicara harus dipilih"),
});

export default function EventUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const getCategories = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/category`);
    const result = await response.json();
    setCategories(Array.isArray(result.data) ? result.data : []);
  };

  const getPembicara = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/pembicara`);
    const result = await response.json();
    setPembicara(Array.isArray(result.data) ? result.data : []);
  };

  const getEventById = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/event/${id}`);
    const result = await response.json();
    const event = result.data;

    setValue("title", event.title);
    setValue("description", event.description);
    setValue("location", event.location);
    setValue("dateEvent", event.dateEvent?.slice(0, 10));
    setValue("categoryId", String(event.categoryId));
    setValue("pembicaraId", String(event.pembicaraId));
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/event/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          location: data.location,
          dateEvent: data.dateEvent,
          categoryId: Number(data.categoryId),
          pembicaraId: Number(data.pembicaraId),
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal update event");
      }

      alert("Event berhasil diupdate");
      navigate("/dashboard/event");
    } catch (error) {
      console.error(error);
      alert("Event gagal diupdate");
    }
  };

  useEffect(() => {
    getCategories();
    getPembicara();
    getEventById();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
          Edit Event
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputText label="Event Title" nama="title" register={register} error={errors.title?.message} />
          <InputText label="Description" nama="description" register={register} error={errors.description?.message} />
          <InputText label="Location" nama="location" register={register} error={errors.location?.message} />
          <InputText label="Event Date" nama="dateEvent" type="date" register={register} error={errors.dateEvent?.message} />

          <select {...register("categoryId")} className="border p-3 rounded-xl">
            <option value="">Pilih Category</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>

          <select {...register("pembicaraId")} className="border p-3 rounded-xl">
            <option value="">Pilih Pembicara</option>
            {pembicara.map((item) => (
              <option key={item.id} value={item.id}>{item.name} - {item.role}</option>
            ))}
          </select>

          <Button type="submit" label="Update Event" />
        </form>
      </div>
    </div>
  );
}