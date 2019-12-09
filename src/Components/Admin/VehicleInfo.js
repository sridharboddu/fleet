import React, { Component } from 'react';
import {NavLink,BrowserRouter,withRouter} from 'react-router-dom';
 import './VehicleInfo.css';
import Axios from 'axios';

class VehicleInfo extends Component{
    constructor(props) {
        super(props)    
        this.state = {
             data:[]
        }
    }
    
    componentDidMount(){
        
    }
    render(){        
        return(
            <div>
                <div id="modal1" class="modal">
  <div class="modal-content">
    <input type='text'/>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
  </div>
</div>
                <div class="row">
                   <div class="col s12 m6">
                       <div class="total-card">
                           <div class="card user-card">
                              <div class="card-text-main ">
                                  <div>
                                   <img src="backbutton.png" class="backtrans"/>
                                  </div>
                                  <div class="row">
                                      <div class="col s2">                       
                                       <img src="pic1.png" class="pro-img"/>
                                       </div>

                                    <div class="col s2 deta">
                                      <span class="card-head">John Doe</span><br/>
                                      <span class="card-head1">contac t@johndoe.com</span><br/>
                                      <span class="card-head2">+91&nbsp;9123456780</span>
                                      <a class="btn bt-edit">Edit</a>
                                      <p></p>
                                    </div>
                                    </div>


                              </div>
                              <div class="divider"></div>                             

                              <div class="info">
                                  <div class="row">
                                      <div class="col main-con">
                                         <label class="vehNo">
                                             Vehicle No:
                                             <span><b class="val">{this.props.vehicle_no}</b></span>                                                                                                                                     
                                             <i class="material-icons ed-it modal-trigger" href="#modal1" >edit</i>
                                         </label>
                                         <label class="devID">
                                           Device ID:
                                             <span><b class="val">{this.props.device_id}</b></span>
                                             <i class="material-icons ed-it-1 modal-trigger" href="#modal1" >edit</i>
                                         </label>
                                      </div>
                                      <div class="col s10 main-con">
                                         <label class="nam">
                                          Name:
                                             <span><b class="val">Vehiclename</b></span>
                                             <i class="material-icons ed-it-2 modal-trigger" href="#modal1" >edit</i>
                                         </label>
                                         <label class="vinNum">
                                           VIN number:
                                           </label>
                                             <span><b class="val">{this.props.vin}</b></span>
                                             <i class="material-icons ed-it-3 modal-trigger" href="#modal1" >edit</i>
                                      </div>
                                      <div class="col s10 main-con">
                                         <label class="make">
                                           Make:
                                            <span><b class="val">{this.props.make}</b></span>
                                            <i class="material-icons ed-it-4 modal-trigger" href="#modal1" >edit</i>
                                         </label>
                                         <label class="model-info">
                                            Model:
                                             <span><b class="val">{this.props.model}</b></span>
                                             <i class="material-icons ed-it-5 modal-trigger" href="#modal1" >edit</i>
                                         </label>
                                      </div>
                                      <div class="col s10 main-con">
                                          <div class="row">
                                              <div class="col s4 stat">
                                         <label class="status-info">
                                            Status:
                                             <span><b class="val">{this.props.status}</b></span>
                                         </label>
                                         </div>
                                         <div class="col s2">
                                         <div class="switch togg">
                                             <label>
                                                 <input type="checkbox"/>
                                                 <span class="lever"></span>
                                             </label>
                                         </div>
                                         </div>
                                         <div class="col s6"></div>
                                         </div>
                                      </div>
                                      <div class="col s10 main-con">
                                         <label class="location">
                                            Location:
                                             <span><b class="val">https://www.google.com/maps/@14.5536505,74. 7886965,7z/data=!4m2!7m1!2e1?hl=en</b></span>
                                         </label>
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
export default VehicleInfo;
