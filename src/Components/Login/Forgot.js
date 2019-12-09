import React, { Component } from 'react'
import Axios from 'axios';
import {Link,NavLink} from 'react-router-dom'

export default class Forgot extends Component {
  constructor(props) {
    super(props)  
    this.state = {
       email:'',errorMessage:'',opacity:1,data:''
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }   
   
  

  submitHandler=(e)=>{
    let email=this.state.email;    
    let data=this.state.data;   
    
    Axios.post("https://fleet-management-app.herokuapp.com/emailcheck/",{email})
    .then(resp=>{this.setState({data:resp.data})
         if(resp.data===true){          
          Axios.post("https://fleet-management-app.herokuapp.com/rest-auth/password/reset/",{email})
          .then(resp=>{
            this.setState({
              data:resp.data.detail,
              opacity:0.2
            })
          })
         }
        })
        .catch(error=>{
          this.setState({
            errorMessage:"Enter registered email id ",
            opacity:0.2
          })
        })                                 
  }  
  refreshPage=()=>{
    window.location.reload(false);
  }
    render() {
        return (
            <div>

{  this.state.errorMessage && 
     <div className="card modals">
     <img class="component" src="component.png"></img>
     <span className="content-log">{this.state.errorMessage}</span>
    <button class="btn valign-wrapper  modal-trigger flat-btn" onClick={this.refreshPage} >ok</button>
     </div>}
     {  this.state.data && 
     <div className="card modals">
     <img class="component" src="mail-sent.png" width="60px"></img>
     <span className="content-log">{this.state.data}</span>    
     </div>}
              
                <div  style={{position:"absolute",top:"35%",left:"23%",opacity:this.state.opacity}} >
                 <div class="row">
    <div class="col s12">
      <div class="card" style={{width:"648px"}}>
        <div class="card-content black-text">
        <div className="row ma-in">
                 <div className="input-field log-input col s12">
                   <input  className="box1 validate"  name="email"  placeholder="Enter email to continue" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  onChange={this.handleChange} required/>
                   <i class=" icon1  material-icons" >email</i>
                   <label className="active lab">Enter Email</label>
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