import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { getUserStatus } from "../auth/auth-selectors";
import { useSelector } from "react-redux";

export default function Navigation() {
  const isLoggedIn = useSelector(getUserStatus);
  return (
    <ul className={s.list}>
      <NavLink to='/' className={s.item} activeClassName={s.activeItem} exact>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to='/contacts'
          className={s.item}
          activeClassName={s.activeItem}>
          Contacts
        </NavLink>
      )}
    </ul>
  );
}
