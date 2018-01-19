import React from 'react';
import Header from './Header';
import Body from './Body';
import { Switch, Route } from 'react-router-dom';
import IndividualHome from './IndividualHome';
import { Link } from 'react-router-dom';


function App(){

  return(
    <div>
      <Header/>
      <Switch>
        <Route path='/individualhome' component={IndividualHome} />
      </Switch>
      <Body/>
    </div>
  );
}

export default App;
