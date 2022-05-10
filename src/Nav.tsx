import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { IRoute } from "./App";

interface IProps {
  routes: Array<IRoute>;
}

const Nav = ({ routes }: IProps) => {
  const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "nav__link nav__link--active" : "nav__link";
  };

  return (
    <ul className="nav">
      {routes.map(({ hash, label }) => (
        <li className="nav__item" key={hash}>
          <NavLink className={getLinkClassName} to={hash}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
