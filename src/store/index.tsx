import React, { useCallback, useState } from 'react';


export const Context = React.createContext({});

const Container: React.FC<{ children: React.ReactNode }> = (props) => {
  const defaultTab = {
    url: '/selectengine.html',
    title: '',
    isClicked: true,
    history: [],
  };

  const [tabs, setTabs] = useState([defaultTab]);

  const tabClickedIgnore = useCallback((idx: number) => {
    const new_tabs = tabs;
    new_tabs.forEach((tab, i: number) => {
      if (i !== idx) {
        tab.isClicked = false;
      }
    });
  }, [tabs]);

  const addTab = () => {
    const new_tabs = tabs.slice();
    console.log(new_tabs);
    tabClickedIgnore(new_tabs.length);
    new_tabs.push(defaultTab);
    setTabs(new_tabs);
  };

  const removeTab = (idx: number) => {
    let new_tabs = tabs;
    new_tabs = new_tabs.splice(idx);
    new_tabs[idx - 1].isClicked = true;
    setTabs(new_tabs);
    tabClickedIgnore(idx -1);
  };

  const updateTab = (idx: number, data: any) => {
    const new_tabs = tabs.slice();
    console.log(data);
    new_tabs[idx] =  { ...new_tabs[idx], ...data };
    setTabs(new_tabs);
    tabClickedIgnore(idx);
  };

  return (
    <Context.Provider value={{ tabs, addTab, removeTab, updateTab }}>
      {props.children}
    </Context.Provider>
  );
};

export default Container;
