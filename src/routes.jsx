import {createBrowserRouter} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RootLayout from "./components/layout/RootLayout";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    {
      path: "/contact",
      element: <Contact />,
    },
  ],
  },
]);
export default router;