// import React from "react";
// import { Table, Button } from "reactstrap";

// const MyGames = (props) => {
//     return (
//         <div>
//         </div>
//     )

//     return (
//         <div>
//             <h3>My Games</h3>
//             <hr />
//             <Table striped>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Date</th>
//                     <th>Time</th>
//                     <th>Location</th>
//                     <th>Cost</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>

//             {
//                 props.game.map((game, id) => {
//                     return (
//                         <tr key={id}>
//                         <th scope="row">{game.id}</th>
//                         <td>{game.date}</td>
//                         <td>{game.time}</td>
//                         <td>{game.cost}</td>
//                         <td>
//                             <Button id={game.id} onClick={props.delete} color="danger">Delete</Button>|
//                             <Button id={game.id} onClick={e => props.update(e, game)} color="warning">Update</Button>
//                         </td>
//                         <tr>
//                     )
//                 })
//             }
//             </tbody>
//             </Table>
//             </div>

//     )
// }

// export default MyGames;