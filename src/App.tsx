import React from 'react';
import './App.css';
import { LandingPage, WsDetailPage, CreateWsPage } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/workshop/:id' component={WsDetailPage} />
          <Route path='/create' component={CreateWsPage} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </div >
    </Router>
  );
}

export default App;
