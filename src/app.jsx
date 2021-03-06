const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./components/Home');
const Profile = require('./components/Profile');
const Survey = require('./components/Survey');
const Login = require('./components/Login');
const SignUp = require('./components/SignUp');
const LogOut = require('./components/LogOut');
const AnimeGenre = require('./components/AnimeGenre');
const About = require('./components/About');
const ShowAnime = require('./components/ShowAnime');


const Router = require('react-router').Router;
const Route = require('react-router').Router;
const browserHistory = require('react-router').browserHistory;

var App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/Survey" component={Survey} />
          <Route path="/AnimeGenre" component={AnimeGenre} />
          <Route path="/ShowAnime/:animeID" component={ShowAnime} />
          <Route path="/Login" component={Login} />
          <Route path="/About" component={About} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Logout" component={LogOut} />

       </Router>
    );
  }
  

});

ReactDOM.render(<App />, document.getElementById('container'));