import React from "react";

const y = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {y}</p>
    </footer>
  );
}

export default Footer;
