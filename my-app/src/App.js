import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import PageHome from "./pages/pageHome";
import PageUser from "./pages/pageUser";
import PageItem from "./pages/pageItem";
import PageLending from "./pages/pageLending";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="container">
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/user" component={PageUser} />
          <Route path="/item" component={PageItem} />
          <Route path="/lending" component={PageLending} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
