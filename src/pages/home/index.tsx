import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Context } from '../../store';
import Webview from '../../components/Webview';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const { tabs }: any = useContext(Context);
  return (
    <main>
      <Header />
      {tabs.map(({ url }: any, i: number) => <Webview idx={i} />)}
    </main>
  );
};

export default Home;
