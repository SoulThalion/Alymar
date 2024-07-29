import { useEffect, useState } from "react";
import { getAllUsers, createUser } from "../services/users.service";
import { Link } from "react-router-dom";
import SaveIcon from "../icons/SaveIcon";
import Guardar from "../icons/guardar";
import UserPlusIcon from "../icons/UserPlusIcon";
import DeleteIcon from "../icons/PapeleraIcon";
import CrearUsuario from "../components/crearUsuario/CrearUsuario";

const Usuarios = () => {

  // Obtener datos del usuario
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
  // Crear usuario
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [store, setStore] = useState("");
  const [role, setRole] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await createUser(name, password, store, role);
      setSuccessMessage("¡Usuario creado exitosamente!");
      clearForm();
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); 
    } catch (error) {
      console.error("Error al crear usuario:" + error.message);
    }
  };
  const clearForm = () => {
    setName("");
    setStore("");
    setPassword("");
    setRole("");
  };
  // Mostrar ventana emergente crear usuario

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <p className="text-black mt-20 px-20 py-5">Usuarios</p>

      <div className="overflow-x-auto shadow-md sm:rounded-lg w-10/12 m-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
          <thead className="text-xs text-gray-700 uppercase bg-naranja dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Contraseña
              </th>
              <th scope="col" className="px-6 py-3">
                Tienda
              </th>
              <th scope="col" className="px-6 py-3">
                Rol
              </th>
              <th scope="col" className="px-1 py-3">

              </th>
              <th scope="col" className="px-1 py-3">
                <button onClick={toggleModal}><UserPlusIcon></UserPlusIcon></button>
                <CrearUsuario
                  show={showModal}
                  onClose={toggleModal}
                  name={name}
                  setName={setName}
                  password={password}
                  setPassword={setPassword}
                  role={role}
                  setRole={setRole}
                  store={store}
                  setStore={setStore}
                  handleCreateUser={handleCreateUser}
                  successMessage={successMessage}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-3">{item.nombre}</td>
                <td className="px-6 py-3">..........</td>
                <td className="px-6 py-3">{item.tienda}</td>
                <td className="px-6 py-3">{item.role}</td>
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