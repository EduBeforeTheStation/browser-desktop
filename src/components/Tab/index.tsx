import React from 'react';
import './style.css';

interface ITabProps {
  favicon: string;
  title: string;
  isClicked: boolean;
}

const Tab: React.FC<ITabProps> = ({ favicon, title, isClicked }) => {
  return (
    <div className={`tab_item ${isClicked ? 'clicked' : ''}`}>
      <img className="favicon" src={favicon} alt='favicon' />
      <p className={'site_title'}>&nbsp;{title}</p>
    </div>
  );
};

export default Tab;