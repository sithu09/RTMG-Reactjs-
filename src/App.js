import React from 'react';
import COmponentToPrint from './COmponentToPrint';
import MUnicipal from './MUnicipal';
import EPC from './EPC';
import GHospital from './GHospital';
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
              <Route exact path='/epc' component={EPC} />
              <Route exact path='/ghospital' component={GHospital} />
          </Switch>
      </Router>
    
    
  );
}





