import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import UNA from "./components/UNA";
import Therians from "./components/Therians";
import RedBlok from "./components/RedBlok";
import Karmans from "./components/Karmans";
import Cogs from "./components/Cogs";
import ONI from "./components/ONI";
import About from "./components/About";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/UNA',
    element: <UNA />
  },
  {
    path: '/Therians',
    element: <Therians />
  },
  {
    path: '/RedBlok',
    element: <RedBlok />
  },
  {
    path: '/Karmans',
    element: <Karmans />
  },
  {
    path: '/Cogs',
    element: <Cogs />
  },
  {
    path: 'ONI',
    element: <ONI />
  },
  {
    path: 'About',
    element: <About />
  }
];

export default AppRoutes;
