import styles from "../styles/Home.module.css";
import { changeLanguage } from "../utils/language";
import { LocalesType } from "../constants/locales";
import { Component } from "../types/global";

const Home: Component = (props) => {
  return (
    <div className={styles.container}>
      <button onClick={() => changeLanguage(LocalesType.FA)}>fa</button>
      <button onClick={() => changeLanguage(LocalesType.EN)}>en</button>
      <h1>{props.translate("hello", { name: "yashar" })}</h1>
    </div>
  );
};

export default Home;
