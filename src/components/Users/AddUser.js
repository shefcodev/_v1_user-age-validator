import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = ({ target: { value } }) => {
    setEnteredUsername(value);
  };

  const ageChangeHandler = ({ target: { value } }) => {
    setEnteredAge(value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
