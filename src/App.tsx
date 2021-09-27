import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Details from "./Screens/Details";
import PokemonCatch from "./Screens/PokemonCatch";
import NotFound from "./Screens/NotFound";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path={["/", "/:page_number"]} component={Home} />
          <Route path="/catch/pokemon" component={PokemonCatch} />
          <Route path="/details/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
