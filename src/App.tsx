import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home/index';
import Drag from './views/drag/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/drag' component={Drag} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
