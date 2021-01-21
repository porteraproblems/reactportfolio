import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navi from "./Components/Nav/nav"
import about from "./pages/About";
import contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import portfilio from "./pages/Portfolio";

function App() {
    return (
        <div>
        <HashRouter>
            <Navi />
            <Switch>
                <Route exact path="/" component={about} />
                <Route exact path="/contact" component={contact} />
                <Route exact path="/portfolio" component={portfilio} />
                <Route component={NoMatch} />
            </Switch>
        </HashRouter>
        </div>
    )
}

export default App;