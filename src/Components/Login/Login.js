import React, { Component } from 'react';
import {NavLink,BrowserRouter,withRouter} from 'react-router-dom';
 import './Login.css';
import Axios from 'axios';
 
 class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',password:''
    }
  }

  handleChange=(e)=>{
     this.setState({[e.target.name]:e.target.value})
  }

  loginHandler=(e)=>{
     let email=this.state.email;
     let password=this.state.password;
    
     Axios.post("https://fleet-tracking4.herokuapp.com/rest-auth/login/",{email,password})
     .then(resp=>{console.log(resp.data)
        localStorage.setItem("token",resp.data.key)
        this.props.history.push("/Map")
    })

      
  }
  
 render() {
   return (
     <div>
       <div className="bg-img"> 
            <div className="card-tot">
               <div className="card login-card ">
                  <div className="login-con">
                     <h4 className="text1">Track your vehicle</h4>
                      <span className="subT">Whenever, Wherever</span>
                  </div>
               <div className="row ma-in">
                 <div className="input-field log-input col s12">
                   <input  className="email" name="email" className="box1" placeholder="Email or Mobile Number" onChange={this.handleChange}/>
                   <label className="active">Email or Mobile Number</label>
                 </div>
               </div>
               <br/>
               <div className="row ma-in">
                 <div className="input-field col s12 log-input">
                   <input id="password" type="password" name='password' className="box1" placeholder="Password" onChange={this.handleChange}/>
                   <label className="active">Password</label>
                 </div>
               </div>
               <div className="pass">
                 <span className="">Forgot Password?</span>
               </div>
               <div className="btnn">
            <button className="waves-effect waves-light btn center-align w-btn" onClick={this.loginHandler}>Sign In</button>
               </div>
                <div className="T-c">
                  <span className="con">By clicking Sign In you agree to our <b className=" tex">Terms & Condition</b> and <b className="tex">Privacy Policy</b></span>
                </div>
                <hr className="hr-text" data-content="or"></hr>
                <div className="btn1">
               <a className="waves-effect waves-light btn center-align w-btn">Register</a>
               </div>
              
               </div>
            </div>
       </div>
     </div>
   )
 }
}

export default withRouter(Login);