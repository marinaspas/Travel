import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Destinations from "./components/pages/Destinations";
import Faq from "./components/pages/Faq";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/faq" component={Faq} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
