import { WebContents } from 'electron';
import React, { useEffect, useRef, useContext } from 'react';
import { Context } from '../../store';
import './style.css';

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
      current.addEventListener('will-navigate', () => {
        if (new URL(current.getURL()).protocol != "https:")
        if (!confirm("지금 가려는 사이트는 https가 아닙니다.\n정말 가시겠습니까?\n\n(설정에서 끌 수 있습니다.)"))
          current.goBack();
      });
    }
  }, []);

  return (
    <webview className="webview" ref={webviewRef} src={tabs[idx].url}></webview>
  );
};

export default Webview;
