import React, { useEffect, useRef, useContext } from 'react';
import { Context } from '../../store';

const Webview: React.FC<any> = ({ idx }) => {
  const { tabs, updateTab }: any = useContext(Context);
  const webviewRef = useRef(null);

  useEffect(() => {
    const current: any = webviewRef?.current;
    if (current) {
      (webviewRef.current as any)?.addEventListener('dom-ready', () => {
        const data: any = tabs[idx];
        console.log(data.history);
        const url = current.getURL();
        const title = current.getTitle();
        data.url = url;
        data.title = title;
        data.history.push(url);
        updateTab(idx, data);
      });
    }
  }, []);

  return (
    <webview className="webview" ref={webviewRef} src={tabs[idx].url} style={{ display: tabs[idx].isClicked ? 'block' : 'none' }}></webview>
  );
};

export default Webview;
