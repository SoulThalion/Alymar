import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Pedidos from "../pages/Pedidos";

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
        element: "hola",
        loader: isAuthenticated,
      },
      {
        path: '/pedidos',
        element: <Pedidos/>,
        loader: isAuthenticated,
      },
    ]}

  /*{
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
        element: <Home/>,
        loader: isAuthenticated,
      },
      {
        path: '/users',
        element: <Users/>,
        loader: isAuthenticated,
      },
      {
        path: '/clients',
        element: <Clients/>,
        loader: isAuthenticated,
      },
      {
        path: '/orders',
        element: <Orders/>,
        loader: isAuthenticated,
      },
    ]}*/
]);

export default router;
