import React from "react";
import { Table, Button } from "reactstrap";

const GamesTable = (props) => {
    return (
        <div>
            <h3>Games Table</h3>
            <hr />
            <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Frequency</th>
                    <th>Time</th>
                    <th>Venue</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zipcode</th>
                    <th>Cost</th>
                    <th>Notes</th>
                </tr>
            </thead>
        <tbody>
            {
                props.games.map((games, id) => {
                    return (
                        <tr key={id}>
                        <th scope="row">{games.id}</th>
                        <td>{games.frequency}</td>
                        <td>{games.time}</td>
                        <td>{games.venue}</td>
                        <td>{games.address}</td>
                        <td>{games.city}</td>
                        <td>{games.state}</td>
                        <td>{games.zipcode}</td>
                        <td>{games.cost}</td>
                        <td>{games.notes}</td>
                        <td>
                            <Button id={games.id} onClick={props.delete} color="danger">Delete</Button>
                            <Button id={games.id} onClick={e => props.update(e, games)} color="warning">Update</Button>
                        </td>
                        </tr>
                    )})}
                    </tbody>
                </Table>
            </div>
    )
}

export default GamesTable;