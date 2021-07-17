import React, { useCallback, useState } from 'react';


export const Context = React.createContext({});
export const init = { image1: { useable: false }, image2: { useable: false }, };

const Container: React.FC<{ children: React.ReactNode }> = (props) => {
  const defaultTab = {
    url: 'https://duckduckgo.com',
    title: '',
    history: ['/'],
  };

  const [functions, setFunctions] = useState([async function() { return 'fdaf'}]);

  const [tabs, setTabs] = useState([defaultTab]);

  const addTab = useCallback(() => {
    setTabs([...tabs, defaultTab]);
  }, [tabs]);

  const removeTab = useCallback((idx: number) => {
    const new_tabs = tabs;
    setTabs(new_tabs.splice(idx));
  }, [tabs]);

  const updateTab = useCallback((idx: number, data: any) => {
    const new_tabs = tabs;
    new_tabs[idx] = data;
    setTabs(new_tabs);
    Promise.all([functions])
  }, [tabs]);


  const addFunctions = (func: any) => {
    if (functions) {
      setFunctions([...functions, func]);
    }
  };

  return (
    <Context.Provider value={{ tabs, addTab, removeTab, updateTab, addFunctions }}>
      {props.children}
    </Context.Provider>
  );
};

export default Container;
