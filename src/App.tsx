import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home/index';
import protoDrag from './views/protoDrag/index';
import Normal from './views/normal/index';
import '@ses/eds-ui/lib/index.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/protoDrag' component={protoDrag} />
        <Route path='/normal' component={Normal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
