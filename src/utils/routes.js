import AdventurePage from "../pages/AdventurePage";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/catalogo",
    component: Catalog,
  },
  {
    path: "/catalogo/:id",
    component: AdventurePage,
  },
];
