import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { InputText } from "../../../ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";

type FormData = {
  name: string;
};

const schema = z.object({
  name: z.string().min(1, "Nama category harus diisi"),
});

export default function CategoryUpdate() {
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

  const getCategoryById = async () => {
    const response = await fetch(`VITE_API_URL=https://4-c-uts-simusyeeah.vercel.app/category/${id}`);
    const result = await response.json();

    setValue("name", result.data.name);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`VITE_API_URL=https://4-c-uts-simusyeeah.vercel.app/category/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal update category");
      }

      alert("Category berhasil diupdate");
      navigate("/dashboard/category");
    } catch (error) {
      console.error(error);
      alert("Category gagal diupdate");
    }
  };

  useEffect(() => {
    getCategoryById();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">
          Edit Category
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            label="Category Name"
            nama="name"
            register={register}
            error={errors.name?.message}
          />

          <Button type="submit" label="Update Category" />
        </form>
      </div>
    </div>
  );
}