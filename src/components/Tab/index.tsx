import React, { useContext } from 'react';
import { Context } from '../../store';
import './style.css';

interface ITabProps {
  idx: number;
}

const Tab: React.FC<ITabProps> = ({ idx  }) => {
  const { tabs, removeTabs, updateTab }: any = useContext(Context);

  const favicon = `https://s2.googleusercontent.com/s2/favicons?domain=${tabs[idx].url}`;

  const isClicked = tabs[idx].isClicked;

  const clickTabHandler = () => {
    console.log('yes');
    updateTab(idx, { isClicked: true });
  };

  return (
    <div className={`tab_item ${isClicked ? 'clicked' : ''}`} onClick={clickTabHandler}>
      <img className="favicon" src={favicon} alt='favicon' />
      <p className={'site_title'}>&nbsp;{tabs[idx].title}</p>
      {isClicked ?? <p onClick={() => removeTabs(idx)}>X</p>}
    </div>
  );
};

export default Tab;
