import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="Page-name">
        <h1>Group Study</h1>
      </div>
      <div className="user-profile">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="User Avatar"
        />
      </div>
    </header>
  );
}

export default Header;
