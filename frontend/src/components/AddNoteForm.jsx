import axios from "axios";
import { useState } from "react";

const AddNoteForm = ({ userToken }) => {
  const [note, setNote] = useState("");
  const config = { headers: { Authorization: "Bearer " + userToken } };

  const addNote = async () => {
    await axios.post("http://localhost:3001/notes", { content: note }, config);
  };

  return (
    <form onSubmit={addNote}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">Add note</button>
    </form>
  );
};

export default AddNoteForm;
