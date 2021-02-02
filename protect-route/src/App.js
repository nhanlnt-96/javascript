import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import RouterOutlet from './components/routerOutlet';

import './App.css';

function App() {
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div>
      {
        isLogged && (
          <header>
            This is app Header
          </header>
        )
      }
      <div>
        Main content here
        <RouterOutlet />
      </div>
      <footer>
        This is footer
      </footer>
    </div>
  );
}

export default App;
