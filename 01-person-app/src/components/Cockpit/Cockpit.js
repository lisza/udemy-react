import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {

  // Array of css classNames to create a valid css classNames list
  // (using join(' ') later when assigned):
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons <= 1) {
    assignedClasses.push(styles.bold);
  }

  let btnClass = '';
  if (props.show) {
    // NEW, with css modules:
    // styles.Red translates to a string after processing
    btnClass = styles.Red;
  }


  return (
    <div className={styles.Cockpit}>
      <h1>{ props.appTitle }</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >Toggle Persons</button>
    </div>
  );
};

export default cockpit;
