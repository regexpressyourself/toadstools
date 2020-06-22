import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlayWrapper from "./Play/PlayWrapper";
import Home from "./Home";
import Countdown from "./Countdown";
import Custom from "./Custom";

export default function Router() {
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/custom">
          <Custom />
        </Route>
        <Route exact path="/countdown">
          <Countdown />
        </Route>
        <Route exact path="/play/art">
          <PlayWrapper view="art" />
        </Route>
        <Route exact path="/play/info">
          <PlayWrapper view="info" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
