import React from "react";
import "./index.scss";
import { CiAirportSign1 } from "react-icons/ci";

function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <CiAirportSign1 />
            <h2>Electrochip</h2>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Header;
