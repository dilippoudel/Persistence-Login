import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { getInput, getUserProfile, logInSuccess, setLoggedIn } from "../redux/actions";

type Props = {
  isLoading: boolean;
  login: boolean;
};

function Login({ isLoading, login }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userReload = async () => {
    try {
      const data = await axios.get("http://localhost:5000/api/auth/user/data");
      console.log(data);
      dispatch(getUserProfile(data.data));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    userReload();
  }, []);
  if(isLoading) return <p>Loading ......</p>
  if (login) return <Redirect to="/" />;
  const handleLogIn = (e: any) => {
    e.preventDefault();
    dispatch(getInput({ email, password }));
    dispatch(logInSuccess());
  };
  return (
    <div>
      <p>Email</p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogIn}>Log In with Actions</button>
    </div>
  );
}

export default Login;
