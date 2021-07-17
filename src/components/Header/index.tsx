import React, { useRef, useContext, useEffect, useState, useCallback } from 'react';
import Tab from '../Tab';
import { Context } from '../../store';
import './style.css';

const Header: React.FC = () => {
  const [isBookmark, setIsBookmark] = useState<boolean>(false);
  const [inputURL, setInputURL] = useState<string>('');
  const tablineRef = useRef(null);
  const searchRef = useRef(null);
  const reloadBtnRef = useRef(null);
  const tabMenuButtonClickHandler = () => {
    //alert('quit');
  };
  const { tabs, addTab, updateTab }: any = useContext(Context);

  const clickBookmarkButtonHandler = () => setIsBookmark(!isBookmark); // fake

  const clickGoBackButtonHandler = () => {
    console.log('fdafd');
    tabs.forEach((tab: any, i: number) => {
      if (tab.isClicked) {
        const new_data = tabs[i];
        if (new_data.history.length !== 1) {
          new_data.url = new_data.history[new_data.history.length - 2];
          new_data.history.pop();
        }
      }
    });
  };

  const searchBoxChangeHandler = useCallback((e: any) => {
    console.log(e.target.value);
    setInputURL(e.target.value);
  }, [inputURL]);

  const searchFormSubmitHandler = useCallback((e: any) => {
    e.preventDefault();
      tabs.forEach((tab: any, i: number) => {
        if (tab.isClicked) {
          const new_data = tabs[i];
          let url = inputURL;
          if (new URL(inputURL).protocol == "http:")
          if (!confirm("지금 가려는 사이트는 https가 아닙니다.\n정말 가시겠습니까?"))
            new_data.history.goBack();
          if (inputURL.indexOf('https') === -1 && inputURL.indexOf('http') === -1) {
            url = `https://duckduckgo.com/?q=${inputURL}`;
            setInputURL(url); 
          }
          new_data.url = url;
          new_data.history.push(url);
          console.log('new_data', new_data);
          (searchRef?.current as any).blur();
          updateTab(i, new_data);
        }
      });
  }, [inputURL]);

  return (
    <header className="header">
      <div className="tab_line" ref={tablineRef}>
        <div className="tabs_wrapper">
          {tabs.map(({ url }: { url: string }, i: number) => <Tab idx={i} />)}
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
        <button className="control_button" onClick={clickGoBackButtonHandler}>
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
        <button className="control_button" onClick={clickBookmarkButtonHandler}>
          <img src={`./assets/images/${isBookmark ? 'starselect' : 'star'}.svg`} alt='icon-bookmark' />
        </button>
        <button className="control_button" onClick={() => {
          addTab();
        }}>
          <img src="./assets/images/menu.svg" alt='icon-menu' />
        </button>
      </div>
    </header>
  );
};

export default Header;
