import React, { useCallback, useState } from 'react';


export const Context = React.createContext({});
export const init = { image1: { useable: false }, image2: { useable: false }, };

const Container: React.FC<{ children: React.ReactNode }> = (props) => {
  const defaultTab = {
    url: 'https://duckduckgo.com',
    history: ['/'],
  };

  const [tabs, setTabs] = useState([defaultTab]);

  const addTab = useCallback(() => {
    setTabs([...tabs, defaultTab]);
  }, [tabs]);

  const removeTab = useCallback((idx: number) => {
    const new_tabs = tabs;
    setTabs(new_tabs.splice(idx));
  }, [tabs]);

  return (
    <Context.Provider value={{ tabs, addTab, removeTab }}>
      {props.children}
    </Context.Provider>
  );
};

export default Container;
