import { useSelector, useDispatch } from "react-redux";

import s from "./UserMenu.module.css";
import { getUserName } from "../auth/auth-selectors";
import { logout } from "../auth/auth-operations";
import Svg from "../../images/Svg";

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const onBtnClick = (event) => {
    event.preventDefault();
    console.log("Click");
    dispatch(logout());
  };

  return (
    <div className={s.userMenu_container}>
      <span>
        Welcome,<span className={s.userMenu_Name}> {name}</span>
      </span>
      <button type='button' className={s.btn} onClick={onBtnClick}>
        <svg className={s.exitIcon} width='30' height='30'>
          <Svg name='logOut' />
        </svg>
      </button>
    </div>
  );
}
