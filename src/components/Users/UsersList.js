import React from 'react';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map(({ username, age, id }) => (
          <li key={id}>{`${username} (${age} years old)`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
