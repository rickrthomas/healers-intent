import React, { Component } from 'react';

const emailRegex = RegExp(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);


const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach ( val => {val.length > 0 && (valid=false);});
    return valid;
};

class Login extends Component {
constructor(props){
    super(props);

    this.state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        formErrors: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    };
    
}

handleSubmit =  e => {
    e.preventDefault();

    if(formValid(this.state.formErrors)){
        console.log(`Submitting
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        `)
    } else {
        console.error('Form Invalid - display error message');
    }
};

handleChange = e => {
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;
    switch (name) {
        case 'firstName':
        formErrors.firstName = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : "";
        break;
        case 'lastName':
        formErrors.lastName = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : "";
        break;
        case 'email':
        formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : 'invalid email address';
        break;
        case 'password':
        formErrors.password = value.length < 6 && value.length > 0 ? 'minimum 3 characters required' : "";
        break;
       
        default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));

};


    render() {
        const { formErrors } = this.state;
        
return (

<div className="wrapper container">
    <div className="form-wrapper">
        <h1>Create Account</h1>
        <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="" placeholder="First Name" name="firstName"
                    onChange={this.handleChange} noValidate />
                {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                )}

            </div>
            <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="" placeholder="Last Name" name="lastName"
                    onChange={this.handleChange} noValidate />
            </div>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" className="" placeholder="Email"  name="email"
                    onChange={this.handleChange} noValidate />
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" className="" placeholder="Password"  name="password"
                    onChange={this.handleChange} noValidate />
            </div>
            <div className="createAccount">
            <button type="submit">Create Account</button>
            <small>Already Have an Account?</small>
            </div>
        </form>
    </div>
</div>
);
}
};

export default Login;