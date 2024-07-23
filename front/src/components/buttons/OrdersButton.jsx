import { useLocation } from "react-router-dom";
import OrderIcon from "../../icons/OrderIcon";
import { useEffect } from "react";

const OrdersButton = () => {

  const location = useLocation();

  useEffect(() => {
    }, [location]);

  return (
    <li>
      <a
        href="/orders"
        className={`flex items-center p-2 text-white rounded-lg group ${location.pathname === "/orders" ? "bg-[#FF6600]" : ""}`}
      >
        <OrderIcon />
        <span className="ms-3">Órdenes</span>
      </a>
    </li>
  );
};

export default OrdersButton;
