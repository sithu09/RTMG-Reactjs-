import React from 'react';
import COmponentToPrint from './COmponentToPrint';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
   

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <COmponentToPrint />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
    </Router>
  );
}





