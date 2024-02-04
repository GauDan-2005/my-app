import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from "./components/Footer";
import NoteBook from "./components/NoteBook";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = async () => {
    const token = localStorage.getItem("userToken");
    if (token) {
      const ver = await axios.get("/users/verify", {
        headers: { Authorization: token },
      });
      setIsLoggedIn(ver.data);
      if (ver.data === false) localStorage.clear();
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <NoteBook setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
      <Footer />
    </div>
  );
}

export default App;
