import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import Axios from 'axios';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[]
    }
  }
  // componentDidMount(){
  //   Axios.get("http://localhost:3000/ws")
  //   .then(resp=>this.setState({data:resp.data}));
  // }
  render() {
    return (
      
      <LeafletMap
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
          {
            this.state.data.map(i=>(
              <div>
                <Marker position={[16,78]}>
                  <Popup>HYDERABAD</Popup>
                </Marker>
              </div>
            ))
          }
      </LeafletMap>
    );
  }
}

export default Dashboard;