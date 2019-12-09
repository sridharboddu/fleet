import React from 'react';
import Login from './Components/Login/Login';
 import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard';
import {BrowserRouter,Route,Switch,withRouter}  from 'react-router-dom';
import Map from './Components/Map';
import Icon from 'react-materialize/lib/Icon';
import Support from './Components/Support';
import Forgot from './Components/Login/Forgot';
import Password from './Components/Login/Password';
import UserDashboard from './Components/Admin/UserDashboard';
import User from './Components/Admin/User';
import Edit from './Components/Admin/Edit';
import UserFleets from './Components/Admin/UserFleets';
import VehicleInfo from './Components/Admin/VehicleInfo';
import Registered from './Components/Register/Registered';




class App extends  React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',name:'',ename:'',eemail:'',id:''
    }
  }
  clickUserFleet=(email,name)=>{   
   this.setState({
     email:email,
     name:name,vehicle_no:'',device_id:'',vin:'',make:'',model:'',status:''
   })
  }
  editHandler=(v_no,d_id,vin,make,model,status)=>{
     this.setState({
       vehicle_no:v_no,
       device_id:d_id,
       vin:vin,
       make:make,
       model:model,
       status:status
     })
  }
 render(){
   const{name,email,vehicle_no,device_id,vin,make,model,status}=this.state
 return (
   <BrowserRouter>   
   <div className="App">     
     <Switch>    
     <Login exact path="/"/>      
     <Forgot path="/Forgot"/>     
     <Route path="/reset/:uid/:token" component={Password}/>    
     <Register path="/Register"/>
     <Route path="/account-confirm-email/:key" component={Registered}/>      
     <Support path="/Support"/>
     <Map path="/Map"/>
     <Dashboard path="/Dashboard"/>     
     <Icon path="/Icon"/>     
     <User path="/User" clickUserFleet={this.clickUserFleet}/>     
     <UserDashboard path="/UserDashboard"/>
     <Edit path="/Edit"/>  
     <UserFleets path="/UserFleets" name={name} email={email} editHandler={this.editHandler}/>
     <VehicleInfo path="/VehicleInfo" vehicle_no={vehicle_no} device_id={device_id} vin={vin} make={make} model={model} status={status} />      
     </Switch>
   </div>
   </BrowserRouter>
 );
}
}
export default App;