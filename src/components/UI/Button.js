import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, type, clickHandler }) => {
  return (
    <button
      type={type || 'button'}
      className={styles.button}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
