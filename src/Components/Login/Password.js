import React, { Component } from 'react'
import Axios from 'axios';
import {NavLink,Link,BrowserRouter,withRouter} from 'react-router-dom';

export default class password extends Component {
  constructor(props) {
    super(props)  
    this.state = {
        password:'',cpassword:'',data:[],details:[],message:'',errorMessage:''
    }
  }
  
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
    
  

  submitHandler=(e)=>{
    let para=this.props.match.params;
    let new_password1=this.state.password;
    let new_password2=this.state.cpassword;    
    let uid=this.props.match.params.uid;
    let token=this.props.match.params.token;

    if(new_password1===new_password2){
      Axios.post("https://fleet-management-app.herokuapp.com/rest-auth/password/reset/confirm/    ",{new_password1,new_password2,uid,token})
      .then(resp=>{
        this.setState({message:resp.data.detail})
      })
      .catch(error=>{
        this.setState({errorMessage:"invalid token"})
      })
    }
    else{
      this.setState({errorMessage:"please match the password"})
    }
        
    

  }
  
    render() {
     console.log(this.props.match.params)       
        return (
            <div>
              {  this.state.message && 
     <div className="card modals">
     {/* <img class="component" src="component.png"></img> */}
     <span className="content-log">{this.state.message}</span>
    <Link to="Login"><button class="btn valign-wrapper  modal-trigger flat-btn">ok</button></Link>
     </div>}
     {  this.state.errorMessage && 
     <div className="card modals">
     {/* <img class="component" src="component.png"/> */}
     <span className="content-log">{this.state.errorMessage}</span>
    <Link to="/Forgot"><button class="btn valign-wrapper  modal-trigger flat-btn">ok</button></Link>
     </div>}
              
                <div  style={{position:"absolute",top:"35%",left:"25%"}} >
                 <div class="row">
    <div class="col s12">
      <div class="card" style={{width:"648px"}}>
        <div class="card-content black-text">
        <div className="row ma-in">
        <div className="row ma-in">
                 <div className="input-field col s12 log-input">
                   <input id="password" type="password" name='password' onChange={this.handleChange} className="box1 validate" placeholder=" Enter New Password" pattern=".{6,}"  title="Six or more characters"  required/>
                   <i class=" icon1  material-icons" >lock</i>
                   <label className="active"> New Password</label>
                 </div>
               </div>
               <div className="row ma-in">
               <div className="input-field col s12 log-input">
                   <input id="cpassword" type="password" name='cpassword'  onChange={this.handleChange} className="box1 validate" placeholder="Password" pattern=".{6,}"  title="Six or more characters"  required/>
                   <i class=" icon1  material-icons" >lock</i>
                   <label className="active">Confirm Password</label>
                 </div>
               </div>
               </div>  
               <div className="btn1 center">
            <button className=" btn center-align w-btn" onClick={this.submitHandler}>Submit</button>
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