import logo from "../images/phone-book.svg";
import s from "../styles/HomePage.module.css";
import { getUserName, getUserStatus } from "../components/auth/auth-selectors";
import { useSelector } from "react-redux";

export default function HomePage() {
  const isLoggedIn = useSelector(getUserStatus);
  const userName = useSelector(getUserName);
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        {isLoggedIn ? (
          <div>
            <span className={s.name}>{userName}</span>
            <span>, welcome to the PhoneBook application.</span>
          </div>
        ) : (
          "Welcome to the PhoneBook application. Please Log In"
        )}
      </h1>
      <img src={logo} alt='' className={s.img} />
    </div>
  );
}
