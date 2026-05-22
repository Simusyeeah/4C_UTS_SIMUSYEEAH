import { useEffect, useState } from "react";
import { z } from "zod";
import { InputText } from "../../../ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

type Category = {
  id: number;
  name: string;
};

type Pembicara = {
  id: number;
  name: string;
  role: string;
  image: string;
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
  categoryId: z.string().min(1, "Kategori event harus dipilih"),
  pembicaraId: z.string().min(1, "Pembicara harus dipilih"),
});

export default function EventCreate() {

  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // GET CATEGORY
  const getCategories = async () => {

    try {

      const response = await fetch(
        "VITE_API_URL=https://4-c-uts-simusyeeah.vercel.app/category"
      );

      const result = await response.json();

      setCategories(
        Array.isArray(result.data)
          ? result.data
          : []
      );

    } catch (error) {

      console.log(error);

      setCategories([]);
    }
  };

  // GET PEMBICARA
  const getPembicara = async () => {

    try {

      const response = await fetch(
        "VITE_API_URL=https://4-c-uts-simusyeeah.vercel.app/pembicara"
      );

      const result = await response.json();

      setPembicara(
        Array.isArray(result.data)
          ? result.data
          : []
      );

    } catch (error) {

      console.log(error);

      setPembicara([]);
    }
  };

  // SUBMIT
  const onSubmit = async (data: FormData) => {

    try {

      const response = await fetch(
        "VITE_API_URL=https://4-c-uts-simusyeeah.vercel.app/event",
        {
          method: "POST",

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
        }
      );

      if (!response.ok) {
        throw new Error(
          "Gagal menambahkan event"
        );
      }

      alert("Event berhasil ditambahkan");

      reset();

      navigate("/dashboard/event");

    } catch (error) {

      console.log(error);

      alert(
        "Terjadi kesalahan saat menambahkan event"
      );
    }
  };

  useEffect(() => {

    getCategories();

    getPembicara();

  }, []);

  return (

    <div className="p-6 max-w-2xl mx-auto">

      <div className="bg-[#f8f5f0] rounded-2xl shadow-md p-8 border border-[#e0d6c8]">

        <h2 className="text-2xl font-bold text-[#3e2f1c] mb-6 border-b border-[#d6c7b2] pb-4">
          Add New Event
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >

          <InputText
            label="Event Title"
            nama="title"
            register={register}
            error={errors.title?.message}
          />

          <InputText
            label="Description"
            nama="description"
            register={register}
            error={errors.description?.message}
          />

          <InputText
            label="Location"
            nama="location"
            register={register}
            error={errors.location?.message}
          />

          <InputText
            label="Event Date"
            nama="dateEvent"
            type="date"
            register={register}
            error={errors.dateEvent?.message}
          />

          {/* CATEGORY */}
          <div>

            <label className="block mb-2 font-medium text-[#3e2f1c]">
              Category Event
            </label>

            <select
              {...register("categoryId")}
              className="w-full px-4 py-3 rounded-xl border border-[#d6c7b2] bg-white"
            >

              <option value="">
                Pilih Category Event
              </option>

              {categories.map((item) => (

                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.name}
                </option>

              ))}

            </select>

            <p className="text-sm text-red-500 mt-1">
              {errors.categoryId?.message}
            </p>

          </div>

          {/* PEMBICARA */}
          <div>

            <label className="block mb-2 font-medium text-[#3e2f1c]">
              Pembicara
            </label>

            <select
              {...register("pembicaraId")}
              className="w-full px-4 py-3 rounded-xl border border-[#d6c7b2] bg-white"
            >

              <option value="">
                Pilih Pembicara
              </option>

              {pembicara.map((item) => (

                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.name} - {item.role}
                </option>

              ))}

            </select>

            <p className="text-sm text-red-500 mt-1">
              {errors.pembicaraId?.message}
            </p>

          </div>

          <div className="flex justify-start mt-4">

            <Button
              type="submit"
              label="Save Event"
            />

          </div>

        </form>

      </div>

    </div>
  );
}