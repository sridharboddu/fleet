import React, { Component } from 'react';
import {Link,NavLink,BrowserRouter,withRouter} from 'react-router-dom';
 import './Login.css';
import Axios from 'axios';
 
 class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',password:'',data:'',
    }
  }

  handleChange=(e)=>{
     this.setState({[e.target.name]:e.target.value})
  }

  loginHandler=(e)=>{
    e.preventDefault();
     let email=this.state.email;
     let password=this.state.password;
    
     Axios.post("https://fleet-management-app.herokuapp.com/rest-auth/login/",{email,password})
     .then(resp=>{this.setState({data:resp.data})
     console.log(resp.data.non_field_errors)
       if(resp.data){        
        localStorage.setItem("token",resp.data.key)      
        this.props.history.push("/Support") 
       }                               
    }                               
    ) 
    .catch(error=>alert("Entered Details are incorrect,Please Login with Valid Details"))      
  }
  
 render() {
   return (
     <div>
       <form  onSubmit={this.loginHandler}>
       <div className="bg-img"> 
            <div className="card-tot">
               <div className="card login-card ">
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
                   <input  id="password" type="password" name='password' className="box1 validate" placeholder="Password" pattern=".{6,}"  title="Six or more characters" onChange={this.handleChange} required/>
                   <i class=" icon2  material-icons" >lock</i>
                   <label className="active">Password</label>
                 </div>
               </div>
               
               <div className="pass">
                <Link to="Forgot"><span className="">Forgot Password?</span></Link>
               </div>
               <div className="btnn">
            <button className=" btn center-align w-btn" >Sign In</button>
               </div>
              
                <div className="T-c">
                  <span className="con">By clicking Sign In you agree to our <b className=" tex">Terms & Condition</b> and <b className="tex">Privacy Policy</b></span>
                </div>
                <hr className="hr-text" data-content="or"></hr>
                <div className="btn1">
             <NavLink to="Register"><button className=" btn center-align w-btn">Register</button></NavLink>
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