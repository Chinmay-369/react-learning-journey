import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
      <p>Current name value is: {props.name}</p>
    </div>
  );
};

export default Card;


//props pasisng data from parent to child
// State-lifting passing data form cbild to parent