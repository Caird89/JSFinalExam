import React from "react";
import { Route, Switch } from "react-router-dom";

import SuperheroIndex from "./superheroes/index";
import SuperheroShow from "./superheroes/show";
import SuperheroNew from "./superheroes/new";
import SuperheroEdit from "./superheroes/edit";
import SuperheroDestroy from "./superheroes/destroy";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SuperheroIndex} />
      <Route exact path="/new" component={SuperheroNew} />
      <Route exact path="/:id" component={SuperheroShow} />
      <Route exact path="/:id/edit" component={SuperheroEdit} />
      <Route exact path="/:id/destroy" component={SuperheroDestroy} />
    </Switch>
  );
}

export default Routes;