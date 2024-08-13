import EditIcon from "../../icons/EditIcon";
import PapeleraIcon from "../../icons/PapeleraIcon";

const OrderCard = ({id, fechahora, ticket, nombre, telefono, tienda, estado, papelera, observaciones, pagado}) => {
  return (
    <div className={`${estado === "pendiente" ? "bg-[#FED7AA]" : estado === "preparacion" ? "bg-gray-200" : "bg-[#F7CECE]"}  bg-gray-200 w-72 p-4 rounded-2xl shadow-lg text-md flex flex-col`}>
      {/*cabecera*/}

      <div className={`${estado === "pendiente" ? "bg-[#F97316]" : estado === "preparacion" ? "bg-gray-400" : "bg-red-600"} grid grid-cols-2 text-gray-700 mb-2 -m-4 rounded-t-2xl`}>
        {/* Fecha y hora */}
        <div className="col-start-1 row-start-1 text-white font-bold px-4 py-2">
          <p>05/06/2024</p>
          <p>13:30</p>
        </div>

        {/* Botones de acción */}
        <div className="col-start-2 row-start-1 flex justify-end items-center px-4">
          <div className="flex space-x-4">
            <button className="text-white">
              <EditIcon />
            </button>
            <button className="text-white">
              <PapeleraIcon />
            </button>
          </div>
        </div>
      </div>

      {/*fin de cabecera*/}

      {/*Datos personales*/}
      <div className="flex flex-col ml-5">
        <span>
          <strong>No: </strong>{ticket}
        </span>
        <div className="text-gray-700">
          <p>
            <strong>Nombre:</strong> {nombre}
          </p>
          <p>
            <strong>Tlf:</strong> {telefono}
          </p>
        </div>
      </div>

      {/*fin de datos personales*/}

      {/*Contenido del pedido*/}

      <div className="flex justify-center">
        <div className="bg-white p-4 my-2 rounded-lg max-w-56">
          <div className="space-y-2">
            <div>
              <input
                type="checkbox"
                className="rounded-full"
                name="order"
                id="medioPollo"
              />
              <label htmlFor="medioPollo" className="ml-2">
                Medio Pollo
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="rounded-full"
                name="order"
                id="tarrinaPatatas"
              />
              <label htmlFor="tarrinaPatatas" className="ml-2">
                Tarrina Mediana Patatas
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="rounded-full"
                name="order"
                id="ensaladilla"
              />
              <label htmlFor="ensaladilla" className="ml-2">
                Ensaladilla
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="rounded-full"
                name="order"
                id="pan"
              />
              <label htmlFor="pan" className="ml-2">
                Pan
              </label>
            </div>
          </div>
        </div>
      </div>

      {/*fin del contendio del pedido*/}

      {/*Estado y botones*/}

      <div className="text-gray-700 mt-3 mb-2 flex justify-center">
        <p className="space-x-3">
          <strong>Estado:</strong>{" "}
          <span className={`${estado === "pendiente" ? "bg-amber-400 text-black" : estado === "preparacion" ? "bg-cyan-400 text-black" : "bg-red-600 text-white"} px-5 py-2`}>{estado}</span>
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <button className="bg-orange-400 text-white py-2 px-3 rounded-3xl w-1/2 mx-1">
          Cancelar
        </button>
        <button className="bg-white text-orange-500 py-2 px-3 rounded-3xl w-1/2 mx-1">
          Finalizar
        </button>
      </div>

      {/*Fin de estado y botones*/}
    </div>
  );
};

export default OrderCard;
