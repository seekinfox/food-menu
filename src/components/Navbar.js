import React from "react";
import logo from "../Assets/CompanyLogo.png";
import { GiKnifeFork } from "react-icons/gi";
import style from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <div>
        <GiKnifeFork />
        <img src={logo} alt="culinary kitchen" />
      </div>
    </nav>
  );
}
