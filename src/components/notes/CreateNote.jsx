import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: "",
  });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const CreateSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("userToken");
      if (token) {
        const { title, content, date } = note;
        const newDate = new Date(date);
        console.log(newDate);
        const newNote = { title, content, newDate };

        await axios.post("/api/notes", newNote, {
          headers: { Authorization: token },
        });

        navigate("/");
      }
    } catch (err) {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <h2>Create Note</h2>
      <form onSubmit={CreateSubmit} autoComplete="off">
        <input
          onChange={inputHandler}
          type="text"
          placeholder="title"
          value={note.title}
          name="title"
          required
        />
        <textarea
          onChange={inputHandler}
          value={note.content}
          name="content"
          placeholder="Note content"
          required
        />
        <input
          onChange={inputHandler}
          type="date"
          value={note.date}
          name="date"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateNote;
