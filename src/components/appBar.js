import Navigation from "./Navigation/Navigation";
import AuthNaw from "./AuthNav";
import s from "./Navigation/Navigation.module.css";
import UserMenu from "./UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getUserStatus } from "./auth/auth-selectors";

export default function AppBar() {
  const isLoggenIn = useSelector(getUserStatus);
  return (
    <header className={s.container}>
      <Navigation />
      {isLoggenIn ? <UserMenu /> : <AuthNaw />}
    </header>
  );
}
