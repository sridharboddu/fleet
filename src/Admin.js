import React, { Component } from 'react'
import Axios from 'axios'

export default class Admin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
        }
    }

    componentDidMount(){
        
        let key=localStorage.getItem("token");

        console.log(key);

           Axios.get("https://fleet-tracking4.herokuapp.com/add-list-devices/",
            {headers:{'Authorization' :`token ${key}`}})
           .then(resp=>{console.log(resp.data)
            this.setState({data:resp.data})
        }        
        )
        
    }
    
    render() {
        return (
            <div>

<table>
        <thead>
          <tr>
              <th>Device Id</th>
              <th>IMEI NUMBER</th>
              <th>PHONE NUMBER</th>
              <th></th>
          </tr>
        </thead>

        <tbody>
        <React.Fragment>
          {this.state.data.map(i=>(              
              <tr key={i.device_id}>                        
                          <td>{i.device_id}</td>
                          <td>{i.imei}</td>
                          <td>{i.phone}</td>
                          <td><button>EDIT</button></td>     
                          <td><button>DELETE</button></td>                 
                        </tr>      
        
                    ))}
            </React.Fragment>
            </tbody>
      </table>
                
            </div>
        )
    }
}
