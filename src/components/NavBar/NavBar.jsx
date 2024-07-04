import "./navBar.css";
import CartWidget from "./CartWidget";
import logo2 from "../../assets/logo2.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo2} alt="Logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li>Deportivas</li>
        <li>Scooter</li>
        <li>Crucero</li>
        <li>Cross / Enduro</li>
        <li>Naked</li>
        <li>Doble propósito</li>
        <li>Urbanas</li>
        <li>Scrambler</li>
      </ul>
      <CartWidget total={1}/>
    </nav>
  );
};

export default NavBar;
