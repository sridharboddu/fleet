import React, { Component } from 'react';
import './Dashboard.css';
export default class Dashboard extends Component {
    render() {
        return (
            <div className="main">
 
 <nav>
   <div className="nav-wrapper black-text white">
     {/* <a href="#" class="brand-logo center">Logo</a> */}
     <ul id="nav-mobile" className="left hide-on-med-and-down">
       <li> <i className="material-icons" style={{paddingLeft:"15px"}}>menu</i></li>
       <li>
           <form>
       <div className="input-field" style={{position:"relative",left:'100px'}}>
         {/* <label class="label-icon" for="search"><i class="material-icons">search</i></label>  */}
         <i className="material-icons prefix">search</i>
         <input id="search" type="text" style={{width:'300px'}} placeholder="Search"  required/>
         <a className="waves-effect waves-light btn white black-text btn-sch">Search</a>
       </div>
     </form>
       </li>
     </ul>
     <ul id="nav-mobile" className="right hide-on-med-and-down">
       <li> <i className="material-icons silver-text">notifications</i></li>
    <li><b style={{margin:"10px"}}>Arya</b></li>
    <li className=" collection-item avatar"> <img src="" width="45px" height="45px"  className="circle" style={{marginRight:"20px"}}/></li>
     </ul>
   </div>
 </nav>
  <div className="row">
  <div className="col s1">
  <div className="sym">
  <a className="btn-floating btn-small waves-effect waves-light teal left"><i className="material-icons ">location_on</i></a>
  
  </div><br></br>
  <div className="symbol">
  <a className="btn-floating btn-small waves-effect waves-light teal left"><i className="material-icons ">filter_tilt_shift</i></a>
  </div>
  </div>
  <div className="side col s10">
  <div></div>
  <div></div>
  <div className="container">
     <div className="card center">
       <div className="card-content">
           <img src="vrl.png" className="circle" width="100px" height="100px" margin-top="20px"/>
             <h5 className="text">VRL Logistics</h5>
             <p className="details">contact@vrllogistics.com</p>
             <p className="details">9900121231</p>
        </div>
        <div className="row">
          <div className="col s3">
            <div className="card small-card">
              <img src="vehicle.png" width="50px" height="40px" className="img1 left"/>
              <p className="num">14</p>
              <p className="detail">Total number of vehicles</p>
            </div>
          </div>
          <div className="col s3">
          <div className="card small-card">
          <img src="distance.png" width="40px" height="40px" className="img1 left"/>
              <p className="num">57</p>
              <p className="detail">Total kilometers Driven</p>
          </div>
          </div>
          <div className="col s3">
          <div className="card small-card">
          <img src="box.png" width="40px" height="40px" className="img1 left"/>
              <p className="num">99</p>
              <p className="detail">Total number of Deliveries</p>
          </div>
          </div>
        </div>
        </div>
   </div>

</div>
 </div>
 </div>
 

       )
   }
}