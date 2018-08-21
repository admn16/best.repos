import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DefaultLayout from 'layouts/Default/Default';
import Home from 'views/Home/Home';

const App = () => (
  <Router>
    <DefaultLayout>
      <Route exact path="/" component={Home} />
    </DefaultLayout>
  </Router>
);

export default App;
