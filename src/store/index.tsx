import React, { useCallback, useState } from 'react';


export const Context = React.createContext({});

const Container: React.FC<{ children: React.ReactNode }> = (props) => {
  const defaultTab = {
    url: 'https://duckduckgo.com',
    title: '',
    isClicked: false,
    history: ['/'],
  };

  const [tabs, setTabs] = useState([defaultTab]);

  const addTab = useCallback(() => {
    const new_tab = defaultTab;
    new_tab.isClicked = true;
    setTabs([...tabs, new_tab]);
  }, [tabs]);

  const removeTab = useCallback((idx: number) => {
    let new_tabs = tabs;
    new_tabs = new_tabs.splice(idx);
    new_tabs[new_tabs.length - 1].isClicked = true;
    setTabs(new_tabs);
  }, [tabs]);

  const updateTab = useCallback((idx: number, data: any) => {
    const new_tabs = tabs;
    new_tabs[idx] =  { ...defaultTab, ...data };
    setTabs(new_tabs);
  }, [tabs]);

  return (
    <Context.Provider value={{ tabs, addTab, removeTab, updateTab }}>
      {props.children}
    </Context.Provider>
  );
};

export default Container;
