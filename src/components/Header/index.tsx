import React, { useRef, useContext, useEffect } from 'react';
import Tab from '../Tab';
import { Context } from '../../store';
import './style.css';

const Header: React.FC = () => {
  const tablineRef = useRef(null);
  const tabMenuButtonClickHandler = () => {
    //alert('quit');
  };
  const { tabs }: any = useContext(Context);

  const trigger = () => {
    console.log('trick');
  };

  useEffect(() => {
    console.log('catch');
  }, [tabs]);

  return (
    <header className="header">
      <div className="tab_line" ref={tablineRef}>
        <div className="tabs_wrapper">{tabs.map(({ url, title }: { url: string, title: string }, i: number) => (
          <Tab idx={i} isClicked={true} />
        ))}</div>
        <div className="tab_menu_buttons_wrapper">
          <div className="tab_menu_button" onClick={tabMenuButtonClickHandler}>
            <img src='./assets/images/minimize.svg' alt='icon-x' />
          </div>
          <div id="full-btn" className="tab_menu_button" onClick={() => {
            (tablineRef?.current as any).click();
            (tablineRef?.current as any).click();
          }}>
            <img src='./assets/images/full.svg' alt='icon-x' />
          </div>
          <div id="quit-btn" className="tab_menu_button quit_btn" onClick={tabMenuButtonClickHandler}>
            <img src='./images/quit.svg' alt='icon-x' />
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
        <input type='text' className="search_box" />
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
