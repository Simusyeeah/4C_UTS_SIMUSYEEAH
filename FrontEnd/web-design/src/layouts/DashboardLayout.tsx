import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex w-full min-h-screen bg-[#fff7f7]">
      <div className="w-64 bg-white border-r border-[#f1d6d6] flex flex-col justify-between p-6 shadow-xl">
        <div>
          <h1 className="font-extrabold text-3xl text-center text-[#8b1e3f]">
            Biromus
          </h1>

          <ul className="flex flex-col gap-4 w-full mt-16">
            {[
              ["Dashboard", "/dashboard"],
              ["Category", "/dashboard/category"],
              ["Pembicara", "/dashboard/pembicara"],
              ["Event", "/dashboard/event"],
              ["Biodata", "/dashboard/biodata"],
            ].map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block px-5 py-3 rounded-xl text-[#334155] hover:bg-[#fde2e2] hover:text-[#8b1e3f] transition font-semibold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="w-full p-4 bg-[#8b1e3f] text-white font-bold rounded-2xl hover:bg-[#6f1732] transition shadow-lg"
        >
          Logout
        </button>
      </div>

      <div className="bg-[#fff7f7] p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
}