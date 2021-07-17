import React, { useContext } from 'react';
import { Context } from '../../store';
import './style.css';

interface ITabProps {
  favicon: string;
  title: string;
  isClicked: boolean;
  idx: number;
}

const Tab: React.FC<ITabProps> = ({ idx, favicon, title, isClicked }) => {
  const { removeTabs }: any = useContext(Context);

  return (
    <div className={`tab_item ${isClicked ? 'clicked' : ''}`}>
      <img className="favicon" src={favicon} alt='favicon' />
      <p className={'site_title'}>&nbsp;{title}</p>
      {isClicked ?? <p onClick={() => removeTabs(idx)}>X</p>}
    </div>
  );
};

export default React.memo(Tab);
