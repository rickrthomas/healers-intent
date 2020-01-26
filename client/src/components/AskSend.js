import React, { Component } from 'react';
import ask from './ask.png';
import send from './send.png';
import {Link} from 'react-router-dom';


class AskSend extends Component {
  render() {
    return (
      <div>
      
      <div className="askSendContainer">
      <img src ={ask} className="askSendPic" alt="Ask for Healing"></img>
        <Link to="/create" className="askSendText" style={{ textDecoration: 'none' }}>ASK FOR HEALING</Link>
      </div>  
      <div className="askSendContainer">
        <img src={send} className="askSendPic" alt="Send Healing"></img>
        <Link to="/instructions" className="askSendText" style={{ textDecoration: 'none' }}>SEND HEALING</Link>
      </div>
      </div>
    
    )
  }
};



export default AskSend;