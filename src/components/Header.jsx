import React from "react";
import "../index.css";

function Header() {
  return (
    <div className="nav-br">
      <header>CodeSpan</header>

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
}

export default Header;
