import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuIcon from "../icons/MenuIcon";
import ClientsButton from "./buttons/ClientsButton";
import LogOutButton from "./buttons/LogOutButton";
import PedidosButton from "./buttons/PedidosButton";
import UsersButton from "./buttons/UsersButton";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import LogOutIcon from "../icons/LogOutIcon";
import ExistenciasButton from "./buttons/ExistenciasButton";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsDrawerOpen(false); // Cerrar el drawer cada vez que cambia la ruta
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-[#58aaae] text-white bg-black">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                className="text-white mt-0 font-medium rounded-lg text-sm px-5 py-2.5"
                type="button"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)} // Alternar visibilidad del drawer
                aria-controls="drawer-navigation"
              >
                <MenuIcon />
              </button>

              <a href="/" className="flex ms-2 md:me-24">
                <img src="../../public/logo.png" alt="logo" className="w-2/4" />
              </a>
            </div>
            <a
              href="#"
              onClick={handleLogout}
              className="flex justify-end p-1 text-white rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group"
            >
              <LogOutIcon />
            </a>
          </div>
        </div>
      </nav>

      {/* Menus */}
      <div
        id="drawer-navigation"
        className={`fixed mt-4 top-12 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } border-r border-[#58aaae] bg-black`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        
        
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <PedidosButton/>
            <ExistenciasButton />
            {(user?.role === "admin" || user?.role === "manager") && (
              <>
                <ClientsButton />
                <UsersButton />
              </>
            )}
            <LogOutButton />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
