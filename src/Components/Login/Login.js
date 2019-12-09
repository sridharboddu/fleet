import React, { Component } from 'react';
import {NavLink,Link,BrowserRouter,withRouter} from 'react-router-dom';
 import './Login.css';
import Axios from 'axios';
 
 class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     email:'',
      password:'',
       data:'',
       show:true,
       opacity:1,
       errorMessage:''
        } 
       } 
     handleChange=(e)=>{     
      this.setState({[e.target.name]:e.target.value})  
       
        }  
        loginHandler=(e)=>{    
       e.preventDefault();     
    let email=this.state.email;  
    let password=this.state.password;  
    console.log(email,password)      
    Axios.post("https://fleet-management-app.herokuapp.com/rest-auth/login/",{email,password})     
    .then(resp=>{this.setState({data:resp.data})     
    console.log(resp.data.non_field_errors)       
    if(resp.data){                
      localStorage.setItem("token",resp.data.key)              
    this.props.history.push("/Support")        
  }                                   
}                                   )     
.catch(error=>{              
   if(error=="Error: Request failed with status code 400"){  
    this.setState({opacity:0.2})         
    this.setState({visible:true})
    this.setState({errorMessage:"Invalid Id or password"})
  }         
       else if(error=="Error: Network Error"){           
            this.setState({errorMessage:"check internet connection"})       
        }                             
  })      
  }
  showPassword=()=>{
    this.setState({show:!this.state.show})
    let pass=document.getElementById("password");
    if(pass.type=="password"){
      pass.type="text"
    }       
  }
  hidePassword=()=>{
    this.setState({show:!this.state.show})
    let pass=document.getElementById("password");
    if(pass.type=="text"){
      pass.type="password"
    } 
  }
  refreshPage=()=>{
    window.location.reload(false);
  }
 render() {
   return (
     <div >
       <form onSubmit={this.loginHandler}>
       {  this.state.errorMessage && 
     <div className="card modals" >
     <img class="component" src="component.png"></img>
     <span className="content-log">{this.state.errorMessage}</span>
     <NavLink to="/"><button class="btn valign-wrapper  modal-trigger flat-btn" onClick={this.refreshPage}>ok</button></NavLink>
     </div>}
           
         
  <div className="bg-img" style={{opacity:this.state.opacity}}> 

    <div className="card-tot">               
   <div className="card login-card1" id="card">                 
   <div className="login-con">                    
   <h4 className="text1">Track your vehicle</h4>
   <span className="subT">Whenever, Wherever</span>
       </div>
       <div className="row ma-in">                 
      <div className="input-field log-input col s12">                  
      <input Image-url="Msg.svg" className="box1 validate"  name="email"  placeholder="Email or Mobile Number" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  onChange={this.handleChange}  required/>
      <i class=" icon1  material-icons" >email</i>                   
      <label className="active lab">Email or Mobile Number</label>                 
   </div>
 </div>
   <br/>
     <div className="row ma-in">
     <div className="input-field col s12 log-input">
     <input  id="password" type="password" name='password' className="box1 validate" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z]).{8,}"  title="minimum 8 characters,should be contain letters and numbers" onChange={this.handleChange} required/>
     {this.state.show?
     <i class=" icon2  material-icons" onClick={this.showPassword} style={{marginLeft:'-30px'}} >visibility</i>:                  
     <i class=" icon3  material-icons" onClick={this.hidePassword}>visibility_off</i>}
       <label className="active">Password</label>
       </div>
       </div>
               
 <div className="">
   <Link to="/Forgot"><span className="pass">Forgot Password</span></Link>
   </div>
 <div className="btnn">
<button className=" btn center-align  w-btn" >sign in</button>
    </div>
     <div className="T-c">
     <span className="con">By clicking Sign In you agree to our <b className=" tex">Terms & Condition</b> and <b className="tex">Privacy Policy</b></span>
     </div>
     <hr className="hr-text" data-content="or"></hr>
        <div className="btn1">
      <NavLink to="Register"><button className="btn center-align w-btn" id='reg'>Register</button></NavLink>
     </div>
   </div>
  </div>
  </div>
 </form>
     </div>
   )
 }
}

export default withRouter(Login);