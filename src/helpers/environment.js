let APIURL = " ";

switch (window.location.hostman) {
    //this is the local name of your react app
    case "localhost" || "127.0.0.1":
    //this is the local host name of your API
    APIURL = "http://localhost:3000";
    break;
    //this is the deployed react application
    case "scoophoopclient.herokuapp.com":
    //this is the full url of your deployed API
    APIURL = "https://scoophoopserver.herokuapp.com"
}

export default APIURL;