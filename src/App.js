import React from 'react';
import './App.scss';
import { HashRouter } from 'react-router-dom';
import routes from './routes'

class App extends React.Component {
  render() {
    return (
      <HashRouter>
      <div id="main"> 
      {routes}</div>
      </HashRouter>
    );
  }
}

export default App;
