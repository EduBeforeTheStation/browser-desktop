import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>home</h1>
      <Link to='/web'>덕덕고
      </Link>
    </div>
  );
};

export default Home;
