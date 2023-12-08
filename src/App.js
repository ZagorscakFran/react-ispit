import React, { useState } from 'react';
import UserInput from './Components/UserInput';
import UserData from './Components/UserData';
import RepositoryList from './Components/RepositoryList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const fetchData = async () => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        console.error('Error fetching user data:', userResponse.statusText);
        return;
      }
      const userData = await userResponse.json();
      setUserData(userData);

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!reposResponse.ok) {
        console.error('Error fetching repositories:', reposResponse.statusText);
        return;
      }
      const reposData = await reposResponse.json();
      setUserRepos(reposData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleReset = () => {
    setUsername('');
    setUserData(null);
    setUserRepos([]);
  };

  return (
    <div className='container'>
      <UserInput
        username={username}
        onInputChange={handleInputChange}
        fetchData={fetchData}
        onReset={handleReset}
      />
      {userData && <UserData user={userData} />}
      {userRepos.length > 0 && <RepositoryList repos={userRepos} />}
    </div>
  );
};

export default App;


