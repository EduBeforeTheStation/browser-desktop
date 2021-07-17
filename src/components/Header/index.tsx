import React, { useRef, useContext, useEffect } from 'react';
import Tab from '../Tab';
import { Context } from '../../store';
import './style.css';

const Header: React.FC = () => {
  const url = 'https://duckduckgo.com';
  const tablineRef = useRef(null);
  const tabMenuButtonClickHandler = () => {
    //alert('quit');
  };

  const Tabs = [
    <Tab favicon={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`} idx={1} title={'김병주'} isClicked={true} />,
    <Tab favicon={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`} idx={2} title={'강태영'} isClicked={false} />
  ];


  return (
    <header className="header">
      <div className="tab_line" ref={tablineRef}>
        <div className="tabs_wrapper">{Tabs}</div>
        <div className="tab_menu_buttons_wrapper">
          <div className="tab_menu_button" onClick={tabMenuButtonClickHandler}>
            <img src='./images/minimize.svg' alt='icon-x' />
          </div>
          <div id="full-btn" className="tab_menu_button" onClick={() => {
            (tablineRef?.current as any).click();
            (tablineRef?.current as any).click();
          }}>
            <img src='./images/full.svg' alt='icon-x' />
          </div>
          <div id="quit-btn" className="tab_menu_button quit_btn" onClick={tabMenuButtonClickHandler}>
            <img src='./images/quit.svg' alt='icon-x' />
          </div>
        </div>
      </div>
      <div className="control_bar_wrapper">
        <button className="control_button">
          <img src="./images/go-back.svg" alt='icon-go-back' />
        </button>
        <button className="control_button">
          <img src="./images/go-front.svg" alt='icon-go-forward' />
        </button>
        <button className="control_button">
          <img src="./images/reload.svg" alt='icon-reload' />
        </button>
        <input type='text' className="search_box" />
        <button className="control_button">
          <img src="./images/star.svg" alt='icon-bookmark' />
        </button>
        <button className="control_button">
          <img src="./images/menu.svg" alt='icon-menu' />
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
