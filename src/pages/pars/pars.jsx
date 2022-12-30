import React from "react";
import styles from "./pars.module.css";
import { useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { addStavk } from "../../features/todoSlise";
const Pars = () => {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.todos.todos);
  const [text,setText] = useState([])



  const handleEnter = (e) => {
    let num = text + e.target.value;
    
    if (e.keyCode === 13 && num !== "") {
      setText(num)
      e.target.value = "";
     
    }
  };

  

  const handlePush = () => {
    dispatch(addStavk({text}))
    setText('')
  };

  return (
    <div className={styles.glav}>
       <div className={styles.zaglav}>Создайте аккаунт</div>
      <div className={styles.comb}>
        
        <div>{text}</div>
      </div>
      <button onClick={handlePush} className={styles.push}>
        Push
      </button>

      <div className={styles.inpDiv}>
        <input
          placeholder="Введите номер"
          onKeyDown={handleEnter}
          className={styles.inp}
          type="number"
        />
      </div>

      <div className={styles.shovArr}></div>
    </div>
  );
};

export default Pars;
