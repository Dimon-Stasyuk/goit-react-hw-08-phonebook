import "./style.css";
import ContactsView from "./Views/ContactsView.js";
import s from "./components/Navigation/Navigation.module.css";

import { fetchCurrentUser } from "./components/auth/auth-operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Login from "./components/Login/Login";
import AppBar from "./components/appBar";
import Register from "./components/Register/Register";
import HomePage from "./Views/HomePageViewe";
import PrivateRoute from "./components/PrivateRoute";
import PublicRout from "./components/PublicRoute";
import { getIsFethingUser } from "./components/auth/auth-selectors";

export default function App() {
  const isFetchingCurrentUser = useSelector(getIsFethingUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className={s.mainContainer}>
        <AppBar />

        <PublicRout path='/' exact>
          <HomePage />
        </PublicRout>

        <PrivateRoute path='/contacts'>
          <ContactsView />
        </PrivateRoute>

        <PublicRout path='/login' restricted>
          <Login />
        </PublicRout>

        <PublicRout path='/register' restricted>
          <Register />
        </PublicRout>
      </div>
    )
  );
}
