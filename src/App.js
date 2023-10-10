import logo from './logo.svg';
import './App.css';
import {
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Link to='home'>Home</Link>
    <Link to='contact'>contact</Link>
    <Link to='todos'>Todos</Link>
    <Outlet />
    <br/><br/>
    <hr/>
  </div>
  );
}

export default App;