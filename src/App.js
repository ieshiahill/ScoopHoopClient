
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Main from "./layout/Main";
import Sitebar from "./layout/Navbar";
import Footer from "./layout/Footer";
// import Sidebar from "./layout/Sidebar"
import { 
  BrowserRouter as Router,
} from "react-router-dom";



  class App extends Component {
    render() {
      return (
        <div>
          <Sitebar clickLogout={this.logout} />
          <Router>
          <Main />
          </Router>
          <Footer />
          {/* <Sidebar /> */}
        </div>
      );
    }
  }
  
  export default App;
  

// import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.css";
// import './App.css';
// import Navbar from './layout/Navbar';
// import Footer from "./layout/Footer";
// import Main from "./layout/Main" ////doesn't work and gives me the error message Uncaught Error: A <Router> may have only one child element
// import Sidebar from "./layout/Sidebar";
// import { 
//   BrowserRouter as Router,
// } from "react-router-dom";
// // import Sidebar from "./layout/Sidebar";
// // import { 
// // } from "react-router-dom";

// class App extends Component {
//   render() {
//     return (
//       <div className="app">
//         <Navbar />
//         <Router>
//           <Main />
//         </Router>
//         <Router>
//           <Sidebar />
//         </Router>
//         <Footer />
//       </div>
//        );
//       }
//     }
    
// export default App;
