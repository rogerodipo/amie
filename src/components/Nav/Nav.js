import { React, useState } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const [navOut, setNavOut] = useState(false);

  const toggleNav = () => {
    if (navOut) {
      return styles.navOut;
    } else {
      return "";
    }
  };

  const changeBurger = () => {

  }

  return (
    <div className={styles.nav}>
      <h1 className={styles.title}>
        <span>amie</span>hospital
      </h1>
      <div className={styles.navItemsContainer + " " + toggleNav()}>
        
      </div>
      <div
        className={styles.burger}
        onClick={() => setNavOut(!navOut)}
      >
        <div className = {navOut? styles.rotateRight : ""} />
        <div className = {navOut? styles.disappear : ""} />
        <div className = {navOut? styles.rotateLeft : ""} />
      </div>
    </div>
  );
};

export default Nav;
