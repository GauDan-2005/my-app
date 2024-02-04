import axios from "axios";
import React, { useEffect, useState } from "react";
import { format } from "timeago.js";

import NotesCard from "../notesCard/NotesCard";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");

  const getNotes = async (token) => {
    const res = await axios.get("/api/notes", {
      headers: { Authorization: token },
    });
    setNotes(res.data);
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`, {
        headers: { Authorization: token },
      });
      getNotes(token);
    } catch (error) {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    const t = localStorage.getItem("userToken");
    setToken(t);
    if (token) getNotes(token);
  }, [token]);

  return (
    <div>
      {notes.map((note) => (
        <NotesCard
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.content}
          date={format(note.date)}
          username={note.name}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default Home;
