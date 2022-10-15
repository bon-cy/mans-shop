import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  

  
  return (
    <div className={styles.header}>
      <div className={styles.logo}>boncyShop</div>
      <Link to="/" className={styles.glav}>главная</Link>
      
      <Link to="/ok" className={styles.glav}>корзина</Link>
      <Link to="/products" className={styles.glav}>товары</Link>
      <Link to="/ok" className={styles.glav}>регистрация</Link>
      <Link to="/ok" className={styles.glav}>о нас</Link>
    </div>
  );
};

export default Header;
