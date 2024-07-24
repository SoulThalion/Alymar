import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Pedidos from "../pages/Pedidos";
import Existencias from "../pages/Existencias";
import Papelera from "../pages/Papelera";
import Categorias from "../pages/Categorias";
import Productos from "../pages/Productos";
import Usuarios from "../pages/Usuarios";

const isAuthenticated = () =>
  !localStorage.getItem("token") ? redirect("/login") : null;
const isNotAuthenticated = () =>
  localStorage.getItem("token") ? redirect("/") : null;

const router = createBrowserRouter([

  {
    path: '/login',
    element: <Login />,
    loader: isNotAuthenticated
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Pedidos/>,
        loader: isAuthenticated,
      },
      {
        path: '/existencias',
        element: <Existencias/>,
        loader: isAuthenticated,
      },
      {
        path: '/papelera',
        element: <Papelera/>,
        loader: isAuthenticated,
      },
      {
        path: '/categorias',
        element: <Categorias/>,
        loader: isAuthenticated,
      },
      {
        path: '/productos',
        element: <Productos/>,
        loader: isAuthenticated,
      },
      {
        path: '/usuarios',
        element: <Usuarios/>,
        loader: isAuthenticated,
      },
    ]}
]);

export default router;
