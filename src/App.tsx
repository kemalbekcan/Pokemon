import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Details from "./Screens/Details";
import PokemonCatch from "./Screens/PokemonCatch";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path={["/", "/:page_number"]} component={Home} />
          <Route path="/catch/pokemon" component={PokemonCatch} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
