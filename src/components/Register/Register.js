import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Register.module.css";

import { getUserRegistrationError } from "../auth/auth-selectors";
import { register } from "../auth/auth-operations";

export default function Register() {
  const dispatch = useDispatch();
  const userRegistrationStatus = useSelector(getUserRegistrationError);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all the fields for registration");
      return;
    }
    dispatch(register({ name, email, password }));
  };

  const onChangeForm = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={s.container}>
      <h1>Registration of a new user</h1>
      <form action='' onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' name='name' onChange={onChangeForm} value={name} />
        </label>
        <label>
          Email
          <input
            type='email'
            name='email'
            onChange={onChangeForm}
            value={email}
          />
        </label>
        <label>
          Password
          <input
            type='text'
            name='password'
            minlength='7'
            onChange={onChangeForm}
            value={password}
          />
        </label>
        <button type='submit' className='btn'>
          Register
        </button>
      </form>
      {userRegistrationStatus && <h3>User with this email already exists</h3>}
    </div>
  );
}
