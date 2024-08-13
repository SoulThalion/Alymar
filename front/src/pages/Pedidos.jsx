import { useEffect, useState } from "react";
import OrderCard from "../components/Cards/OrderCard";
import { getAllOrders } from "../services/order.service";

const Pedidos = () => {

  const [orders, setOrders] = useState("");

  useEffect(() => {
    const fetchAllOrders = async () => {
      const data = await getAllOrders();
      setOrders(data);
    };

    fetchAllOrders();
  }, []);

  return (
    <>
    {orders && orders.length && (
      <div className="pt-32 p-20 flex gap-10 flex-wrap">
        {orders.map((el, idx) => {
          return (
            <OrderCard
              key={idx}
              {...el} // Propagando todas las propiedades del objeto `el` como props al componente `OrderCard`
            />
          );
        })}
      </div>)}
    </>
  );
};

export default Pedidos;
