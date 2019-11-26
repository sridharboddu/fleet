import React from 'react';
import Login from './Components/Login/Login';
 import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard';
import {BrowserRouter,Route,Switch}  from 'react-router-dom';
import Map from './Components/Map';
import Icon from 'react-materialize/lib/Icon';
 import Reg from './Components/Reg/Reg';
import Support from './Components/Support';
import Forgot from './Components/Login/Forgot';
import Password from './Components/Login/Password';


function App() {
 return (
   <BrowserRouter>   
   <div className="App">     
     <Switch>    
     <Login exact path="/"/> 
     <Forgot path="/Forgot"/>     
     <Route path="/Password/:name" component={Password}/>    
     <Register path="/Register"/>
     <Support path="/Support"/>
     <Map path="/Map"/>
     <Dashboard path="/Dashboard"/>     
     <Icon path="/Icon"/>     
     <Reg path="/Reg"/> 
     </Switch>
   </div>
   </BrowserRouter>
 );
}
export default App;