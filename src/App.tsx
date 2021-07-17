import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Setting from './pages/setting';
import Web from './pages/web';

import Container from './store';

const App: React.FC = () => {
  return (
    <Container>
      <Route exact path='/' component={Home} />
      <Route exact path='/setting' component={Setting} />
      <Route exact path='/web' component={Web} />
    </Container>
  );
}

export default App;
