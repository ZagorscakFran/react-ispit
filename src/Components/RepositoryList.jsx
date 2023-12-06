import React from 'react';
import './Components.css'

const RepositoryList = ({ repositories }) => {
  return (
    <div>
      {repositories && (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>
              <p>Repository Name: {repo.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoryList;

