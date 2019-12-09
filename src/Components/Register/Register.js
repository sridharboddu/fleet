import React, { Component } from 'react';
import './Register.css';
import {NavLink,BrowserRouter,Link,withRouter} from 'react-router-dom';
import Axios from 'axios';
 class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
       email:'',
       password:'',
        confirmpassword:'',
        data:[],
        opacity:1,
        show:false,hide:true,errorMessage:"",visible:true,appear:true
    }
  }
  handleChange=(e)=>{
     this.setState({[e.target.name]:e.target.value})
  }
  showPassword=()=>{
    this.setState({visible:!this.state.visible})
    let pass=document.getElementById("password");
    if(pass.type=="password"){
      pass.type="text"
    }       
  }
  hidePassword=()=>{
    this.setState({visible:!this.state.visible})
    let pass=document.getElementById("password");
    if(pass.type=="text"){
      pass.type="password"
    } 
  }
  showCpass=()=>{
    this.setState({appear:!this.state.appear})
    let new_pass=document.getElementById("confirm_password");
    if(new_pass.type=="password"){
      new_pass.type="text"
    }
  }
  hideCpass=()=>{
    this.setState({appear:!this.state.appear});
    let new_pass=document.getElementById("confirm_password");
    if(new_pass.type=="text"){
      new_pass.type="password"
    }
  }     

  loginHandler=(e)=>{    
    e.preventDefault();
     let email=this.state.email;
     let password1=this.state.password;
     let password2=this.state.confirmpassword;

     if(password1===password2){
      Axios.post("https://fleet-management-app.herokuapp.com/rest-auth/registration/",{email,password1,password2})
      .then(resp=>{ 
     console.log(resp.data)
     this.setState({opacity:0.2})    
      this.setState({data:resp.data})       
       if(resp.data){        
        this.setState({errorMessage:resp.data.detail})                    
        localStorage.setItem("token",resp.data.key)       
       }             
       }              
        )          
          .catch(error=>{                     
              if(error=="Error: Request failed with status code 400"){               
                this.setState({opacity:0.2})         
                this.setState({errorMessage:"The user already exists"})}                
                else if(error=="Error: Network Error"){                   
                  this.setState({errorMessage:"check internet connection"})                
                }                                            
               })                             
               }              
               else{               
                  this.setState({
                    errorMessage:"please match the passwords",
                    opacity:0.2
                  })           
                 }       
                }
                refreshPage=()=>{
                  window.location.reload(false);
                }

 render() { 
     return (  
          <div>   
   <form onSubmit={this.loginHandler}> 
  {/* {  this.state.show? 
    <div class="blur" style={{position:'absolute',top:'40%',left:'40%',zIndex:1}} >  
    <div>
    <h1 style={{fontFamily:'Proxima Nova',fontSize:"40px",color:'#12BE93'}} >Registration is Successful...!</h1>
    <p style={{ position:'absolute',right:'150px', fontFamily:'Proxima Nova',fontSize:"25px",color:'#707070'}} >Please<Link to="./" style={{color:'#12BE93'}}> clickhere </Link>to login</p>  
    </div>  
    </div>:''}     */}
    {  this.state.errorMessage && 
     <div className="card modals">
     <img class="component" src="component.png"></img>
     <span className="content-reg valign-wrapper">{this.state.errorMessage}</span>
     <button class="btn center-align  modal-trigger flat-btn " onClick={this.refreshPage}>ok</button>
     </div>}   
    <div className="bg-img" style={{opacity:this.state.opacity}}>        
       <div className="card-tot">  
       <div className="card login-card" id="card">
       <div className="login-con"> 
        <h4 className="text1">Register your device</h4>                                      
   </div>               
      <div className="row ma-in">                 
      <div className="input-field log-input col s12">                 
       <input name="email" className ="box1 validate" placeholder="Email or Mobile Number" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleChange} required/>                
      <i class=" icon1  material-icons" >email</i>                   
       <label className="active lab">Email or Mobile Number</label>                
         </div>               
      </div>               
      <br/>               
     <div className="row ma-in">                 
  <div className="input-field col s12 log-input">                   
   <input id="password" type="password" name='password' className="box1 validate" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z]).{8,}"  title="minimum 8 characters,should be contain letters and numbers" onChange={this.handleChange} required/> 
   {this.state.visible?
     <i class=" icon2  material-icons" onClick={this.showPassword} >visibility</i>:                  
     <i class=" icon2  material-icons" onClick={this.hidePassword}>visibility_off</i>}                   
  <label className="active">Password</label>                 
     </div>             
     </div>              
      <br/>              
      <div className="row ma-in">                 
     <div className="input-field col s12 log-input">                   
    <input id="confirm_password" type="password" name='confirmpassword' className="box1 validate" placeholder=" Re-enter password" pattern="(?=.*\d)(?=.*[a-z]).{8,}"   title="minimum 8 characters,should be contain letters and numbers" onChange={this.handleChange} required/>                   
    {this.state.appear?
     <i class=" icon2  material-icons" onClick={this.showCpass} >visibility</i>:                  
     <i class=" icon2  material-icons" onClick={this.hideCpass}>visibility_off</i>}                  
    <label className="active">Confirm password</label>                
    </div>               
    </div>                     
   <div className="btnn">            
   <button className=" btn center-align w-btn modal-trigger" href="#modal1">Register</button>             
    </div>               
   </div>            
    </div>   
   </div>         
    </form>         
  </div>  
  ) }}
 export default withRouter(Register);