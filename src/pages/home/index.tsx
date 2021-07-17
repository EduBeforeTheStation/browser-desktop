import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Context } from '../../store';
import Webview from '../../components/Webview';

const Home: React.FC = () => {
  const { tabs }: any = useContext(Context);
  return (
    <Layout>
      {tabs.map(({ url }: { url: string }, i: number) => <Webview idx={i} />)}
    </Layout>
  );
};

export default Home;
