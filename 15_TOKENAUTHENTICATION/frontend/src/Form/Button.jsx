import React from "react";
import styles from "./Button.module.css"

const Button = ({contentText, ...props}) => {
    return <button {...props} className={styles.button}>{contentText}</button>
}

export default Button