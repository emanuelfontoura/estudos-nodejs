import React from "react";
import styles from "./Input.module.css"

const Input = ({type, label, id, placeholder, error, ...props}) => {
    return <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>{label}</label>
        <input className={styles.input} id={id} name={id} type={type} placeholder={placeholder} {...props}/>
        {error && <p className={styles.error}>{error}</p>}
    </div>
}

export default Input