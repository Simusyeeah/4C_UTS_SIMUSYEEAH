import { useEffect } from "react";
import { z } from "zod";
import { InputText } from "../../../ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";

type FormData = {
  nama: string;
  role: string;
  image: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama pembicara harus diisi"),
  role: z.string().min(1, "Role pembicara harus diisi"),
  image: z.string().min(1, "Image pembicara harus diisi"),
});

export default function PembicaraUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const getPembicaraById = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/pembicara/${id}`
      );
      const result = await response.json();

      setValue("nama", result.data.name);
      setValue("role", result.data.role);
      setValue("image", result.data.image);
    } catch (error) {
      console.error(error);
      alert("Gagal mengambil data pembicara");
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/pembicara/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.nama,
            role: data.role,
            image: data.image,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Gagal update pembicara");
      }

      alert("Pembicara berhasil diupdate");
      navigate("/dashboard/pembicara");
    } catch (error) {
      console.error(error);
      alert("Pembicara gagal diupdate");
    }
  };

  useEffect(() => {
    getPembicaraById();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
          Edit Pembicara
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputText
            label="Nama"
            nama="nama"
            register={register}
            error={errors.nama?.message}
          />

          <InputText
            label="Role"
            nama="role"
            register={register}
            error={errors.role?.message}
          />

          <InputText
            label="Image URL"
            nama="image"
            register={register}
            error={errors.image?.message}
          />

          <Button type="submit" label="Update Pembicara" />
        </form>
      </div>
    </div>
  );
}