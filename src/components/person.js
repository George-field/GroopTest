import React from 'react';

const Person = ({name, age, id}) => {
    return (
      <div id={id} >
        <h1>Name:{name}</h1>
        <h2>age:{age}</h2>
        <button>View Details</button>
      </div>
    );
  };

export default Person;