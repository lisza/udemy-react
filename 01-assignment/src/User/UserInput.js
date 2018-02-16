import React from 'react';

const userInput = (props) => {
  const style = {
    margin: '40px auto'
  }
  
  return (
    <div style={style}>
      <label>New Username: </label>
      <input
        type="text"
        onChange={props.change}
        value={props.username}/>
    </div>
  );
};

export default userInput;
