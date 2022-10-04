import styles from "../styles/Home.module.css";
import { changeLanguage } from "@utils/language";
import { LocalesType } from "@constants/locales";
import { Component } from "~types/global";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { decrement, increment } from "@redux/counter";
import { useEffect } from "react";
import { API, sendRequest } from "@libs/API/requestFactory";
import { GET_PHOTO_LIST } from "@libs/API/endpoints";

const Home: Component = (props) => {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const incrementFN = () => {
    dispatch(increment());
  };

  const decrementFN = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    sendRequest(GET_PHOTO_LIST).then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div className={styles.container}>
      <button onClick={() => changeLanguage(LocalesType.FA)}>fa</button>
      <button onClick={() => changeLanguage(LocalesType.EN)}>en</button>
      <h1>{props.translate("hello", { name: "yashar" })}</h1>

      <h1>Counter</h1>
      <button onClick={incrementFN}> +</button>
      <h2>{counter.value}</h2>
      <button onClick={decrementFN}> +</button>
    </div>
  );
};

export default Home;
