import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class Register extends Component {
 render() {
   const row = {
     marginTop:'10px'
    }
    
   return (
            <div class="row" style={row}>
            <form>
<div class="col s12 ">
<div class="col s3"></div>
<div class="col s4"></div>
<div class="col s4 ">
     <div style={{borderRadius:"20px"}} class="card ">
       <div class="card-content black-text">
       <div class="left">
       <h5>Track Your Vehicle</h5>
       <h6 style={{color:"grey"}}>Wherever,Whenever </h6>
     </div>
       <div class="input-field col s12">
   <i class="material-icons prefix">mail</i>
     <input id="email" type="email" name="email" style={{border:'1px solid grey',borderRadius:'10px'}}/>
     <label for="email">&nbsp;&nbsp;&nbsp;Email</label>
     </div>
     <div class="input-field col s12">
   <i class="material-icons prefix">lock</i>
     <input id="password" type="password" name="password" style={{border:'1px solid grey',borderRadius:'10px'}}/>
     <label for="password">&nbsp;&nbsp;&nbsp;Password</label>
     </div>
     <div class="input-field col s12">
   <i class="material-icons prefix">lock</i>
     <input id="password" type="password" name="password" style={{border:'1px solid grey',borderRadius:'10px'}}/>
     <label for="password">&nbsp;&nbsp;&nbsp;Re-enter Password</label>
     </div>
    
    <div class="input-field col s12">
     </div>
     <a class="waves-effect waves-light btn teal accent-3" style={{width:"350px"}}>Register</a><br/><br/>
     
       </div>
     </div>
   </div>
 </div>
           </form>
     </div>
   );
 }
}