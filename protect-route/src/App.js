import React, { useState } from 'react';

import RouterOutlet from './routerOutlet';

import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      {
        isAuth && (
          <header>
            This is app Header
          </header>
        )
      }
      <div>
        Main content here
        <RouterOutlet isAuth={isAuth} />
      </div>
      <footer>
        This is footer
      </footer>
    </div>
  );
}

export default App;
