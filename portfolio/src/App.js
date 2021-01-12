import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import about from "./pages/about";
import contact from "./pages/contact";
import portfilio from "./pages/portfolio";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={about} />
                <Route exact path="/contact" component={contact} />
                <Route exact path="/portfolio" component={portfilio} />
            </Switch>
        </Router>
    )
}

export default App;