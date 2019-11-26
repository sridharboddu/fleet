import React, { Component } from 'react'
import Axios from 'axios'

export default class Forgot extends Component {
  constructor(props) {
    super(props)  
    this.state = {
       email:'',
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
          .then(resp=>alert(resp.data.detail))
         }
        })
        .catch(error=>alert("Email not exist,please register"))                                 
  }  
    render() {
        return (
            <div>
              
                <div  style={{position:"absolute",top:"35%",left:"25%"}} >
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