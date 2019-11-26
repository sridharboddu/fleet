import React from 'react'

export default function Header() {
    return (
        <div>
            <nav>
   <div className="nav-wrapper black-text white">
     {/* <a href="#" class="brand-logo center">Logo</a> */}
     <ul id="nav-mobile" className="left hide-on-med-and-down">
       <li> <i className="material-icons ion">menu</i></li>
       <li>
           <form>
       <div className="input-field" style={{position:"relative",left:'100px'}}>
         {/* <label class="label-icon" for="search"><i class="material-icons">search</i></label>  */}
         <i className="material-icons prefix ser">search</i>
         <input id="search" type="text" style={{width:'300px'}} placeholder="Search"  required/>
         <a className="waves-effect waves-light btn white black-text btn-sch">Search</a>
       </div>
     </form>
       </li>
     </ul>
     <ul id="nav-mobile" className="right hide-on-med-and-down">
       <li> <i className="material-icons silver-text not">notifications</i></li>
    <li><b style={{margin:"10px"}}>Arya</b></li>
    <li className=" collection-item avatar"> <img src="" width="45px" height="45px"  className="circle" style={{marginRight:"20px"}}/></li>
     </ul>
   </div>
 </nav>
        </div>
    )
}
