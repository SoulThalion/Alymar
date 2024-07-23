import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProductosIcon from "../../icons/ProductosIcon";

const ProductosButton = () => {

  const location = useLocation();

  useEffect(() => {
    }, [location]);

  return (
    <li>
      <a
        href="/productos"
        className={`flex items-center p-2 pl-7 text-white rounded-lg group ${location.pathname === "/productos" ? "bg-[#FF6600]" : ""}`}
      >
        <ProductosIcon />
        <span className="ms-3">Productos</span>
      </a>
    </li>
  );
};

export default ProductosButton;
