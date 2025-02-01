import { useEffect, useState } from "react";
import axios from "axios";
import AddNoteForm from "./AddNoteForm";

const Notes = ({ userToken, setUserToken }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async () => {
      const config = {
        headers: { Authorization: "Bearer " + userToken },
      };
      const response = await axios.get("http://localhost:3001/notes", config);
      setNotes(response.data);
    })();
  }, []);

  const logout = () => {
    window.localStorage.removeItem("loggedinusertoken");
    setUserToken(null);
  };

  return (
    <>
      <button onClick={logout}>log out</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
      <AddNoteForm userToken={userToken} />
    </>
  );
};

export default Notes;
