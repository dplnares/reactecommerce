import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import Error404 from "../components/pages/Error404"
import Products from "../components/pages/Products";
import App from "../components/templates/App";
import Contact from "../components/pages/Contact";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Form from "../components/pages/admin/products/Form";

//  Colocamos todas las rutas que va a tener mi aplicación
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/productos",
        element: <Products />,
      },
      {
        path: "/contactanos",
        element: <Contact />,
      }
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "registro",
    element: <Register />
  },
  {
    path: "/admin/productos/crear",
    element: <Form />
  }
]);

export default router