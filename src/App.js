import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reducers';
import DefaultLayout from 'layouts/Default/Default';
import Home from 'views/Home/Home';
import Tag from 'views/Tag/Tag';

const store = createStore(
  rootReducer,
  /* eslint-disable no-underscore-dangle */
  process.env !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
);

const App = () => (
  <Provider store={store}>
    <Router>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tag/:tag" component={Tag} />
        </Switch>
      </DefaultLayout>
    </Router>
  </Provider>
);

export default App;
