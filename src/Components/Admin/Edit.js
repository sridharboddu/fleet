import React, { Component } from 'react'
import Axios from 'axios'

export default class Edit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true,hide:true,data:[],type:'',name:'',id:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidMount(){
        Axios.get("http://localhost:3000/ws")
        .then(resp=>{
            console.log(resp.data)
            this.setState({data:resp.data})
        })
    }
    typeHandler=(type,id,index)=>{
        this.setState({
            type:type,
             id:id
        })
        this.setState({show:!this.state.show})
        console.log(index)
    }
    nameHandler=(name,id)=>{
       this.setState({
           name:name,
           id:id
        })
       this.setState({hide:!this.state.hide})
       
    }
    showhide=()=>{
        this.setState({hide:!this.state.hide})
    }
    typeKeydownHandler=(e)=>{
        let id=this.state.id;
        let type=this.state.type;
       if(e.keyCode==13){
           Axios.patch(`http://localhost:3000/ws/${id}`,{type})
           .then(resp=>{console.log(resp.data)

            window.location.reload();
        })
       }
    }
    nameKeydownHandler=(e)=>{
        let id=this.state.id;
        let name=this.state.name;
       if(e.keyCode==13){
           Axios.patch(`http://localhost:3000/ws/${id}`,{name})
           .then(resp=>{console.log(resp.data)
            window.location.reload();
        })
       }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((i,index)=>(
                        <React.Fragment>
                                      <div class="row" style={{position:"absolute",top:"30%",left:"35%",width:"648px",height:"546px"}}>
    <div class="col">
      <div class="card blue-grey darken-1 ">
        <div class="card-content black-text">
          <span class="card-title center">Card Title</span>
          <div className="row">
              <div className="col">
                  <label>VIN Number :</label>
              {this.state.show?
             <span>{i.type}</span>:           
             <input type='text' name='type' onKeyDown={this.typeKeydownHandler} onChange={this.handleChange} value={this.state.type}/>}
             {this.state.show?
             <i class="material-icons" onClick={e=>this.typeHandler(i.type,i.id,index)}>edit</i>:''}
              </div>  
              <div className="col">
              <label>VIN Number :</label>
              {this.state.hide?
             <span>{i.name}</span>:           
             <input type='text' onChange={this.handleChange}  onKeyDown={this.nameKeydownHandler} value={this.state.name} name="name"/>}
             {this.state.hide?
              <i class="material-icons" onClick={e=>this.nameHandler(i.name,i.id)}>edit</i>:''}
              </div>                     
          </div>                     
        </div>
        
      </div>
    </div>
  </div>
                        </React.Fragment>
                    ))
                }       
  
            </div>
        )
    }
}
