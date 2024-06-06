import { Home } from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { SignIn } from "./pages/SignIn";
import { Cadastro } from "./pages/Cadastro";
import { Dashboard } from "./pages/Dashboard";
import { NovoCardapio } from "./pages/NovoCardapio";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  },
  {
    path: "login",
    element: <SignIn />
  },
  {
    path: "cadastro",
    element: <Cadastro />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "dashboard/novocardapio",
    element: <NovoCardapio />
  }
])

export { router }