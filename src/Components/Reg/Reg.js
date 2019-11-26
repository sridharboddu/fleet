import React from 'react';
// import {Icon } from "react-materialize";
import {divIcon} from "leaflet";
import { renderToStaticMarkup } from 'react-dom/server';
//  import './Map.css';
//  import {   IconCar  } from './Components/Mapleaflet';
 import {SideNav,Button,NavItem,Navbar,SideNavItem,Icon,Dropdown,Col,Row} from 'react-materialize';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import Axios from 'axios';
// import { IconCar } from '../Mapleaflet';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import {NavLink}  from 'react-router-dom';
class Map extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[],lat:"12.9716",log:"77.5946",show:false,wid:"4%",num:12,info:[],
    }
  }
  componentDidMount(){
    let token=localStorage.getItem("token");
    console.log(token)
    Axios.get("https://fleet-management-app.herokuapp.com/owned-devices/",
      {headers:{'Authorization':`Token ${token}`}})
      .then(resp=>{console.log(resp.data)
      this.setState({info:resp.data})});        
}
   hideShow=(e)=>{
    this.setState({show:!this.state.show});
    if(!this.state.show){
      this.setState({num:10})
    }
    else{
      this.setState({num:12})
    }
  }

  render() {
    const iconMarkup = renderToStaticMarkup(<img src="car.png" />);
    const customMarkerIcon = divIcon({
      html: iconMarkup,
    });
    const bikeMarkup = renderToStaticMarkup(<img src="truck.png" />);
    const customMarkerBike = divIcon({
      html: bikeMarkup,
    });
    const truckMarkup = renderToStaticMarkup(<img src="bike.png" />);
    const customMarkertruck = divIcon({
      html: truckMarkup,
    });
    
    return (
      <div>
        <Navbar brand={<a />} alignLinks="left">
          <div onClick={this.hideShow}>
             <img class="navlog" src="navlogo.png"/> 
             <img class="ion" src="chevright.png"/>
             <img class="ion1" src="chevleft.png"/>
          {/* <i className="material-icons ion">chevron_right</i> */}
          </div>

<NavItem class="nItem1" color="black">
<i className="material-icons prefix ser">search</i>
</NavItem> 
<NavItem class="nItem2">
<input id="search" type="text" style={{width:'300px'}} placeholder="Search"  required/>
</NavItem> 
<NavItem class="nItem3">
<a className="waves-effect waves-light btn white black-text btn-sch">Search</a>
</NavItem>
<NavItem href="" class="nItem4" floating fab={{direction:'right'}}>
<i className="material-icons noti" floating icon={<Icon />}>notifications</i>
</NavItem>
<NavItem href="" class="nItem5">
<b class="i-name">Arya</b>
</NavItem>
<NavItem class="nItem6">
 {/* <img src="pic1.png" width="45px" height="45px"  className="circle" style={{marginTop:"5px"}}/> */}
<Dropdown trigger={<img src="pic1.png" width="45px" height="45px" className="im-cir" style={{marginTop:"5px"}}/>} class="dropdown-trigger" width="0px"
     options={{coverTrigger: false,constrainWidth: false}}>
<a href="Dashboard" class="per">
  <Icon class="per">
    person
  </Icon>
My Profile
</a>
<a href="" class="here">
  <Icon>
    beenhere
  </Icon>
Logout
</a>
</Dropdown>
</NavItem>

</Navbar>

<div className="row">
{!this.state.show ?
    <div className="col s1" style={{backgroundColor:"white",
    position:"absolute",
    height: "400px",
    width:"4%"}}>
  <div className="symb">
  <a className="btn-floating btn-small waves-effect waves-light teal left"><img src="location.png" class="loc"/></a>
  </div><br></br>
  <div className="symbol">
  <a className="btn-floating btn-small waves-effect waves-light teal left"><img src="support.png" class="support"/></a>
  </div><br></br> 
  </div>:''} 
  </div>   
     
  <div className="row">

  {this.state.show ?
    <div>
      <Col s={2}>
      {/* <i className="material-icons ion">menu</i>  */}
          <SideNavItem class="im-log" style={{listStyleType:"none"}} userView user={{
    //  background: 'https://placeimg.com/640/480/tech',
         // image: 'logo.png'
        
      }} /> 
<SideNavItem  style={{listStyleType:"none"}}>
<div class="row">
  <div class="col s4">
    <a className="btn-floating btn-small waves-effect waves-light teal loc-s"><img src="location.png" class="loc"/></a>
  </div>
  <div class="col s8">
  <p class="drop">Manage Fleet</p>
  <Dropdown trigger={<a><Icon className="material-icons chev">arrow_drop_up</Icon></a>}
  options={{coverTrigger: false,constrainWidth: false}}>
<a href="#" class="veh">
   <img src="all vehicles.png"/> 
&nbsp;&nbsp;All Vehicles
</a>
<a href="#" class="ig-on">
 <img src="ignition on.png"/> 
&nbsp;&nbsp;ignition on
</a>
<a href="#" class="ig-off">
 <img src="ignition off.png"/> 
&nbsp;&nbsp;ignition off
</a>
</Dropdown>

  </div>
</div>
</SideNavItem><br/>
<SideNavItem  style={{listStyleType:"none"}}>
  <div class="row">
    <div class="col s4">
    <a className="btn-floating btn-small waves-effect waves-light teal supp-s"><img src="support.png" class="support"/></a>
   </div>
   <div class="col s8">
  <p class="supp">Support</p>
  </div>
  </div>
</SideNavItem>
  </Col>
  </div>:''}
  
      <Col s={this.state.num}>
        <div class="M-card">
        <LeafletMap
        center={[this.state.lat,this.state.log]}
        draggable={true}
        zoom={12}
        maxZoom={15}
        attributionControl={false}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
         {
           this.state.data.map(i=>(
             <div>
               <Marker
        position={[i.lat,i.log]}
        icon={ customMarkertruck }
        >
        <Popup>
          {i.name}
        </Popup>
      </Marker>
             </div>
           ))
         }
      </LeafletMap>
      </div>
      </Col>
      </div>
      </div>
    );
  }
}

export default Map; 