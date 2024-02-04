import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CreateNote from "./notes/CreateNote";
import EditNote from "./notes/EditNote";
import Home from "./notes/Home";
import Nav from "./notes/Nav";

const NoteBook = ({ setIsLoggedIn }) => {
  return (
    <Router>
      <div>
        <Nav setIsLoggedIn={setIsLoggedIn} />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<EditNote />} />
            <Route path="/create" element={<CreateNote />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default NoteBook;
