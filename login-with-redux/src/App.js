import { useSelector } from 'react-redux';
import RouterOutlet from "./router/RouterOutlet";

function App() {
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="App">
      {isLogged && (
        <nav>
          <ul>
            <li>home</li>
            <li>profile</li>
            <li>about</li>
          </ul>
        </nav>
      )}

      <div className="main">
        <RouterOutlet />
      </div>

      <footer>
        <h3>this is footer</h3>
      </footer>
    </div>
  );
}

export default App;
