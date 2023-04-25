import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dxnr1viro/image/upload/v1682384699/voscart7tlchq5rwpzyq.svg"
            alt="Este es el logo de la empresa"
          />
        </Link>
        <ul style={{ display: "flex", gap: "30px" }}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.noActive
            }
          >
            Todas
          </NavLink>
          <NavLink
            to="/category/camisetas"
            className={({ isActive }) =>
              isActive ? styles.active : styles.noActive
            }
          >
            Camisetas
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.noActive
            }
            to="/category/medias"
          >
            Medias
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.noActive
            }
            to="/category/shorts"
          >
            Shorts
          </NavLink>
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};
