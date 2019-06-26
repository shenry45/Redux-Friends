import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Login from './components/Login'

// styles
import './App.css';

function App() {
  return (
    <Router className="App">
      <Route to="/login" component={Login} />
    </Router>
  );
}

export default App;
