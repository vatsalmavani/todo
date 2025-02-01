import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Notes from "./components/Notes";
import Togglable from "./components/Togglable";

function App() {
  const ut = window.localStorage.getItem("loggedinusertoken");
  const [userToken, setUserToken] = useState(ut ? ut : null);

  return (
    <>
      {userToken ? (
        <Notes userToken={userToken} setUserToken={setUserToken} />
      ) : (
        <Togglable buttonName="login">
          <LoginForm setUserToken={setUserToken} />
        </Togglable>
      )}
    </>
  );
}

export default App;
