import React, { useState } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import ProtectRoute from './protectRoute/PrivateRoute'

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth)
  return (
    <Router>
      <ProtectRoute path="/" exact component={Home} isAuth={isAuth} />
      <Route path="/login">
        <LoginForm setIsAuth={setIsAuth} />
      </Route>
    </Router>
  );
}

export default App;