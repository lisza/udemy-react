import React from 'react';

const userOutput = (props) => {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid #eee',
    boxShadow: '0 3px 3px #ccc',
    padding: '15px',
    margin: '20px auto',
    width: '60%'
  };
  
  return (
    <div style={style}>
      <p>Author: {props.username}</p>
      <p>Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual.</p>
    </div>
  );
};

export default userOutput;
