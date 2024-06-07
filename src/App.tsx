import { Home } from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { SignIn } from "./pages/SignIn";
import { Cadastro } from "./pages/Cadastro";
import { Dashboard } from "./pages/Dashboard";
import { NovoCardapio } from "./pages/NovoCardapio";

const dashboardlink = import.meta.env.VITE_APP_DASHBOARD_LINK;

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
    path: `/${dashboardlink}`,
    element: <Dashboard />
  },
  {
    path: `/${dashboardlink}/novocardapio`,
    element: <NovoCardapio />
  }
])

export { router }