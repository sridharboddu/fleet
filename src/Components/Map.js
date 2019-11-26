import React from 'react';
import { subscribe } from 'mqtt-react';
import {divIcon} from "leaflet";
import { renderToStaticMarkup } from 'react-dom/server';
 import './Map.css'; 
 import {SideNav,Button,NavItem,Navbar,SideNavItem,Icon,Dropdown,Col,Row} from 'react-materialize';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import Axios from 'axios';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       data:[],lat:"12.9716",log:"77.5946",show:false,wid:"4%",num:12,info:[],dat:[],inf:[],third:[]
    }
  }
  componentDidMount(){
    let token=localStorage.getItem("token");
    console.log(token)
    Axios.get("https://fleet-management-app.herokuapp.com/owned-devices/",
      {headers:{'Authorization':`Token ${token}`}})
      .then(resp=>{
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

  componentWillReceiveProps(nextProps){
    let prop=nextProps.data
    let len=prop.length
    let log=prop[len-1]
    let lat=prop[len-2];    
    if(prop && len>0){
        this.setState({dat:log})
    }
    if(prop && len>1){
       this.setState({inf:lat})
    }    
    console.log(prop)

    let ms=prop.filter(i=>{
      return i.I=="862549040626502"
    }) 

    console.log(ms)
      
    if(ms.length>0){
      this.setState({third:ms[ms.length-1]})
    }
   
}

  render() {
   const{dat,inf,third} =this.state
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
    const idleMarkup = renderToStaticMarkup(<img src="idle.png" />);
    const customMarkeridle = divIcon({
      html: idleMarkup,
    });
    return (
      <div>
        <Navbar brand={<a />} alignLinks="left">
        {this.state.show ?<div onClick={this.hideShow}>
             
             <img class="navlog" src="logo.png"/>            
             <img class="ion" src="chevleft.png"/>
             
          {/* <i className="material-icons ion">chevron_right</i> */}
          </div>:(

          <div onClick={this.hideShow}>
             <img class="navlog" src="navlogo.png"/> 
             <img class="ion" src="chevright.png"/>
            
          {/* <i className="material-icons ion">chevron_right</i> */}
          </div>
          )
  }

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
        center={[12.996061,77.697433]}
        draggable={true}
        zoom={25}
        maxZoom={19}
        attributionControl={false}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
         {dat.G && <React.Fragment>
          <Marker position={[dat.G.slice(0,9),dat.G.slice(10,19)]}
           icon={ customMarkertruck }>
             <Popup> 
         <p>{dat.I}</p>
           </Popup>
           </Marker>
           </React.Fragment>}
           {inf.G && <React.Fragment>
          <Marker position={[inf.G.slice(0,9),inf.G.slice(10,19)]}
           icon={ customMarkertruck }>
             <Popup> 
           <p>{inf.I}</p>
           </Popup>
           </Marker>
           </React.Fragment>}
           {third.G && 
           <React.Fragment>
             <Marker position={[third.G.slice(0,9),third.G.slice(10,19)]}
           icon={ customMarkeridle}>
             <Popup> 
           <p>{third.I}</p>
           </Popup>
           </Marker>
           </React.Fragment>
           
           }
      </LeafletMap>
      </div>
      </Col>
      </div>
      </div>
    );
  }
}

export default subscribe({
  topic:'apeiron'
})(Map)