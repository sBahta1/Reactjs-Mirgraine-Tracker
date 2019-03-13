import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
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
import Symptom2 from './components/CapMigraine/Symptom2/Symptom2';
import './styles/main.css';
import Nav from './components/Nav/Nav';
import red from '@material-ui/core/colors/red';
import { Typography } from '@material-ui/core';
const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#546e7a'
    },
    secondary: {
      main: '#f4511e',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography:{
    fontFamily:[
      'Vollkorn', 'serif'
    ]
  },
});

const App = () => (
  <MuiThemeProvider theme={appTheme}>
    <div>
      {/* <Header title="Migraine Tracker" /> */}
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
          <Route
            path="/symptom2"
            component={Symptom2}
          />
          <Route
            path="/nav"
            component={Nav}
          />

          {/* OTHERWISE (no path!) */}
          <Route render={() => <h1>404</h1>} />

        </Switch>
      </Router>
    </div>
  </MuiThemeProvider>
);

export default App;
