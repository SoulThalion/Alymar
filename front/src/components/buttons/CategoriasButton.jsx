import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CategoriasIcon from "../../icons/CategoriasIcon";

const CategoriasButton = () => {

  const location = useLocation();

  useEffect(() => {
    }, [location]);

  return (
    <li>
      <a
        href="/categorias"
        className={`flex items-center p-2 pl-7 text-white rounded-lg group ${location.pathname === "/categorias" ? "bg-[#FF6600]" : ""}`}
      >
        <CategoriasIcon />
        <span className="ms-3">Categorias</span>
      </a>
    </li>
  );
};

export default CategoriasButton;
