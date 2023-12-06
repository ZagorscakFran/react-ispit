import React, { Component } from 'react';

class UserData extends Component {
  render() {
    const { userData } = this.props;

    return (
      <div>   
        {userData && (
          <div>
            <img src={userData.avatar_url} alt="User Avatar" style={{ width: '100px', borderRadius: '50%' }} />
            <p>Name: {userData.name}</p>
            <p>Location: {userData.location}</p>
            <p>Bio: {userData.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UserData;

  