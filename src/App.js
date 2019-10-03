import React from 'react';

import Register from './Components/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard'
import {BrowserRouter,Route,Switch}  from 'react-router-dom';
import Map from './Components/Map';
import Admin from './Admin';
// import Nav from './Components/Nav';

function App() {
 return (
   <BrowserRouter>   
   <div className="App">
     <Switch>
    {/* <Nav/>  */}
   
     {/* <Route path='/Login' component={Login}/>
      <Route path='/Register' component={Register}/>
     <Route path='/Dashboard' component={Dashboard}/>      
     <Route path='/Map' component={Map}/>   */}
     <Login exact path="/"/>
     <Map path="/Map"/>
     <Dashboard path="/Dashboard"/>
     <Admin path="/Admin"/>
     </Switch>
   </div>
   </BrowserRouter>
 );
}
export default App;