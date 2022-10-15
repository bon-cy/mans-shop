import React from "react";
import styles from "./produkts.module.css";
import { useSelector } from "react-redux";

const Carts = () => {
  const products = useSelector((state) => state.items);

  return (
    <div className={styles.produkts}>
      <div className={styles.content}>
        {products.map((item, el) => {
          return (
            <div className={styles.cart}>
              <div className={styles.img}>
                <img alt="" src={item.img} />
              </div>
              <div className={styles.pryce}>
                <b>Цена: {item.pryce}p</b>
              </div>
              <div className={styles.name}>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carts;






