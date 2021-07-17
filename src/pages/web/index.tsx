import Tab from '../../components/Tab';
import './style.css';

const Web = () => {
  const url = 'https://duckduckgo.com';

  return (
    <div>
      <div className="tabs_wrapper">
        <Tab favicon={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`} title={'김병주'} isClicked={true} />
        <Tab favicon={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`} title={'강태영'} isClicked={false} />
        <div>
          <img src='' alt='icon-x' />
        </div>
      </div>
      <webview className="webview" src='https://duckduckgo.com/'></webview>
    </div>
  );
}

export default Web;
