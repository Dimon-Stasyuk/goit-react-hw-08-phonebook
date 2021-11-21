import { Route } from "react-router";
import { useSelector } from "react-redux";
import { getUserStatus } from "./auth/auth-selectors";
import { Redirect } from "react-router";

export default function PublicRout({ children, restricted = false, ...props }) {
  const isLoggedIn = useSelector(getUserStatus);
  const shouldRedirected = isLoggedIn && restricted;
  return (
    <Route {...props}>
      {shouldRedirected ? <Redirect to='/contacts' /> : children}
    </Route>
  );
}
