import React, { useContext } from 'react';
import { Context } from '../../store';
import Webview from '../../components/Webview';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const { tabs }: any = useContext(Context);
  return (
    <>
      <Header />
      {tabs.map(({ url }: any, i: number) => <Webview idx={i} />)}
    </>
  );
};

export default Home;
