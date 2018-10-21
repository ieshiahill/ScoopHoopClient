import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
// import APIURL from "../helpers/environment";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: " ",
            username: " ", //Note that we've added username and password to our state. We want to set these items to empty strings to set the initial value for the state of those properties. Simply put, when a user starts the application those properties should not have values.
            password: " "
        };
    }

    handleChange = (event) => { //Each time the user types inside of the input, we want the state to change: 1. This function takes in the event (which is captured when the user types something into the input).
        this.setState({ //We call the setState method that will allow us to change the state of the application. 
            [event.target.name]: event.target.value, //It takes the name field of the target, which in our case is username and password. We grab the value, which is what the user typed into the input fields for username and password. 
        });
    }

    handleSubmit = (event) => {
        // fetch(`${APIURL}/user/createuser`, { //must use the endpoint (local host) the service is running on - this is listed in the app.js
          fetch("http://localhost:3000/user/createuser", {
          method: "POST",
          body: JSON.stringify({user:this.state}),
          headers: new Headers({
              "Content-Type": "application/json"
          })
        }).then(
            (response) => response.json(),
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
    }
    
    render() {
        return (
        <div>
            <h1>Sign Up</h1>
            <h6>Sign up to get started!</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label id="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="enter email address" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" minLength="5" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
        </div>
        )  
    }
}

export default Signup;

//Like the Log in component, this is a standard Class Component that comes with state. We need it to be a class component because the state of the form will change as our users enter data. The form will be handling our username and password fields.
//A few key items to note: 1. Notice the name property in the Input component calls: "username" and "password". We will be tethering our state to those name properties later on when we want to gather values for signing up a user. 2. The id properties start with 'su'. This is our choice/convention for 'sign up'.
//In App.js we set the state of our token as an empty string. 2. In App.js we pass our setSessionState function as a prop from our App.js to our Auth.js in a property called setToken. 3. In Auth.js we then pass our token as a prop to Signup.js.

