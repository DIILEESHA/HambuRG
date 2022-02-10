import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Error from "./pages/Error";
import Project from "./pages/Project";

function App() {
  return (
    
    <Router>
      <Menu/>
     <Switch>
       <Route exact path ='/' component = {Home}/>
       <Route exact path ='/projects' component = {Project}/>
       <Route exact path = '*' component = {Error}/>
     </Switch>
    </Router>
  );
}

export default App;
