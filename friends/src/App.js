import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

// styles
import './App.css';

function App() {
  return (
    <Router className="App">
      <header>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Protected</Link>
        </nav>
      </header>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
    </Router>
  );
}

export default App;
