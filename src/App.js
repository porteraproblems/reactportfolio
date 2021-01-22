import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Portfilio from "./pages/Portfolio";


function App() {
    return (
        <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/portfolio" component={Portfilio} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default App;