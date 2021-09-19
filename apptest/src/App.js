import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Login from "./Login"
import MainCard from "./MainCard"
import { Switch, Route, useHistory} from "react-router-dom";

function App() {
  return (
    <div>
     <Home />
     <Login />
     <MainCard />
    </div>
  );
}

export default App;
