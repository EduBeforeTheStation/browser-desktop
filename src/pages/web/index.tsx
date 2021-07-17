import Header from '../../components/Header';
import './style.css';

const Web = () => {

  return (
    <div>
      <Header />
      <webview className="webview" src='https://duckduckgo.com/'></webview>
    </div>
  );
}

export default Web;
