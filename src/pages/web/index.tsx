import Header from '../../components/Header';
import './style.css';
import { Context } from '../../store';
import { useContext } from 'react';
import Webview from '../../components/Webview';

const Web: React.FC = () => {
  const { tabs }: any = useContext(Context);

  return (
    <>
      <Header />
      {tabs.map(({ url }: any, i: number) => <Webview idx={i} />)}
    </>
  );
}

export default Web;
