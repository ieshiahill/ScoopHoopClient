import React from "react";
import { Container, Row, Col } from "reactstrap";
import Signup from './Signup'
import Login from './Login'
import './auth.css'
// import Logout from "./Logout"

//We are creating a functional component. It has no state, and it will simply pull in the props that will be passed down eventually. Currently, this component is basically going to hold our login and signup forms side by side.
class Authorize extends React.Component { //We are adding props to our parameter. Remember that this is a functional component, like a function it can take in arguments to be used throughout the function.
    // constructor(props) {
    //     super(props)
    // }
    
    render() {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup setToken={this.props.setToken} /> 
                </Col>
                <Col md="6" className="login-col">
                    <Login setToken={this.props.setToken} />
                </Col>
            </Row>
        </Container>
    )
    }
}
export default Authorize;

//line 12: We create a property(prop) called setToken. This will allow us to pass the token down to our Signup function. This is not the same as the setToken in the App.js component. It's a property that will be associated with a lower component, and it is named the same for clearly bridging the props through the unidirectional flow. These props are tethered to the props parameter in the parens above. When we use the dot accessor on that props variable, we can use access the properties from App.js. Look where we call the Auth component in App.js: <Auth setToken={this.setSessionState}/>
//line 15: We do the same process of on our Login Call.