import React from "react";
import styles from "./button.module.css";

export default function Button({ isOutline, icon, text, ...rest }){
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};