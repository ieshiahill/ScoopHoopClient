import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem , NavbarToggler, Collapse, Button } from "reactstrap";
// import CreateGame from ".../games/CreateGame";


class Sitebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return (
            <div>
                <Navbar className="nav" color="faded" light expand="md">
                    <NavbarBrand href="/">Scoop Hoop</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Sitebar;