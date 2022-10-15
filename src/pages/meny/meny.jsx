import React from "react";
import { useDispatch } from "react-redux";

import styles from "./meny.module.css";
import { useState } from "react";
import { braslet, colsa, inPryce, repite, obuv } from "../../features/todoSlise";
const Meny = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(repite());
    dispatch(braslet());
  };

  const handleClick1 = () => {
    dispatch(repite());
    dispatch(colsa());
  };

  const handleClick2 = () => {
    dispatch(repite());
  };

  const handleClick3 = () => {
    dispatch(repite())
    dispatch(obuv())
  }

  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSearch = () => {
    dispatch(inPryce(text));
  };

  return (
    <div className={styles.meny}>
      <div className={styles.cont}>
        <div className={styles.butCont}>
          <button className={styles.button} onClick={handleClick2}>
            Все
          </button>
        </div>

        <div className={styles.butCont}>
          <button className={styles.button} onClick={handleClick}>
            Браслеты
          </button>
        </div>

        <div className={styles.butCont}>
          <button className={styles.button} onClick={handleClick1}>
            Кольца
          </button>
        </div>

        <div className={styles.butCont}>
          <button className={styles.button} onClick={handleClick3}>
            Ботинки
          </button>
        </div>

        <div className={styles.inp}>
          <input
            className={styles.in}
            type="number"
            value={text}
            onChange={handleText}
          />
          <button
            disabled={text === ""}
            className={styles.inpBut}
            onClick={handleSearch}
          >
            {" "}
            макс цена
          </button>
        </div>
      </div>

    
    </div>
  );
};

export default Meny;
