import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

// components
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

// styles
import './App.css';

function App() {
  return (
    <Router className="App">
      <Header>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Protected</Link>
        </nav>
      </Header>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
    </Router>
  );
}

const Header = styled.header`
  padding: 20px 50px;
  display: flex;
  justify-content: flex-end;
  background: #f7f7f7;
  border-bottom: 4px solid #bdbdfa;
  margin-bottom: 30px;
  
  nav {
    border: 1px solid black;
  }
`;

export default App;
