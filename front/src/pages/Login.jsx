import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
//import { login } from "../services/auth.service";
import OpenEyeIcon from "../icons/OpenEyeIcon";
import CloseEyeIcon from "../icons/CloseEyeIcon";

const Login = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isPassVisible, setIsPassVisible] = useState(false);

  /*const handleLogin = async (e) => {
    e.preventDefault();
    const data = await login(userName, password);

    if (data) {
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/");
    }
  };*/

  return (
    <UserContext.Provider value={{ user, setUser }}>

<div className="bg-black w-screen fixed">
<img src="../../public/logo.png" alt="logo" className="w-1/6 p-4"/>

</div>

      <div className="flex flex-col justify-center items-center min-h-screen">
        <form
          className="w-full max-w-md rounded-lg p-0 border border-black shadow-xl"
          //onSubmit={handleLogin}
        >
          <div className="bg-black w-full flex justify-center items-center rounded-t-lg">
            <img src="../../public/logo.png" alt="logo" className="w-1/3 py-4"/>
          </div>

          <div className="mb-4 p-6 px-10">
            <label htmlFor="username" className="block text-sm font-medium">
              Nombre de Usuario
            </label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              id="username"
              className="bg-[#F4F4F4] border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="nombre"
              required
            />
          </div>
          <div className="mb-4 px-10">
            <label htmlFor="password" className="block text-sm font-medium">
              Contraseña
            </label>
            <div className="relative">
              <span
                className="inline-flex absolute inset-y-5 end-0 items-center px-3 text-sm text-gray-900 rounded-s-md"
                onClick={() => setIsPassVisible((oldState) => !oldState)}
              >
                {isPassVisible ? <OpenEyeIcon /> : <CloseEyeIcon />}
              </span>
            </div>
            <input
              type={isPassVisible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="bg-[#F4F4F4] border border-black text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="contraseña"
              required
            />
          </div>
          <div className="flex justify-center p-6 px-10 pb-10">
            <button
              type="submit"
              className="shadow-lg w-full text-white bg-[#FF6600] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center "
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </UserContext.Provider>
  );
};

export default Login;
