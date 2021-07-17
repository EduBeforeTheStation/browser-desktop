import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Setting from './pages/setting';
import Web from './pages/web';

const App: React.FC = () => {
  return (
    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/setting' component={Setting} />
        <Route exact path='/web' component={Web} />
    </div>
  );
}

export default App;
