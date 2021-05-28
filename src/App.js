import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import Header from './components/Header'
import routes from './router/routes'

import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

const loading = () => (
    <div className="animated fadeIn text-center">Loading 1...</div>
);
const history = createBrowserHistory();

function App() {
  return (
    <div className="App">

      <Router history={history}>
        <div className="wrapper">
          <Header></Header>
          <Suspense fallback={loading()}>
            <Switch>
              {routes.map((route) => {
                return route.component && (
                  <Route
                    key={route.path}
                    path={route.path}
                    //    component={route.component}
                    render={props => <route.component {...props} />}
                  />
                )
              })}
              <Redirect from="/" to="/home" />

            </Switch> </Suspense >
        </div >

      </Router>

    </div>
  );
}

export default App;
