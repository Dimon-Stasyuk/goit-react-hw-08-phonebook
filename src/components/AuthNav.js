import { NavLink } from "react-router-dom";
import s from "./Navigation/Navigation.module.css";

export default function AuthNaw() {
  return (
    <div className={s.authNav}>
      <NavLink to='/login' className={s.item} activeClassName={s.activeItem}>
        Login
      </NavLink>
      <NavLink to='/register' className={s.item} activeClassName={s.activeItem}>
        Register
      </NavLink>
    </div>
  );
}
