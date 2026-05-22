import { Home, Trophy, BookOpen, UserCircleIcon } from "lucide-react";
// import NavbarLink from "./NavbarLink";
import kabah from "../assets/kabah.png"; 
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  // const navigate = useNavigate();
    
    const menuItems = [
        { label: "Beranda", href: "/", icon: <Home size={18} /> },
        { label: "Paket", href: "/paket", icon: <Trophy size={18} /> },
        { label: "kontak", href: "/kontak", icon: <BookOpen size={18} /> },
        { label: "Login", href: "/login", icon: <UserCircleIcon size={18} /> }
  ];
  const activeStyle = "bg-red-100 text-red-900";
  const defaultStyle = "text-gray-600 hover:text-red-900";

  return (
    <header className="sticky top-0 bg-white z-50 px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <img src={kabah} alt="logo" className="h-16" />

        <div className="flex gap-2">
          {menuItems.map((item) => (
             <NavLink
            to={item.href}
            className={({isActive}) => 
            `flex items-center gap-2 px-4 py-2 font-medium transition-all
            duration-200 ${isActive ? activeStyle : defaultStyle
                }`}
        >
            {item.icon && <span className="w-5 h-5">{item.icon}</span>}
            <span>{item.label}</span>
        </NavLink>
          ))}
        </div>

      </div>
    </header>
  );
};

export default Navbar;