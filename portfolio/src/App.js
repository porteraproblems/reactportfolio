import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Portfilio from "./pages/Portfolio";


function App() {
    return (
        <div>
            <BrowserRouter basename="/portfolio">
            </BrowserRouter>
        <HashRouter basename='/'>
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/portfolio" component={Portfilio} />
                <Route component={NoMatch} />
            </Switch>
        </HashRouter>
        </div>
    )
}

export default App;