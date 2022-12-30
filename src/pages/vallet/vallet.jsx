import React from "react";
import styles from "./vallet.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStavk } from "../../features/todoSlise";
import { useNavigate } from "react-router-dom";

const Vallet = () => {
  const dispatch = useDispatch();

  const [typ, setTyp] = useState("text");
  const [text, setText] = useState("Номер телефона");
  const [text1, setText1] = useState("Пароль");
  const [scale, setScale] = useState(styles.vhod);
  const [vind, setVind] = useState(styles.vallWind);
  const [collor, setCollor] = useState("black");

  const navigate = useNavigate();
  const goHome = () => navigate("/products");

  //////////////////////////////////////////////////////////////////////

  const sov = {
    number: text,
    passvord: text1,
  };

  const handlePush = () => {
    dispatch(addStavk(sov));
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleText1 = (e) => {
    setText1(e.target.value);
  };

  const handleClear = () => {
    if (text === "Номер телефона") {
      setTyp("number");
      setText("");
    }
  };
  const handleClear1 = () => {
    if (text1 === "Пароль") {
      setText1("");
    }
  };

  const handleValueClear = () => {
    if (text === "") {
      setTyp("text");
      setText("Номер телефона");
    }
  };
  const handleValueClear1 = () => {
    if (text1 === "") {
      setText1("Пароль");
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  const passvords = useSelector((state) => state.todos.todos);

  const not = () => {
    setVind(styles.notVallWind);
    setTimeout(() => {
      setVind(styles.notVallWind1);
    }, 100);
    setTimeout(() => {
      setVind(styles.vallWind)
    }, 200);

    
 
  };

  const test = () => {
    let numText = Number(text);

    const fillBass = passvords.filter((el) => {
      return Number(el.number) === numText;
    });

    if (
      Number(fillBass[0]?.number) === numText &&
      fillBass[0]?.passvord === text1
    ) {
      console.log("верно");
      setCollor("black");
      goHome();
    } else {
      setCollor("red");
      not();
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleVhod = () => {
    if (scale === styles.vhod) {
      setCollor("black");
      setVind(styles.vallWind1);
      setTimeout(() => {
        setScale(styles.vhod1);
      }, 600);
    } else {
      setCollor("black");
      setScale(styles.vhod);
      setTimeout(() => {
        setVind(styles.vallWind);
      }, 600);
    }
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className={styles.glav}>
      <div className={vind}>
        <div className={styles.text} add>
          Вход
        </div>
        <input
          className={styles.inp}
          type={typ}
          value={text}
          onChange={handleText}
          onMouseDown={handleClear}
          onBlur={handleValueClear}
        />
        <div className={styles.numbValid} style={{ color: collor }}>
          неверный номер или пароль
        </div>
        <input
          className={styles.inp2}
          type="text"
          value={text1}
          onChange={handleText1}
          onMouseDown={handleClear1}
          onBlur={handleValueClear1}
        />
        <div className={styles.passValid} style={{ color: collor }}>
          неверный номер или пароль
        </div>
        <button className={styles.reg} onClick={test}>
          Войти
        </button>

        <div className={styles.buttons}>
          <div className={styles.text1}>У меня нет аккаунта</div>
          <button className={styles.but} onClick={handleVhod}>
            зарегистрироватся
          </button>
        </div>
      </div>

      <div className={scale}>
        <div className={styles.text} add>
          Регистрация
        </div>
        <input
          className={styles.inp}
          type={typ}
          value={text}
          onChange={handleText}
          onMouseDown={handleClear}
          onBlur={handleValueClear}
        />
        <input
          className={styles.inp2}
          type="text"
          value={text1}
          onChange={handleText1}
          onMouseDown={handleClear1}
          onBlur={handleValueClear1}
        />
        <button className={styles.reg} onClick={handlePush}>
          Зарегистрироватся
        </button>

        <div className={styles.buttons}>
          <div className={styles.text1}>У меняуже есть аккаунт</div>
          <button className={styles.but} onClick={handleVhod}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vallet;
