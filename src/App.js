import React from 'react';
import './App.scss';
import { HashRouter } from 'react-router-dom';
import routes from './routes'
// import NavBar from './components/NavBar/Navbar';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
      <div id="main"> 
      {/* <NavBar />  */}
      {routes}</div>
      </HashRouter>
    );
  }
}

export default App;
