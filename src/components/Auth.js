import React from "react";
import styles from "./Auth.module.css";
import { useDispatch} from "react-redux";
import { authActions } from "../store";

function Auth() {
    const dispatch = useDispatch();
    const loginHandler = (e)  => {
        e.preventDefault();
        dispatch(authActions.login())
    }
  return <div className={styles.auth}>
    <form className={styles['auth-form']} onSubmit={loginHandler}>
        <div className={styles['auth-form__input']}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
        </div>
        <div className={styles['auth-form__input']}>
            <label htmlFor="password">Pasword</label>
            <input type="password" name="password" id="password" />
        </div>
        <div className={styles.actions}>
            <button type="submit">Login</button>
        </div>
    </form>
  </div>;
}

export default Auth;
