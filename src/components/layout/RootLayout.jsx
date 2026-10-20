import{ Outlet } from "react-router-dom";
import Header from "../Header";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function RootLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Header />
      <Outlet />
    </div>
  )
}
