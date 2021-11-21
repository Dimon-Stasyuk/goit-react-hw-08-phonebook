import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { getUserStatus } from "./auth/auth-selectors";

export default function PrivateRoute({ children, ...props }) {
  const isLoggedIn = useSelector(getUserStatus);
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to='/login' exact />}
    </Route>
  );
}
