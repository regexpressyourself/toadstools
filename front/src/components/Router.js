import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Custom from "./pages/Custom";
import Countdown from "./apps/Countdown";
import PlayWrapper from "./apps/Play/PlayWrapper";

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
