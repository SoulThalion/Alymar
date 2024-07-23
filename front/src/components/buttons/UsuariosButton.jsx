import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import UsuariosIcon from "../../icons/UsuariosIcon";

const UsuariosButton = () => {

  const location = useLocation();

  useEffect(() => {
    }, [location]);

  return (
    <li>
      <a
        href="/usuarios"
        className={`flex items-center p-2 pl-7 text-white rounded-lg group ${location.pathname === "/usuarios" ? "bg-[#FF6600]" : ""}`}
      >
        <UsuariosIcon />
        <span className="ms-3">Usuarios</span>
      </a>
    </li>
  );
};

export default UsuariosButton;
