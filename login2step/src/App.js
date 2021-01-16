import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
