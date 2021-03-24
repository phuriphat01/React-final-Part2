import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './page/Main';
import Showinfo from './page/Showinfo'


       
function App() {


  return (
    
    <>
      
      <Router>
        <Switch>
        
          <Route exact path="/" component={Main} />
          <Route path="/profile/:id" component={Showinfo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
