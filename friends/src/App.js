import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// components
import Login from './components/Login'

// styles
import './App.css';

function App() {
  return (
    <Router className="App">
      <header>
        <nav>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/">Protected</NavLink>
        </nav>
      </header>
      <Route to="/login" component={Login} />
    </Router>
  );
}

export default App;
