import { Outlet } from "react-router-dom";
import kabah from "../assets/kabah.png";
import Navbar from "../components/Navbar";

export default function AuthLayout () {
    return (
        <>
        <Navbar/>
        <div className="grid grid-cols-2 items-center min-h-screen">
            {/* KIRI */}
            <div>
                <img src={kabah} alt="" className=" mx-auto bg-gray-50 h-screen items-center justify-center"/>
            </div>


            {/* KANAN */}
            <div className="p-6">
                <Outlet/>
            </div>
        </div>
    </>
    )
}