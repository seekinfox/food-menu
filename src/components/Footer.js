import React from "react";
import style from "./Footer.module.scss";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className={style.footer__container}>
      <FiFacebook />
      <BsInstagram />
      <FiTwitter />
    </footer>
  );
}
