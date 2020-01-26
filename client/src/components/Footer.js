import React, { Component } from 'react'
import {Link} from 'react-router-dom';



class Footer extends Component {
  render() {
    return (
     
      <footer className="page-footer">
         
         
             
                <h5 className="white-text">INTENT</h5>
                <ul>
                  <li><Link to="/about" className="white-text" >ABOUT</Link></li>
                  <li><Link to="/resources" className="white-text">RESOURCES</Link></li>
                  <li><Link to="/contact" className="white-text">CONTACT</Link></li>
                </ul>
          
          
         
          <div className="footer-copyright">
            <div className="container">
            © 2020
           
            </div>
          </div>
        </footer>
     
    )
  }
}

export default Footer;