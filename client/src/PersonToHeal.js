import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




class PersonToHeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
                value: '',
                first: '',
                last: '',
                gender: '',
                age: 0,
                city: '',
                stateRegion: '',
                country: '',
                yourName: '',
                email: '',
                condition: 'This is where the condition to be healed will be. This is where the condition to be healed will be. This is where the condition to be healed will be. ',
                date: '',
                profile: ''
        }
    }
    
    render(){
    return(
    <div className="row ">
        <div className="col s12 m7">
        <div className="card">
            <div className="card-image">
                <img src={this.state.profile} ></img>
                <span className="card-title">{this.state.first} {this.state.last}</span>
            </div>

            <div className="card-content">
                <p>{this.state.condition}</p>
            </div>
            <label>
        <input type="submit" className="btn waves-effect waves-light" value="Submit" />
            </label>
      </div>
    </div>
  </div>
    )};

}

export default PersonToHeal;