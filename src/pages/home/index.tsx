import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>home</h1>
      <Link to='/web'>덕덕고
      </Link>
    </div>
  );
};

export default Home;
