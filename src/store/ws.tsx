import React, { useRef } from 'react';


export const WebSocketContext = React.createContext<any>(null);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ children }: { children: React.ReactNode }) => {
  const socket_url = 'ws://localhost:3030/';
  const ws = useRef<WebSocket | null>(null);

  if (!ws.current) {
    ws.current = new WebSocket(socket_url);
    ws.current.onopen = () => {
      console.log('connected!');
    };
    ws.current.onclose = err => {
      console.log("disconnected!");
      console.log(err);
    };
    ws.current.onerror = err => {
      console.log(err);
    }
  }

  return (
    <WebSocketContext.Provider value={ws}>
      {children}
    </WebSocketContext.Provider>
  );
};
