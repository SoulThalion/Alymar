import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PedidoIcon from "../../icons/PedidoIcon";

const OrdersButton = () => {

  const location = useLocation();

  useEffect(() => {
    }, [location]);

  return (
    <li>
      <a
        href="/orders"
        className={`flex items-center p-2 pl-7 text-white rounded-lg group ${location.pathname === "/orders" ? "bg-[#FF6600]" : ""}`}
      >
        <PedidoIcon />
        <span className="ms-3">Pedidos</span>
      </a>
    </li>
  );
};

export default OrdersButton;