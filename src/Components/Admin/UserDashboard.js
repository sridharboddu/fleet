import React, { Component } from 'react';
import {NavLink,BrowserRouter,withRouter} from 'react-router-dom';
 import './UserDashboard.css';
import Axios from 'axios';

class UserDashboard extends Component{
    render(){
        return(
            <div>
                <div class="card-body">
                <div>
                    <img src="backbtn.png" class="back"/>
                </div>
                <img src="pic1.png" alt="" class="pro-pic"/>
                <span class="head">Jhon Doe</span>
                <span class="head1">contact@gmail.com</span>
                <span class="head2">+91 9123456789</span>
                <div class="button">
  <a class="waves-effect waves-light newuser-locate">Edit</a>
  </div>
                <hr/>
                <h4 class="New">Fleets</h4>
                <div class="card-subtotal">
                <div>
  <span class="head3">VIN Number :<a class="total1"> 987654321AAA</a></span>
  <span class="head4">Vehicle Number :<a class="total2"> KA01A12345</a></span>
  <span class="head5">Device ID:<a class="total3">ABCD123456</a></span>
  <div class="button1">
  <a class="waves-effect waves-light newuser-locate">Edit</a>
  </div>
  <div class="button2">
  <a class="waves-effect waves-light newuser-locate1">Locate</a>
  </div>
  </div>

                </div>
                </div>
             </div>
        
        )
    }
}
export default withRouter (UserDashboard);