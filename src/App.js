import React from 'react';
import COmponentToPrint from './COmponentToPrint';
import MUnicipal from './MUnicipal';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
  
      <Router>
         <Switch>
              <Route exact path='/' component={COmponentToPrint} />
              <Route exact path='/municipal' component={MUnicipal} />
          </Switch>
      </Router>
    
    
  );
}





