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
         <i className="material-icons prefix active">search</i>
         <input id="search" type="text" style={{width:'300px'}} placeholder="Search"  required/>
         <a className="waves-effect waves-light btn white black-text btn-sch">Search</a>
       </div>
     </form>
       </li>
     </ul>
     <ul id="nav-mobile" className="right hide-on-med-and-down">
       <li> <i className="material-icons notify">notifications</i></li>
    <li><b class="profile-name" style={{margin:"10px"}}>Ramy</b></li>
    <li className=" collection-item avatar"> <img src="pic1.png" width="45px" height="45px"  className="im-cir" style={{marginRight:"20px",marginTop:"5px"}}/></li>
     </ul>
   </div>
 </nav>
 <div className="row">
  <div className="col s1">
  <div className="symb">
  <a className="btn-floating btn-small waves-effect waves-light teal left"><img src="location.png" class="loc"/></a>
  </div><br></br>
  <div className="symbol">
  <a className="btn-floating btn-small waves-effect waves-light teal left"><img src="support.png" class="support"/></a>
  </div><br></br>

  </div>
  <div className="side col s10">
  <div className="container">
     <div className="card center">
       <div className="card-content">
        <div class="chev"><a href="Support"><img src="back.png"/></a></div>
           <div class="full-con"><img src="vrl.png" className="ima-cir" width="100px" height="100px" margin-top="20px"/>
             <h5 className="text12">VRL Logistics</h5>
             <p className="details">contact@vrllogistics.com</p>
             <p className="details">9900121231</p>
             </div>
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