import React from "react";
import styles from "./produkts.module.css";
import { useSelector } from "react-redux";

const Carts = () => {
  const products = useSelector((state) => state.todos.todos);
  console.log(products);
  let cash = 100;

    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  
  function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  let rand = randomInteger(1,25)

  // for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  //   alert(i);
  // }



  return (
    <div className={styles.glav}>
      <div className={styles.header}>
        <div className={styles.logo}>1111</div>
        <div className={styles.name}>{rand}</div>
        <div className={styles.cash}>{cash} р</div>
      </div>
      <div className={styles.gameWind}>
        
       {arr.map((item,index) => {
        return(
          <div className={styles.mines}>{index}</div>
        )
       })}
      </div>
    </div>
  );
};

export default Carts;
