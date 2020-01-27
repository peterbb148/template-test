import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hello from './components/Hello';
import About from './components/About';

const App:React.FC<void> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Hello />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;