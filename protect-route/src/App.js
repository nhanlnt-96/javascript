import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ProtectRoute from './components/ProtectRoute';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Route path="/" exact>
        <Home setIsAuth={setIsAuth} />
      </Route>
      <ProtectRoute path="/profile" component={Profile} isAuth={isAuth} />
    </Router>
  );
}

export default App;
