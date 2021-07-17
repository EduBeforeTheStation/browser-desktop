import React, { useContext } from 'react';
import { Context } from '../../store';
import './style.css';

interface ITabProps {
  isClicked: boolean;
  idx: number;
}

const Tab: React.FC<ITabProps> = ({ idx, isClicked }) => {
  const { tabs, removeTabs }: any = useContext(Context);

  const favicon = `https://s2.googleusercontent.com/s2/favicons?domain=${tabs[idx].url}`;

  return (
    <div className={`tab_item ${isClicked ? 'clicked' : ''}`}>
      <img className="favicon" src={favicon} alt='favicon' />
      <p className={'site_title'}>&nbsp;{tabs[idx].title}</p>
      {isClicked ?? <p onClick={() => removeTabs(idx)}>X</p>}
    </div>
  );
};

export default React.memo(Tab);
