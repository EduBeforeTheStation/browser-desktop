import { WebContents } from 'electron';
import React, { useEffect, useRef, useContext } from 'react';
import { Context } from '../../store';
import { WebSocketContext } from '../../store/ws';
import './style.css';

const Webview: React.FC<any> = ({ idx }) => {
  const { tabs, updateTab }: any = useContext(Context);
  const ws = useContext(WebSocketContext);
  const webviewRef = useRef(null);

  useEffect(() => {
    const current: any = webviewRef?.current;
    if (current) {
      current.addEventListener('dom-ready', () => {
        const data: any = tabs[idx];
        console.log(data.history);
        const url = current.getURL();
        const title = current.getTitle();
        data.url = url;
        data.title = title;
        updateTab(idx, data);
      });
      current.addEventListener('will-navigate', () => {
        if (new URL(current.getURL()).protocol == "http:")
        if (!confirm("지금 가려는 사이트는 https가 아닙니다.\n정말 가시겠습니까?"))
          current.goBack();
      });
      ws.current.send(JSON.stringify({
        channel: 'visit',
        data: {
          title: current.getTitle(),
          url: current.getURL(),
        },
      }));
    }
  }, []);

  return (
    <webview id={`webview_${idx}`} className="webview" ref={webviewRef} src={tabs[idx].url} style={{ display: tabs[idx].isClicked ? 'inline-flex' : 'none' }}></webview>
  );
};

export default Webview;
