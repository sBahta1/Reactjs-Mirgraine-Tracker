import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import DailyCheckin from './components/DailyCheckin/DailyCheckin';
import Notes from './components/Notes/Notes';
import Rx from './components/Rx/Rx'
import Migraine from './components/CapMigraine/CapMigraine'
import Graph from './components/Graph/Graph'
import Symptom1 from './components/CapMigraine/Symptom1/Symptom1';
import './styles/main.css';

const App = () => (
  <div>
    <Header title="Migraine Tracker" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
        <Route
        path="/daily"
        component={DailyCheckin}
        />
        <Route
        path="/notes"
        component={Notes}
        />
        <Route
        path="/rx"
        component={Rx}
        />
        <Route
        path="/migraine"
        component={Migraine}
        />
        <Route
        path="/graph"
        component={Graph}
        />
        <Route
        path="/symptom1"
        component={Symptom1}
        />

        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
