import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';

export default class Registered extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false,
        }
    }
    
    componentDidMount(){
        let key=this.props.match.params.key;
         Axios.post(`http://fleet-management-app.herokuapp.com/registration/account-confirm-email/${key}/`)
         .then(resp=>{
             console.log(resp.data);
            if(resp.data){
                this.setState({show:true})
            }             
         })
    }
    render() {
              
        return (
            <div> 
                {this.state.show ?              
    <div class="blur" style={{position:'absolute',top:'40%',left:'40%',zIndex:1}} >  
    <div>
    <h1 style={{fontFamily:'Proxima Nova',fontSize:"40px",color:'#12BE93'}} >Registration is Successful...!</h1>
    <p style={{ position:'absolute',right:'150px', fontFamily:'Proxima Nova',fontSize:"25px",color:'#707070'}} >Please<Link to="./" style={{color:'#12BE93'}}> clickhere </Link>to login</p>  
    </div>  
                </div>:''}
            </div>
        )
    }
}
