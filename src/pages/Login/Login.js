import "./Login.css";

import { useState } from "react";
//hook
import { useLogin } from "../../hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();

  
  const submitForm = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form className="auth-form" onSubmit={submitForm}>
      <h2>Login</h2>
      <label htmlFor="email">
        <span>Email: </span>
        <input
          type="email"
          required
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label htmlFor="password">
        <span>Password: </span>
        <input
          type="password"
          required
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn">Login</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Login;
