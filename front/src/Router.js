import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Play from "./Play/Play";
import PlayWrapper from "./Play/PlayWrapper";

export default function Router() {
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/play/art">
          <PlayWrapper view="art" />
        </Route>
        <Route exact path="/play/:user/art">
          <PlayWrapper view="art" />
        </Route>
        <Route exact path="/play/info">
          <PlayWrapper view="info" />
        </Route>
        <Route exact path="/play/:user/info">
          <PlayWrapper view="info" />
        </Route>
        <Route exact path="/play/info/:font">
          <PlayWrapper view="info" />
        </Route>
        <Route exact path="/play/:user/info/:font">
          <PlayWrapper view="info" />
        </Route>
        <Route exact path="/play">
          <Play />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
