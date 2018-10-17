import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class CreateGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gamefrequency: " ",
            time: " ",
            startdate: " ",
            venue: " ",
            address: " ",
            city: " ",
            state: " ",
            zipcode: " ",
            cost: " ",
            notes: " ",
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/games/creategames`, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            this.setState({
                id: " ",
                gamefrequency: " ",
                time: " ",
                startdate: " ",
                venue: " ",
                address: " ",
                city: " ",
                state: " ",
                zipcode: " ",
                cost: " ",
                notes: " ",
            })
        })
    }

    render() {
        return (
            <div>
                  <h2>Start a Game!</h2>
                    <Form md="3" className onSubmit={this.handleSubmit} >
                        <FormGroup >
                            <Label for="frequency">Game Frequency</Label>
                            <Input id="frequency" type="select" name="frequency" value={this.state.frequency} placeholder="Type" onChange={this.handleChange}>
                            <option></option>
                            <option value="Only Once">Only Once</option>
                            <option value= "Every Week">Every Week</option>
                            </Input>
                        </FormGroup>
                    <FormGroup>
                        <Label for="startdate">Start Date and Time</Label>
                        <Input id="startdate" type="datetime-local" name="startdate" value={this.state.startdate} placeholder="enter start date" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="venue">Venue</Label>
                        <Input id="venue" type="text" name="venue" value={this.state.venue} placeholder="enter venue name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input id="address" type="text" name="address" value={this.state.address} placeholder="enter address" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input id="city" type="text" name="city" value={this.state.city} placeholder="enter city" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="state">State</Label>
                        <Input id="state" type="text" name="state" value={this.state.state} placeholder="enter state" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="zipcode">Zip Code</Label>
                        <Input id="zipcode" type="text" name="zipcode" value={this.state.zipcode} placeholder="enter zipcode" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cost">Cost</Label>
                        <Input id="cost" type="text" name="cost" value={this.state.cost} placeholder="enter cost" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="notes">Notes</Label>
                        <Input id="notes" type="text" name="notes" value={this.state.notes} placeholder="enter notes" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Save </Button>
                    </Form>

                    </div>

        )
    }
}

export default CreateGame;