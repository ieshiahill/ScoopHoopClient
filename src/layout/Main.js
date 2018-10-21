// import React, { Component } from "react";
// import Authorize from "../auth/Authorize";
// // import Sidebar from "../layout/Sidebar";
// // import Splash from "../home/Splash";
// import FindGames from "../games/FindGames";
// import { 
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// class Main extends Component {

//     constructor() {
//       super();
//       this.state = {
//         sessionToken: ""
//       }
//     }

//     componentDidMount() {
//       const token = localStorage.getItem("token");
//       if (token && !this.state.sessionToken) {
//         this.setState({ sessionToken: token });
//       }
//     }

//     setSessionState = (token) => {
//       localStorage.setItem("token", token);
//       this.setState({ sessionToken: token });
//     }

//     logout = () => {
//       this.setState({ sessionToken: " " });
//       localStorage.clear();
//     }

//     protectedViews = () => {
//       if (this.state.sessionToken === localStorage.getItem("token")) {
//         return (
//           <Switch>
//             <Route path="/findgames">
//             <FindGames sessionToken={this.state.sessionToken} />
//             </Route>
//           </Switch>
//         )
//       } else {
//         return (
//           <Route path="/auth">
//           <Authorize setToken={this.setSessionState} />
//           </Route>
//         )
//       }
//     }

//   render() {
//     return (
//       <Router>
//       <div>
//         {this.protectedViews()}
//       </div>
//       </Router>
//     );
//   }
// }
// export default Main;
