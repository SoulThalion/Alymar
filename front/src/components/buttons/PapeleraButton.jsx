import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PapeleraIcon from "../../icons/PapeleraIcon";

const PapeleraButton = () => {

  const location = useLocation();

  useEffect(() => {
    }, [location]);

  return (
    <li>
      <a
        href="/papelera"
        className={`flex items-center p-2 pl-7 text-white rounded-lg group ${location.pathname === "/papelera" ? "bg-[#FF6600]" : ""}`}
      >
        <PapeleraIcon />
        <span className="ms-3">Papelera</span>
      </a>
    </li>
  );
};

export default PapeleraButton;
