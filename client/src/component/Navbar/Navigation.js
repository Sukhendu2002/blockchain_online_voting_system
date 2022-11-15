import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiBlockchaindotcom } from "react-icons/si";
import { AiOutlineUserAdd } from "react-icons/ai";

import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="header">
        <SiBlockchaindotcom className="logo" /> Home
      </Link>
      <ul
        className="navbar-links"
        style={{ width: "35%", transform: open ? "translateX(0px)" : "" }}
      >
        <li>
          <Link to="/Registration" activeClassName="nav-active">
            <AiOutlineUserAdd
              className="logo"
              style={{
                fontSize: "1.5rem",
              }}
            />{" "}
            {"  "}
            Registration
          </Link>
        </li>
        <li>
          <Link to="/Voting" activeClassName="nav-active">
            <i className="fas fa-vote-yea" /> Voting
          </Link>
        </li>
        <li>
          <Link to="/Results" activeClassName="nav-active">
            <i className="fas fa-poll-h" /> Results
          </Link>
        </li>
      </ul>
      <i onClick={() => setOpen(!open)} className="fas fa-bars burger-menu"></i>
    </nav>
  );
}
