import { useForm } from "react-hook-form";
import { InputText } from "../ui/InputText"; // ✅ FIX (default import)
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputPassword } from "../ui/InputPass";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore"; // ❌ dihapus karena belum dipakai

type FormLogin = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().min(1, "Email harus diisi"),
  password: z.string().min(8, "Password minimal 8 Karakter"),
});

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormLogin>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormLogin) => {
    console.log("Login Success", data);

    if (
      data.email === "24090102" &&
      data.password === "24090102"
    ) {
      alert("Login Berhasil");

      localStorage.setItem("isLogin", "true");

      navigate("/Dashboard"); // ✅ langsung ke dashboard
      reset();
    } else {
      alert("Email atau Password Salah");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-120 max-w-7xl bg-white p-5 rounded-2xl shadow-xl">
        <h1 className="text-center text-2xl font-bold mb-10">
          Silahkan Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            label="Email"
            nama="email"
            register={register}
            error={errors.email?.message}
          />

          <InputPassword
            label="Password"
            name="password"
            register={register}
            error={errors.password?.message}
          />

          <div>
            <Button label="Login" variant="primary" type="submit" />
          </div>

          <div className="mt-3 text-sm">
            Belum punya akun?{" "}
            <Link to="/register" className="text-blue-500 underline">
              Daftar Disini
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}