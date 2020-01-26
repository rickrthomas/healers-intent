import React from 'react';
import {Link } from 'react-router-dom';
import Intention_Logo from './Intention_Logo.png';



const NavComponent = () => {
return (
<nav>
    <div  className="nav-wrapper">
    
    <Link to="/home" className="brand-logo center" ><img src={Intention_Logo} alt="Intention Logo" className="nav-logo"></img></Link>
    
   

                <ul className="center">
                    <li className="nav-links right"><Link to="/instructions" >HEALING CIRCLE</Link></li>
                    
                    <li className="nav-links left"><Link to="/disclaimer" >HEALING REQUEST</Link></li>                 
                    
                </ul>
            </div>
        
    
   
</nav>

);

};

export default NavComponent;