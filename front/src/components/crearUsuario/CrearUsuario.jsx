import React from 'react';
import './CrearUsuario.css';

const CrearUsuario = ({
  show,
  onClose,
  name,
  setName,
  password,
  setPassword,
  role,
  setRole,
  store,
  setStore,
  handleCreateUser,
  successMessage
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">&times;</button>
        <form onSubmit={handleCreateUser} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre usuario:
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="store" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tienda
            </label>
            <select
              id="store"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={store}
              onChange={(e) => setStore(e.target.value)}
            >
              <option value="">Selecciona una tienda</option>
              <option value="elda">Elda</option>
              <option value="petrer">Petrer</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Rol
            </label>
            <select
              id="role"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Selecciona un rol</option>
              <option value="admin">Admin</option>
              <option value="vendedor">Vendedor</option>
              <option value="cocina">Cocinero</option>
            </select>
          </div>
          <button
            type="submit"
            className="text-white bg-naranja hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Crear usuario
          </button>
        </form>
        {successMessage && (
          <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default CrearUsuario;