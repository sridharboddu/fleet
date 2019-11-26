import React, { Component } from 'react';
import Axios from 'axios'
import { Connector } from 'mqtt-react';
import Map from './Map'

export default class Support extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:''
        }
    }
    
    componentDidMount(){  
        let token=localStorage.getItem("token");
        Axios.get("https://fleet-management-app.herokuapp.com/websockets/",
        {headers:{'Authorization':`Token ${token}`}})
        .then(resp=>
          {
            let url = `wss://${resp.data}`;
            console.log(url)
            this.setState({data:url})
          })
    }
    render() {
        return (
            <div>
                 {
        
        (this.state.data) && 
        <Connector mqttProps={this.state.data}>
                <Map />
  </Connector>

      }
            </div>
        )
    }
}