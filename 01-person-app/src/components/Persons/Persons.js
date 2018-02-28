// Functional component that receives props
import React from 'react';
import Person from './Person/Person';

// Use one-line arrow function with implicit return,
// use parentheses to make it a multi-liner
const persons = (props) => (
  props.persons.map((person, index) => {
    return <Person
      name={person.name}
      age={person.age}
      key={`person-${index}`}
      click={() => props.clicked(index)}
      changed={(event) => props.changed(event, index)}
    />
  })
);

export default persons;
