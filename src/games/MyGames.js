import React from "react";
import { Table, Button } from "reactstrap";

const MyGames = (props) => {
    return (
        <div>
            <h3>My Games </h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Cost</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            props.games.map((games, id) => {
                                return (
                                    <tr key={id}>
                                    <th scope="row">{games.id}</th>
                                    <td>{games.date}</td>
                                    <td>{games.time}</td>
                                    <td>{games.location}</td>
                                    <td>{games.cost}</td>
                                    <td>
                                        <Button id={games.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={games.id} onClick={e => props.update(e, games)} color="warning">Update</Button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
        </div>
    );
}

export default MyGames;