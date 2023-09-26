import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, type, onClickHandler }) => {
  return (
    <button
      type={type || 'button'}
      className={styles.button}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
