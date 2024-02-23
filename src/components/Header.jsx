import React from "react";
import "../index.css";

function Header({title}) {
  return (
    <div className="nav-br">
      <header>{title}</header>
    </div>
  );
}

export default Header;
