import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, signIn } from './actions';

import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App" >
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>Sin in</button>
      { isLogged ? <h3>Valuable information I shouldn't see</h3> : ''}

      {/* <button onClick={() => dispatch(increment(5))}>+</button> */}
    </div >
  );
}

export default App;
