import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Login.module.css";
import { useSelector } from "react-redux";
import { getUserLogInError } from "../auth/auth-selectors";

import { login } from "../auth/auth-operations";

export default function Login() {
  const loggedInError = useSelector(getUserLogInError);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onInputChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Please enter your username and password");
      return;
    }
    dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <div className={s.container}>
      <h1>Please login</h1>
      <form action='' onSubmit={onSubmit}>
        <label>
          Email
          <input
            type='email'
            name='email'
            value={email}
            onChange={onInputChange}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            value={password}
            onChange={onInputChange}
          />
        </label>

        <button type='submit' className='btn'>
          Login
        </button>
      </form>
      {loggedInError && (
        <h3>Incorrect username or password. Please try again.</h3>
      )}
    </div>
  );
}
