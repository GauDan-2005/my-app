import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { parseISO, format } from "date-fns";

const EditNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: "",
    id: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getNote = async () => {
      const token = localStorage.getItem("userToken");
      if (params.id) {
        const res = await axios.get(`/api/notes/${params.id}`, {
          headers: { Authorization: token },
        });

        setNote({
          title: res.data.title,
          content: res.data.content,
          date: res.data.date,
          id: res.data._id,
        });
      }
    };
    getNote();
  }, [params.id]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const editSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("userToken");
      if (token) {
        const { title, content, date, id } = note;
        const newNote = { title, content, date };

        await axios.put(`/api/notes/${id}`, newNote, {
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
      <h2>Edit Note</h2>
      <form onSubmit={editSubmit} autoComplete="off">
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

export default EditNote;
