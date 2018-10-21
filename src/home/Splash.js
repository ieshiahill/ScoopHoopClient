import React from "react";
// import FindGames from "../games/FindGames";
import GamesIndex from "../games/GamesIndex";



const Splash = (props) => {
    return (
        <div>
        <GamesIndex token={props.sessionToken} /> 
        </div>
    )
}

export default Splash;

    