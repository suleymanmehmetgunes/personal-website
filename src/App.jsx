import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Contact, Error, Home } from "./pages";
import { Navbar, Footer } from "./components";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
