import "./assets/Global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./layout/NavBar/NavBar";
import { Topbar } from "./layout/TopBar/Topbar";
import { Home } from "./pages/Home/Home.jsx";
import { About } from "./pages/About/About";
import { Blog } from "./pages/Blog/Blog";
import { Services } from "./pages/Services/Services";
import { Interns } from "./pages/Interns/Interns";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { FAQpage } from "./layout/Footer/FAQ/FAQ";
import { Credentials } from "./layout/Footer/Credentials/Credentials";
import { Contact } from "./pages/Contact/Contact";
import { IndividualService } from "./pages/Services/IndividualService";
import { IndividualBlog } from "./pages/Blog/IndividualBlog";
import { Footer } from "./layout/Footer/Footer";

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
            <Route exact path="/blog" component={Blog} />
            <Route path="/FAQpage" component={FAQpage} />
            <Route path="/credentials" component={Credentials} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/interns" component={Interns} />
            <Route
              exact
              path="/services/advertisement"
              component={IndividualService}
            />
            <Route
              exact
              path="/services/webDevelopment"
              component={IndividualService}
            />
            <Route
              exact
              path="/services/webHosting"
              component={IndividualService}
            />
            <Route
              exact
              path="/services/appDevelopment"
              component={IndividualService}
            />
            <Route
              exact
              path="/services/seoOptimization"
              component={IndividualService}
            />
            <Route
              exact
              path="/services/digitalMarketing"
              component={IndividualService}
            />
            <Route
              exact
              path="/services/mediaProduction"
              component={IndividualService}
            />
            <Route
              exact
              path="/services/eventManagement"
              component={IndividualService}
            />
            <Route exact path="/blog/:id/:slug" component={IndividualBlog} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
