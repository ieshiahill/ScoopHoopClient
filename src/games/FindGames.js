// import React, { Component } from "react";
// import { Container, Col, Row } from "reactstrap";
// import GamesTable from "../games/GamesTable";
// import CreateGame from "../games/CreateGame";
// // import APIURL from "../helpers/environment";

// class FindGames extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             "games": {
//             "gamefrequency": "",
//             'time': "",
//            'startdate': "",
//             'venue': "",
//             'address': "",
//            'city': "",
//             "state": "",
//             'zipcode': "",
//             'cost': "",
//             'notes': ""
//         }
//     }
// }

//     // handleChange(event){
//     //     this.setState({ //having issues with this line of code after the city is selected
//     //         [event.target.games]: event.target.value
//     //     })
//     // }

//     componentWillMount() {
//         this.fetchGames();
//     }

//     fetchGames = () => {
//         // fetch(`${APIURL}/games/find`, {
//             fetch("http://localhost:3000/games", {
//             method: "GET",
//             headers: new Headers({
//                 "Content-Type": "application/json",
//                 "Authorization": this.props.token
//             })
//         })
//         .then((res) => res.json())
//         .then((gamesData) => { 
//             return this.setState({ games: gamesData })
//         })
//     }

//     shouldComponentUpdate() {
//         return true;
//     }

// render() {
//     const games = this.state.games.length >= 1 ?
//     <GamesTable games={this.state.games} 
//     delete={this.gamesDelete} update={this.setUpdatedGames} /> : <h3>Available Games</h3>
    
//     return (
        
//         <div>
//            <Container className="creategame">
//                <Row>
//                    <Col>
//                    <CreateGame token={this.props.token} />
//                    </Col>
//                 </Row>
//             </Container>
//             <Container className="findgame">
//                 <Row> 
//                     <Col>
//                     {games}
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
       
//         )
//     }
// }

// export default FindGames;