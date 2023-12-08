import Card from "react-bootstrap/Card";
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserData extends Component {
  render() {
    const { user } = this.props;

    return (
        <Card style={{ width: "20rem", marginTop: '10px'}}>
        <Card.Img variant="top" src={user.avatar_url} alt={`${user.login}'s avatar`} />
        <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Title>Location: {user.location}</Card.Title>
        <Card.Text>Bio: {user.bio}</Card.Text>
        </Card.Body>
        </Card>
    );
  }
}

UserData.propTypes = {
    user: PropTypes.object,
  };

export default UserData;

  