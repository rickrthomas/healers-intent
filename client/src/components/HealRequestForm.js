import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import axios from 'axios';

class HealRequestForm extends Component {
constructor(props) {
super(props);
this.state = {
value: '',
first: '',
last: '',
gender: '',
age: '',
city: '',
stateRegion: '',
country: '',
yourName: '',
email: '',
condition: '',
profile: ''
};


this.handleChange =
this.handleChange.bind(this);
this.handleSubmit =
this.handleSubmit.bind(this);
}



handleChange = (event) => {
this.setState({value: event.target.value});
}

handleSubmit = (event) => {
  event.preventDefault();
  
  const persontoheal = {
    value: this.state.value,
    first: this.state.first,
    last: this.state.last,
    gender: this.state.gender,
    age: this.state.age,
    city: this.state.city,
    stateRegion: this.state.stateRegion,
    country: this.state.country,
    yourName: this.state.yourName,
    email: this.state.email,
    condition: this.state.condition,
    profile: this.state.profile
  }
  
  console.log(persontoheal);

  alert('A name was submitted: ' + this.state.value);
  axios.post('http://localhost:5000/healrequestform/add', persontoheal)
    .then(res => console.log(res.data));



}

render(){
return (

<div className="container">
  <h3>Healing Request</h3>
  <h4>About the Person in need of healing</h4>
  <form onSubmit={this.handleSubmit} >
      
        <div className="form-group col s12 m6">
            <label>
              First Name
                <input
                  type="text" 
                  className="validate" 
                  value={this.state.first.value} 
                  onChange={this.handleChange}
                  name="first" 
                />
            </label>
        </div>
        <div className="form-group col s12 m6">
         
            <label>
              Last Name
                <input 
                type="text" 
                className="validate" 
                value={this.state.last.value} 
                onChange={this.handleChange} 
                name="last" 
                />
            </label>
        </div>
      
      
        <div className="form-group col s6">
            <label>
              Age
                <input 
                type="number" 
                className="validate" 
                value={this.state.age.value} 
                onChange={this.handleChange} 
                name="age" 
                />
            </label>
        </div>  
        <div className="form-group col s6">  
            <label>
              Gender
                <input 
                type="text" 
                className="validate" 
                value={this.state.gender.value} 
                onChange={this.handleChange}
                name="gender" 
                />
            </label>
        </div>
        
      <h4>Where They Live</h4>
        <div className="form-group col s6">
            <label>
              City
              <input 
              type="text" 
              value={this.state.city.value} 
              onChange={this.handleChange} 
              name="city" 
              />
            </label>
        </div>
        <div className="form-group col s6">
            <label>
              State or Region
              <input 
              type="text" 
              value={this.state.stateRegion.value} 
              onChange={this.handleChange} 
              name="state" 
              />
            </label>
        </div>
        <div className="form-group col s6">
            <label>
              Country
              <input 
              type="text" 
              value={this.state.country.value} 
              onChange={this.handleChange} 
              name="country" 
              />
            </label>
        </div>
        <div className="form-group">
            <label>
              Profile Picture
              <input 
              className="btn waves-effect waves-light" 
              type="file" value={this.state.profile.value} 
              onChange={this.handleChange} 
              name="profile"
              />
            </label>
        </div>
    <h4>Conditions requested to heal</h4>
        <div className="form-group">
            <label>
              Conditions
            </label>
    
            <TextareaAutosize 
            type="text" 
            value={this.state.condition.value} 
            onChange={this.handleChange} 
            name="yourName">
            </TextareaAutosize>
        </div>
    <h4>Contact</h4>
        <div className="form-group">
            <label>
              Your Name
              <input 
              type="text" 
              value={this.state.yourName.value} 
              onChange={this.handleChange} 
              name="yourName" 
              />
            </label>
        </div>
        <div className="form-group">
            <label>
              Email
              <input 
              type="email" 
              value={this.state.email.value} 
              onChange={this.handleChange} 
              name="email" 
              />
            </label>
        </div>
   
      <div className="row">
        <div className="form-group">
            <label>
              <input 
              type="submit" 
              className="btn waves-effect waves-light" 
              value="Submit" 
              />
            </label>
        </div>
      </div>
  </form>
</div>
);
}
};





export default HealRequestForm;