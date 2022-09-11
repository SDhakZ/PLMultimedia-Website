import "./App.css";
import NavBar from "./components/NavBar";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home.jsx";
import About from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import Services from "./components/Pages/Services.jsx";
import Interns from "./components/Pages/Interns";
import { Portfolio } from "./components/Pages/Portfolio";
import { FAQpage } from "./components/Pages/FAQ";
import Footer from "./components/Footer";
import Contact from "./components/Pages/Contact";
import IndividualService from "./components/IndividualService";

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
            <Route path="/FAQpage" component={FAQpage} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/interns" component={Interns} />
            <Route path="/individualService" component={IndividualService} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
