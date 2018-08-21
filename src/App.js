import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import DefaultLayout from 'layouts/Default/Default';
import Home from 'views/Home/Home';
import Tag from 'views/Tag/Tag';

const App = () => (
  <Router>
    <DefaultLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tag/:tag" component={Tag} />
      </Switch>
    </DefaultLayout>
  </Router>
);

export default App;
