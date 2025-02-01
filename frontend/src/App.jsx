import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Notes from "./components/Notes";

function App() {
  const ut = window.localStorage.getItem("loggedinusertoken");
  const [userToken, setUserToken] = useState(ut ? ut : null);

  return (
    <>
      {userToken ? (
        <Notes userToken={userToken} setUserToken={setUserToken} />
      ) : (
        <LoginForm setUserToken={setUserToken} />
      )}
    </>
  );
}

export default App;
