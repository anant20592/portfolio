import { NavLink } from "react-router-dom";
import menuIcon from "../assets/images/menu.png";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              AnantSharma<span className="vl"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/work">WORK</NavLink>
          </li>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/connect">CONNECT</NavLink>
          </li>
        </ul>
        <div className="nav-menu">
          <img src={menuIcon} width={"32px"} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
