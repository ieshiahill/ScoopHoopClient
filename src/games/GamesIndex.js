import React from "react";
import { Container, Row, Col } from "reactstrap";
// import MyGames from "../games/MyGames";
import CreateGame from "../games/CreateGame";
import GamesEdit from "../games/GamesEdit";
import GamesTable from "../games/GamesTable";

class GamesIndex extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            games: [],
            updatePressed: false,
            gamesToUpdate: {}
        }
    }

    componentWillMount() {
        this.fetchGames({
            id: this.props.games.id,
            

        })
    }

   gamesUpdate = (event, games) => {
        fetch("http://localhost:3000/games/find/${games.id}", {
            method: "PUT",
            body: JSON.stringify({ games: logData }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
    .then((res) => {
    this.setState({ updatePressed: false })
    this.fetchGames();
    })
    }

    gamesDelete = (event) => {
        fetch(`http://http://localhost:3008/games/find${event.target.id}`, {
            method: "DELETE",
            body:JSON.stringify({ log: { id: event.target.id } }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
        .then((res) => this.fetchGames())
    }

    setUpdatedWorkout = (event, games) =>
        this.setState({
            workoutToUpdate: games,
            updatePressed: true
        })
    
    
    render() {
        const games = this.state.games.length >= 1 ?
            <GamesTable games={this.state.games} delete={this.gamesDelete} update={this.setUpdatedGames} /> :
            <h2>Start a Game</h2>
        return ( 
            <Container>
                <Row>
                    <Col md="3">
                    <CreateGame token={this.props.token} UpdateGames={this.fetchgames} />
                    </Col>
                    <Col md="9">
                    {games}
                    </Col>
                    </Row>
                    <Col md="12">
                    {
                        this.state.updatePressed ? <GamesEdit t={this.state.updatePressed} update={this.GamesEdit} games={this.state.gamesToUpdate} />
                    : <div></div>
                    }
                    </Col>
                </Container>
        )
    }
}

export default GamesIndex;