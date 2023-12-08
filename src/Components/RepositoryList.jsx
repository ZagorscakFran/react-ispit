import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import PropTypes from 'prop-types';

const RepositoryList = ({ repos }) => (
  <div>
    <ListGroup style={{ width: "30rem", marginTop: '10px' }}>
      {repos.map((repo) => (
        <ListGroup.Item style={{ textAlign: 'center'}} key={repo.id}>{repo.name}</ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);

RepositoryList.propTypes = {
    repos: PropTypes.array,
  };


export default RepositoryList;

