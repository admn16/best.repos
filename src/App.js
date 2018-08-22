import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
import DefaultLayout from 'layouts/Default/Default';
import Home from 'views/Home/Home';
import Repository from 'views/Repository/Repository';
import Tag from 'views/Tag/Tag';
import sagas from 'sagas';

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <Router>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tag/:tag" component={Tag} />
          <Route path="/repo/:author/:name" component={Repository} />
        </Switch>
      </DefaultLayout>
    </Router>
  </Provider>
);

export default App;
