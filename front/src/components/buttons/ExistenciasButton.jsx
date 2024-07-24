import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ExistenciasIcon from "../../icons/ExistenciasIcon";

const ExistenciasButton = () => {

  const location = useLocation();

  useEffect(() => {
    }, [location]);

  return (
    <li>
      <a
        href="/existencias"
        className={`flex items-center p-2 pl-7 text-white rounded-lg group ${location.pathname === "/existencias" ? "bg-[#FF6600]" : ""}`}
      >
        <ExistenciasIcon />
        <span className="ms-3">Existencias</span>
      </a>
    </li>
  );
};

export default ExistenciasButton;
