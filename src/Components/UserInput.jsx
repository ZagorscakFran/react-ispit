import React from 'react';

const UserInput = ({ username, onInputChange, onButtonClick }) => {
  return (
    <div>
      <label>
        Enter Username:
        <input type="text" value={username} onChange={onInputChange} />
      </label>
      <button className="btn btn-outline-primary" onClick={onButtonClick}>Get data</button>
    </div>
  );
};

export default UserInput;