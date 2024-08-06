import { useEffect, useState } from "react";
import { getAllUsers, createUser, updateUser,deleteUser } from "../services/users.service";
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
  const [editData, setEditData] = useState({});

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [name]: value,
      },
    }));
  };

  const handleSave = async (id) => {
    if (editData[id]) {
      try {
        await updateUser(id, editData[id]);
        setEditData(prev => {
          const newState = { ...prev };
          delete newState[id];
          console.los('modificando')
          return newState;
        });
        const usuario = await getAllUsers();
        setData(usuario); // Refrescar los usuarios después de la actualización
       
      } catch (error) {
        console.error('Error al actualizar usuario', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      // Filtra el usuario eliminado de la lista actual
      setData(prevData => prevData.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };


  return (
    <div>
      <p className="text-black mt-20 px-20 py-5">Usuarios</p>

      <div className="overflow-x-auto shadow-md sm:rounded-lg w-10/12 m-auto mb-20 pb-5">
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
                ></CrearUsuario>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (

              <tr key={item.id}>
                <td className="px-6 py-3">
                  <input
                    type="text"
                    name="nombre"
                    value={editData[item.id]?.nombre || item.nombre}
                    onChange={(e) => handleInputChange(e, item.id)}
                  />
                </td>
                <td className="px-6 py-3">  <input
                    type="text"
                    name="contrasena"
                    value={editData[item.id]?.contrasena || item.contrasena}
                    onChange={(e) => handleInputChange(e, item.id)}
                  /></td>
                <td className="px-6 py-3">
                  <select
                    name="tienda"
                    value={editData[item.id]?.tienda || item.tienda}
                    onChange={(e) => handleInputChange(e, item.id)}
                  >
                    <option value="Elda">Elda</option>
                    <option value="Petrer">Petrer</option>
                    {/* Agrega más opciones según tus necesidades */}
                  </select>
                </td>
                <td className="px-6 py-3">
                  <select
                    name="role"
                    value={editData[item.id]?.role || item.role}
                    onChange={(e) => handleInputChange(e, item.id)}
                  >
                    <option value="admin">Admin</option>
                    <option value="vendedor">Vendedor</option>
                    <option value="cocinero">Cocinero</option>
                    {/* Agrega más opciones según tus necesidades */}
                  </select>
                </td>
                <td><button onClick={() => handleSave(item.id)}><Guardar/></button></td>
                <td><button onClick={() => handleDelete(item.id)}><DeleteIcon/></button></td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Usuarios