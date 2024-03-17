import React from "react";
import styles from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const ShowCounter = useSelector((state) => state.counter.ShowCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <div className={styles.counter}>
      <p className={styles.counter__heading}>Redux Counter</p>
      <div className={styles.counter__count}>{counter}</div>
      {ShowCounter && (
        <div className={styles.counter__actions}>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      )}
      <button className={styles.counter__toggle} onClick={toggleHandler}>
        Toggle Counter
      </button>
    </div>
  );
}

export default Counter;
