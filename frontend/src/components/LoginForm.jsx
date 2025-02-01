import { useState } from "react";
import axios from "axios";

const LoginForm = ({ setUserToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3001/login", {
      username,
      password,
    });
    const responseToken = response.data;
    window.localStorage.setItem("loggedinusertoken", responseToken);
    setUserToken(responseToken);
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      username:{" "}
      <input
        type="text"
        onChange={(event) => setUsername(event.target.value)}
        value={username}
      />
      <br />
      password:{" "}
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
