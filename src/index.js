import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history } from './store';
import './index.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));
