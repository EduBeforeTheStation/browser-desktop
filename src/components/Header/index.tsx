import React, { useRef, useContext, useEffect, useState, useCallback } from 'react';
import Tab from '../Tab';
import { Context } from '../../store';
import './style.css';


const Header: React.FC = () => {
  const [inputURL, setInputURL] = useState<string>('');
  const tablineRef = useRef(null);
  const searchRef = useRef(null);
  const tabMenuButtonClickHandler = () => {
    //alert('quit');
  };
  const { tabs, addTab, updateTab }: any = useContext(Context);

  const searchBoxChangeHandler = useCallback((e: any) => {
    console.log(e.target.value);
    setInputURL(e.target.value);
  }, [inputURL]);

  const searchFormSubmitHandler = useCallback((e: any) => {
    e.preventDefault();
      tabs.forEach((tab: any, i: number) => {
        if (tab.isClicked) {
          const new_data = tabs[i];
          new_data.url = inputURL;
          new_data.history.push(inputURL);
          console.log(inputURL);
          console.log('new_data', new_data);
          (searchRef?.current as any).blur();
          updateTab(i, new_data);
        }
      });
      setInputURL('');
  }, [inputURL]);

  return (
    <header className="header">
      <div className="tab_line" ref={tablineRef}>
        <div className="tabs_wrapper">
          {tabs.map(({ url }: { url: string }, i: number) => <Tab idx={i}/>)}
        </div>
        <div className="tab_menu_buttons_wrapper">
          <div className="tab_menu_button" onClick={() => addTab()}>
            <img src='./assets/images/minimize.svg' alt='icon-x' />
          </div>
          <div id="full-btn" className="tab_menu_button" onClick={() => {
            (tablineRef?.current as any).click();
            (tablineRef?.current as any).click();
          }}>
            <img src='./assets/images/full.svg' alt='icon-x' />
          </div>
          <div id="quit-btn" className="tab_menu_button quit_btn" onClick={tabMenuButtonClickHandler}>
            <img src='./assets/images/quit.svg' alt='icon-x' />
          </div>
        </div>
      </div>
      <div className="control_bar_wrapper">
        <button className="control_button">
          <img src="./assets/images/go-back.svg" alt='icon-go-back' />
        </button>
        <button className="control_button">
          <img src="./assets/images/go-front.svg" alt='icon-go-forward' />
        </button>
        <button className="control_button">
          <img src="./assets/images/reload.svg" alt='icon-reload' />
        </button>
        <form className="search_form" onSubmit={searchFormSubmitHandler}>
          <input type='text' ref={searchRef} className="search_box" onChange={searchBoxChangeHandler} value={inputURL} />
        </form>
        <button className="control_button">
          <img src="./assets/images/star.svg" alt='icon-bookmark' />
        </button>
        <button className="control_button">
          <img src="./assets/images/menu.svg" alt='icon-menu' />
        </button>
      </div>
      <div className="bookmark_bar">
        <div className="bookmark_item">
          
        </div>
      </div>
    </header>
  );
};

export default Header;
