import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>home</h1>
      <Link to='/web'>덕덕고
      </Link>
    </Layout>
  );
};

export default Home;
