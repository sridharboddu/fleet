import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
                 <nav>
    <div class="nav-wrapper black-text white">
      <a href="#" class="brand-logo center"></a>  
      <ul id="nav-mobile" class="left hide-on-med-and-down">
       <li>   <i class="code material-icons ">menu</i> </li>
       <li>
       <form>
        <div class="input-field">          
          {/* <label class="label-icon" for="search"><i class="material-icons">search</i></label>  */}
          <i class="material-icons prefix">search</i>
          <input class="holder" id="search" type="text" placeholder="Search"  required/> 
          <a class="waves-effect waves-light btn white black-text">Search</a>        
        </div>
      </form>
    </li>    
      </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li> <i class="material-icons silver-text">notifications</i></li>  
     <li><b style={{margin:"10px"}}>Arya</b></li>
     <li class=" collection-item avatar"> <img src width="45px" height="45px"  class="circle" style={{marginRight:"20px"}}/></li>       
                                
      </ul>
    </div>
  </nav>
  {/* <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        
      </div>
    
    </div></li>
   <a class="btn-floating btn-small waves-effect waves-light teal left"><i class="material-icons ">location_on</i></a>
   <a class="btn-floating btn-small waves-effect waves-light teal left"><i class="material-icons ">filter_tilt_shift</i></a>
  </ul> */}
 
            </div>
        )
    }
}