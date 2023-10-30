import "./App.css";
import Navigation from "./Reuse/nav";
import Footer from "./Reuse/footer";
import Home from "./Pages/Home"; 
import About from "./Pages/About";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./styles/footer.css";

function App() {
  return ( 
  
  <div className= "App">

        <Router>
        <Navigation />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
        </Router>

  </div>
    
  ); 

}

export default App;
