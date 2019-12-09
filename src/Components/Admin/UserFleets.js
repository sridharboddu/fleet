import React, { Component } from 'react';
import {Link,BrowserRouter,withRouter} from 'react-router-dom';
 import './UserFleets.css';
import Axios from 'axios';
import VehicleInfo from './VehicleInfo'

class UserFleets extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],fleets:[]
        }
    }
    componentDidMount(){
        let token=localStorage.getItem("token");  
                           
          Axios.get("https://fleet-management-app.herokuapp.com/users-devices/",
          {headers:{'Authorization':`Token ${token}`}})
          .then(resp=>{console.log(resp.data)
          this.setState({data:resp.data})
           let name=this.props.name;
           let email=this.props.email;
           console.log(this.state.data)
           let filter=resp.data.filter(i=>{
               return i.username===name && i.email===email 
           })
           this.setState({fleets:filter})
    })
         }       
    
    render(){        
        
        return(
            <div>
                <div class="card-body">
                <div>
                    <img src="backbtn.png" class="back"/>
                </div>
                <img src="pic1.png" alt="" class="pro-pic"/>
                <span class="head">{this.props.name}</span>
                <span class="head1">{this.props.email}</span>
                <span class="head2">+91 9123456789</span>
                <div class="button">
  <a class="waves-effect waves-light newuser-locate">Edit</a>
  </div>
                <hr/>
                <h4 class="New">Fleets</h4>
                {
                    this.state.fleets.map(vehicle=>(
                        <React.Fragment>
                        {
                            vehicle.relations.map(i=>(
                                <React.Fragment>
                                    <div class="card-subtotal">
                                                <div>
                                <span class="head3">VIN Number :<a class="total1">{i.vin}</a></span>
                                <span class="head4">Vehicle Number :<a class="total2">{i.vehicle_number}</a></span>
                                <span class="head5">Device ID:<a class="total3">{i.device_id}</a></span>
                                <div class="button1">
                            <Link to="/VehicleInfo"><a class="waves-effect waves-light newuser-locate" onClick={e=>this.props.editHandler(i.vehicle_number,i.device_id,i.vin,i.make,i.model,i.status)}>Edit</a></Link>
                                </div>
                                <div class="button2">
                                <a class="waves-effect waves-light newuser-locate1">Locate</a>
                                </div>
                                </div>
                </div>
                               </React.Fragment>
                            ))
                        }
                        </React.Fragment>
                    ))
                }               
                </div>
             </div>
        
        )
    }
}
export default withRouter (UserFleets);