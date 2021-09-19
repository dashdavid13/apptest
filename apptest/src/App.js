import './App.css';
import Home from "./Home"
import Login from "./Login"
import MainCard from "./MainCard"
import { Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/game">
        <MainCard />
      </Route>
      </Switch>
    
    </div>
  );
}

export default App;
