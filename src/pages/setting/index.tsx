import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';


const Setting: React.FC = () => {
  return (
    <div>
      <Header />
      <Link to='/'>홈</Link>
    </div>
  );
};

export default Setting;
