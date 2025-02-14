import axios from "axios";
import { useState } from "react";

const AddNoteForm = ({ userToken, notes, setNotes }) => {
  const [note, setNote] = useState("");
  const config = { headers: { Authorization: "Bearer " + userToken } };

  const addNote = async (event) => {
    event.preventDefault();
    setNotes(notes.concat({ content: note, id: "atempid" }));
    await axios.post("/notes", { content: note }, config);
    setNote("");
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
