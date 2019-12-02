import React from 'react';
import Login from './Components/Login/Login';
 import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard';
import {BrowserRouter,Route,Switch}  from 'react-router-dom';
import Map from './Components/Map';
import Icon from 'react-materialize/lib/Icon';
import Support from './Components/Support';
import Forgot from './Components/Login/Forgot';
import Password from './Components/Login/Password';
import UserDashboard from './Components/Admin/UserDashboard';
import User from './Components/Admin/User';
import Edit from './Components/Admin/Edit';
import UserFleets from './Components/Admin/UserFleets';




function App() {
 return (
   <BrowserRouter>   
   <div className="App">     
     <Switch>    
     <Login exact path="/"/> 
     <Forgot path="/Forgot"/>     
     <Route path="/Password/reset/:uid/:token" component={Password}/>    
     <Register path="/Register"/>
     <Support path="/Support"/>
     <Map path="/Map"/>
     <Dashboard path="/Dashboard"/>     
     <Icon path="/Icon"/>     
     <User path="/User"/>     
     <UserDashboard path="/UserDashboard"/>
     <Edit path="/Edit"/>  
     <UserFleets path="/UserFleets"/>      
     </Switch>
   </div>
   </BrowserRouter>
 );
}
export default App;