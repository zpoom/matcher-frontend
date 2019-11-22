import React from 'react';
import './App.css';
import { 
  LandingPage,
  WsDetailPage,
  CreateWsPage,
  ManageWsPage,
  ViewWsPage
} from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Montserrat"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Switch>
            <Route path='/workshop/:id' component={WsDetailPage} />
            <Route path='/create' component={CreateWsPage} />
            <Route path='/manage' component={ManageWsPage} />
            <Route path='/workshop' component={ViewWsPage} />
            <Route path='/' component={LandingPage} />
          </Switch>
        </div >
      </Router>
    </ThemeProvider>
  );
}

export default App;
