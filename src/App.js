import "./App.css";
import NavBar from "./components/NavBar";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Services } from "./components/Pages/Services";
import { Portfolio } from "./components/Pages/Portfolio";
import Contact from "./components/Pages/contact";
function App() {
  return (
    <>
      <Topbar />
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
