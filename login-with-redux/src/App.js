import { useSelector, useDispatch } from 'react-redux';

import { signIn } from './actions';
import RouterOutlet from "./router/RouterOutlet";

function App() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="username" required={true} />
        <input type="password" placeholder="password" required={true} />
        <button onClick={() => dispatch(signIn())}>Sign in</button>
        {isLogged ? <h3>Signed in</h3> : ""}
      </form>
    </div>
  );
}

export default App;
