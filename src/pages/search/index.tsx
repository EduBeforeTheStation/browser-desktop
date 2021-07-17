import path from 'path';
import Header from '../../components/Header';
import * as isDev from 'electron-is-dev';
import './style.css';

const Web = () => {

    const engine = "duckduckgo";

    return (
        <div>
            <webview className="webview" src={isDev ? `http://localhost:3000/${engine}.html` : `file://${__dirname}/build/${engine}.html`}></webview>
        </div>
    );
}

export default Web;
