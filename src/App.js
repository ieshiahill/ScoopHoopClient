
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Sitebar from "./layout/Navbar";
import Authorize from "./auth/Authorize";
import Splash from "./home/Splash";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '',
      sessionUser: ""
    }
  }

  logout = () => {
    this.setState({
      sessionToken: "",
    });
    localStorage.clear();
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
    const user = localStorage.getItem('user');
    if (user && !this.state.sessionUser) {
      this.setState({ sessionUser: user});
    }
  }

  setSessionState = (token, id) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', id);
    this.setState({ sessionToken: token});
    this.setState({ sessionUser: id});

  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return(
        <Switch>
          <Route path='/games' exact>
          <Splash sessionToken={this.state.sessionToken} sessionUser={this.state.sessionUser}/>
          </Route>
        </Switch>
      )
    }else{
      return(
        <Route path="/auth" >
          <Authorize setToken={this.setSessionState}/>
        </Route>
      )
    }
  }

  render() {
    return (
      <Router>
      <div id="main">
        <Sitebar clickLogout={this.logout} />
        {this.protectedViews()}
      </div>
      </Router>
    );
  }
}

export default App;


//   class App extends Component {

//     constructor() {
//       super();
//       this.state = {
//         sessionToken: "",
//         sessionUser: ""
//       }
//     }

//     logout = () => {
//       this.setState({ sessionToken: " " });
//       localStorage.clear();
//     }

//     componentWillMount() {
//       const token = localStorage.getItem("token");
//       if (token && !this.state.sessionToken) {
//         this.setState({ sessionToken: token });
//       }
//       const user = localStorage.getItem('user');
//       if (user && !this.state.sessionUser) {
//         this.setState({ sessionUser: user});
//     }

//     setSessionState = (token, id) => {
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', id);
//       this.setState({ sessionToken: token});
//       this.setState({ sessionUser: id});
//     }

//     protectedViews = () => {
//       if (this.state.sessionToken === localStorage.getItem("token")) {
//         return (
//           <Switch>
//             <Route path="/" exact>
//             <Splash sessionToken={this.state.sessionToken} sessionUser={this.state.sessionUser}/>
//             </Route>
//           </Switch>
//         )
//       } else {
//         return (
//           <Route path="/auth" >
//           <Authorize setToken={this.setSessionState} />
//           </Route>
//         )
//       }
//     }

//     render() 
//       return (
//         <Router>
//         <div id="main">
//           <Sitebar clickLogout={this.logout} />
//           {this.protectedViews()}
//         </div>
//         </Router>
//       );
//     }
//   }
  
// export default App;
