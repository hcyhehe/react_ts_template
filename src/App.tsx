import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home/index';
import protoDrag from './views/protoDrag/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/protoDrag' component={protoDrag} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
