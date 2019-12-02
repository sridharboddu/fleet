import React, { Component } from 'react';
import {NavLink,BrowserRouter,Link,withRouter} from 'react-router-dom';
import Axios from 'axios';
import './Register.css'
 class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
       email:'',
       password:'',
        confirmpassword:'',
        data:[],
        opacity:1,
        show:false
    }
  }
  handleChange=(e)=>{
     this.setState({[e.target.name]:e.target.value})
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
          this.setState({show:true})          
          localStorage.setItem("token",resp.data.key)
        }        
      }   
            )
            .catch(error=>{         
              if(error=="Error: Request failed with status code 400"){ 
              alert("A user is already registered with this e-mail address.")} 
                 else if(error=="Error: Network Error"){
                   alert("check your internet connection")
                 }           
                  
                })
                
              }
              else{
                alert("match the passwords")
              }
       }

 render() {
   return (
     <div>
      
     <form onSubmit={this.loginHandler}>
     {
  this.state.show?
 <div class="blur" style={{position:'absolute',top:'40%',left:'40%',zIndex:1}} >
  <div>
<h1 style={{fontFamily:'Proxima Nova',fontSize:"40px",color:'#12BE93'}} >Registration is Successful...!</h1>
<p style={{ position:'absolute',right:'150px', fontFamily:'Proxima Nova',fontSize:"25px",color:'#707070'}} >Please<Link to="./" style={{color:'#12BE93'}}> clickhere </Link>to login</p>
  </div>
  </div>:''}

       <div className="bg-img" style={{opacity:this.state.opacity}}> 
            <div className="card-tot">
               <div className="card login-card ">
                  <div className="login-con">
                     <h4 className="text1">Register your device</h4>                                      </div>
               <div className="row ma-in">
                 <div className="input-field log-input col s12">
                 <input  className="email" name="email" className ="box1 validate" placeholder="Email or Mobile Number" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleChange} required/>
                 <i class=" icon1  material-icons" >email</i>
                   <label className="active lab">Email or Mobile Number</label>
                 </div>
               </div>
               <br/>
               <div className="row ma-in">
                 <div className="input-field col s12 log-input">
                   <input id="password" type="password" name='password' className="box1 validate" placeholder="Password" pattern=".{8,}"  title="Six or more characters" onChange={this.handleChange} required/>
                   <i class=" icon2  material-icons" >lock</i>
                   <label className="active">Password</label>
                 </div>
               </div>
               <br/>
               <div className="row ma-in">
                 <div className="input-field col s12 log-input">
                   <input id=" confirm password" type="password" name='confirmpassword' className="box1 validate" placeholder=" Re-enter password" pattern=".{8,}"  title="Six or more characters" onChange={this.handleChange} required/>
                   <i class=" icon2  material-icons" >lock</i>
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
   )
 }
}
export default withRouter(Register);