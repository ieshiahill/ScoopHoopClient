import React from "react";
import {
    Route,
    Link,
    Switch
  } from "react-router-dom";
  import FindGames from '../games/FindGames';
  import CreateGame from '../games/CreateGame';
  import Authorize from "../auth/Authorize";
  // import Splash from "../home/Splash";



  const Sidebar = () => (

      <div className="sidebar">
      <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
            {/* <button><li><Link to="/">Home</Link></li></button> */}
            <br />
            <button><li><Link to="/FindGames">Find Games</Link></li></button>
            <br />
            <button><li><Link to="/StartGame">Start Game</Link></li></button>
            <br />
            <button><li><Link to="/Auth">Logout</Link></li></button>
          </ul>
        </div>
   

        <div className="sidebar-route">
        <Switch>
            {/* <Route exact path="/"><FindGames /></Route> */}
            <Route exact path="/FindGames"><FindGames /></Route>
            <Route exact path="/StartGame"><CreateGame /></Route>
            <Route exact path="/auth"><Authorize /></Route>
        </Switch>
        </div>
        </div>
)
export default Sidebar;
