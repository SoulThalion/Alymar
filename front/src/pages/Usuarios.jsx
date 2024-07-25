import { useEffect, useState } from "react";
import { getAllUsers } from "../services/users.service";
import { Link } from "react-router-dom";
import SaveIcon from "../icons/SaveIcon";
import Guardar from "../icons/guardar";
import UserPlusIcon from "../icons/UserPlusIcon";
import DeleteIcon from "../icons/PapeleraIcon";

const Usuarios = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const usuario = await getAllUsers();
        console.log('Usuarios obtenidos:', usuario);
        setData(usuario);
      } catch (error) {
        console.error('Error al obtener los usuarios', error);
      }
    };

    fetchUsers();
  }, []);
  console.log(data)

  return (
    <div>
      <p className="text-black mt-20">Usuarios</p>

      <div className="overflow-x-auto shadow-md sm:rounded-lg w-10/12 my-0">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-naranja dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Nombre
              </th>
              <th scope="col" class="px-6 py-3">
                Contraseña
              </th>
              <th scope="col" class="px-6 py-3">
                Tienda
              </th>
              <th scope="col" class="px-6 py-3">
                Rol
              </th>
              <th scope="col" class="px-6 py-3">
               
              </th>
              <th scope="col" class="px-6 py-3">
                <UserPlusIcon></UserPlusIcon>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>..........</td>
                <td>{item.tienda}</td>
                <td>{item.role}</td>
                <td><Guardar></Guardar></td>
                <td><DeleteIcon></DeleteIcon></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Usuarios