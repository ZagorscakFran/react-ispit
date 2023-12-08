import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const UserInput = ({ username, onInputChange, fetchData, onReset }) => (
  <div style={{ marginTop: '20px'}}>
    <label>
      <input type="text" style={{ marginRight: '10px'}} placeholder='Enter Username...' value={username} onChange={onInputChange} />
    </label>
    <ButtonGroup aria-label="Basic example">
    <Button variant="outline-primary" onClick={fetchData}>Fetch Data</Button>
    <Button variant="outline-primary" onClick={onReset}>Reset Data</Button>
    </ButtonGroup>
  </div>
);

UserInput.propTypes = {
  username: PropTypes.string,
  onInputChange: PropTypes.func,
  fetchData: PropTypes.func,
  onReset: PropTypes.func,
};

export default UserInput;