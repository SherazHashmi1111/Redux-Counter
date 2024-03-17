import React from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };
  return (
    <div className={styles.header}>
      <nav className={styles.header__nav}>
        <h2 className={styles.header__heading}>Redux App</h2>
        {isAuth && <ul className={styles.header__nav__ul}>
          <li>My Products</li>
          <li>My Sales</li>
          <button onClick={logoutHandler}>Logout</button>
        </ul>}
      </nav>
    </div>
  );
}

export default Header;
