import React from 'react';
// import {Icon } from "react-materialize";
import {divIcon} from "leaflet";
import { renderToStaticMarkup } from 'react-dom/server';
 import './User.css';
 import {NavLink,BrowserRouter,Link,withRouter} from 'react-router-dom';
 import {SideNav,Button,NavItem,Navbar,SideNavItem,Icon,Dropdown,Col,Row} from 'react-materialize';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import Axios from 'axios';
import UserFleets from './UserFleets';

class User extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[],show:false,wid:"4%",num:12,info:[],details:[],close:false,userDetails:[]
    }
  }
  componentDidMount(){
    let token=localStorage.getItem("token");    
    Axios.get("https://fleet-management-app.herokuapp.com/add-list-users/",
      {headers:{'Authorization':`Token ${token}`}})
      .then(resp=>{
      this.setState({info:resp.data})});   
      
      Axios.get("https://fleet-management-app.herokuapp.com/users-devices/",
      {headers:{'Authorization':`Token ${token}`}})
      .then(resp=>{
      this.setState({details:resp.data})});
}
 showUserDetails=(email,username)=>{
       this.setState({close:true});
       let users=this.state.details;
       let user=users.filter(i=>{
           return username===i.username
       })       
       this.setState({userDetails:user})                          
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
    console.log(this.state.userDetails)
    return (
      <div class="user-admin" >       
        <Navbar brand={<a />} alignLinks="left">
        {this.state.show ?<div onClick={this.hideShow}>
             
             <img class="navlog" src="logo.png"/>            
             <img class="ion" src="chevleft.png"/>
          </div>:(
          <div onClick={this.hideShow}>
             <img class="navlog" src="navlogo.png"/> 
             <img class="ion" src="chevright.png"/>
          </div>
          )
  }

<NavItem class="nItem1-user" color="black">
<i className="material-icons prefix ser" >search</i>
</NavItem> 
<NavItem class="nItem2-user">
<input id="search" type="text" style={{width:'300px'}} placeholder="Search"  required/>
</NavItem> 
<NavItem class="nItem34-user">
<a className="waves-effect waves-light btn white black-text search-bar" style={{zIndex:'1'}}>Search</a>
</NavItem>
<NavItem href="" class="nItem4-user" floating fab={{direction:'right'}}>
<i className="material-icons noti" floating icon={<Icon />}>notifications</i>
</NavItem>
<NavItem href="" class="nItem5-user">
<b class="i-name">Arya</b>
</NavItem>
<NavItem class="nItem6-user">
<Dropdown trigger={<img src="pic1.png" width="45px" height="45px" className="im-cir" style={{marginTop:"10px"}}/>} class="dropdown-trigger" width="0px"
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
    height: "1071px",
    width:"4%"}}>
  <div className="symb">
  <a className="btn-floating btn-small waves-effect waves-light  left loc"><img src="add.png" class=""/></a>
  </div><br></br>
  <div className="symbol">
  <a className="btn-floating btn-small waves-effect waves-light  left support">
  <img src="adduser.png" class=""/>
  </a>
  </div><br></br> 
  </div>:''} 
  </div>   
     
  <div className="row">

  {this.state.show ?
    
    <div>
      <Col s={2}>   
          <SideNavItem class="im-log" style={{listStyleType:"none"}} userView user={{       
      }} /> 
<SideNavItem  style={{listStyleType:"none"}}>

<div class="row">
  <div class="col s4">
    <a className="btn-floating btn-small waves-effect waves-light teal loc-s"><img src="location.png" class="loc1"/></a>
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
    <a className="btn-floating btn-small waves-effect waves-light teal supp-s"><img src="support.png" class="support1"/></a>
   </div>
   <div class="col s8">
  <p class="supp">Support</p>
  </div>
  </div>
</SideNavItem>
  </Col>
  </div>:''}
  
      <Col s={this.state.num}>
      <div class="user">
        <div class="M-user-card">       
        <h3 class="title-user1" style={{fontSize:'30px/37px',fontWeight:'bold',fontFamily:'proxima Nova',marginLeft:'44px',color: '#000000',height:'34px',marginTop:''}}>Users</h3>
        {
          this.state.info.map(i=>(
            <React.Fragment>
              <Link to="/UserFleets">
             <div className="card-user2" onMouseEnter={e=>this.showUserDetails(i.email,i.username)} onClick={e=>this.props.clickUserFleet(i.email,i.username)}>
      <img src="pic1.png" alt="" class="circle"/>
      <p1 class="test1-user">{i.email}</p1>
      <p2 class="test2-user">{i.username}</p2>
      <p3 class="test3-user">{i.mobile}</p3>
            </div>
            </Link>
            </React.Fragment>
          ))
        }
        {this.state.close ?
            <div class="card newuser1-admin">
                {
                    this.state.userDetails.map(details=>(
                        <React.Fragment>
                    <img src="pic1.png" alt="" class="circle"/>
                    <p1 class="test1-user">{details.email}</p1>
                    <p2 class="test2-user">{details.username}</p2>
                    <p3 class="test3-user">{details.mobile}</p3><hr/>
                            {
                                details.relations.map(vinfo=>(
                                    <React.Fragment>                                    
                    
                <div>
                <span class="test4-user">VIN Number :<a class="test5-user"> 987654321AAA</a></span>
                <span class="test6-user">Vehicle Number :<a class="test7-user"> KA01A12345</a></span>
                </div>
                <div class="button1-user">
                <a class="waves-effect waves-light newuser-locate">Locate</a>
                </div><br/><hr/>
                                    </React.Fragment>
                                ))

                            }
                        </React.Fragment>
                    ))
                }                                  
            </div>:''}

   <div class='button-user'>       
<a class="waves-effect waves-light user-ad">Add user</a>
</div>
      </div>
      </div>
      </Col>
      </div>
      </div>
      
    );
  }
}

export default withRouter (User)    