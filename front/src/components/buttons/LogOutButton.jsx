import LogOutIcon from "../../icons/LogOutIcon";

const LogOutButton = () => {

  const handleLogout = () => {
    localStorage.removeItem('token')
  }

  return (
    <li>
      <a href="#"
        onClick={handleLogout}
        className={`flex items-center p-2 pl-7 text-white rounded-lg group`}
      >
        <LogOutIcon />
        <span className="flex-1 ms-3 whitespace-nowrap">Cerrar Sesión</span>
      </a>
    </li>
  );
};

export default LogOutButton;
