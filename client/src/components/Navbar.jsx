import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState("false");
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        ccdev
      </a>
      <div className={styles.menu}>
        {menuOpen ? (
          <IoMdClose
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "white", cursor: "pointer" }}
            size={35}
          />
        ) : (
          <GiHamburgerMenu
            style={{ color: "white", display: "block", cursor: "pointer" }}
            className={styles.menuBtn}
            size={35}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/about">Projects</a>
          </li>
          <li>
            <a href="/about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
