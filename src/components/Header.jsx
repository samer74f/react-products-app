import { Link } from "react-router-dom";  
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
export default function Header() {
  const { theme,toggleTheme } = useContext(ThemeContext);
  return (
    <>
    <ul>
      <Link to="/"> Products</Link>
      <Link to="/about"> About Us</Link>
      <Link to="/contact"> Contact Us</Link>
      <li>
  <button onClick={toggleTheme}>
    {theme === "light" ? "Dark Mode" : "Light Mode"}
  </button>
</li>
    </ul>
    
    </>
  )
}
