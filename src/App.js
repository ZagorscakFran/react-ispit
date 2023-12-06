import React, { useState } from 'react';
import UserInput from './Components/UserInput';
import UserData from './Components/UserData';
import RepositoryList from './Components/RepositoryList';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const fetchData = async () => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();
      
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();

      setUserData({ ...userData });
      setRepositories(reposData || []);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  const handleResetClick = () => {
    setUserData(null);
    setRepositories([]);
    setUsername('');
  };

  return (
    <div className='container'>
      <h1 style={{ color: 'grey' }}>Github User App</h1>
      <UserInput username={username} onInputChange={handleInputChange} onButtonClick={handleButtonClick} />
      <UserData userData={userData} />
      <RepositoryList repositories={repositories} />
      <button className="btn btn-outline-danger" onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default App;


