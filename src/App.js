import React from "react";
import {Router, Route,Switch} from 'react-router-dom'
import { Home } from './components/Home';
import { Adduser } from './components/Adduser';
import { Edituser } from './components/Edituser';
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalContext } from './components/GlobalState';

function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
      <GLobalProvider>
      <Router>
       <Switch>
       <Route exact='/' component ={Home} />
       <Route path='/add' component ={Adduser} />
      <Route path='/edit:id' component ={Edituser} />
      
    
      </Switch>
      </Router>
      </GLobalProvider>
      
        
      
      
    </div>
  );
}

export default App;
