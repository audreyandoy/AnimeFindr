const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./components/Home');
const Profile = require('./components/Profile');
const Survey = require('./components/Survey');
const ListAll = require('./components/ListAll');
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
          <Route path="/ListAll" component={ListAll} />
          <Route path="/ShowAnime" component={ShowAnime} />
       </Router>



       
    );
  }
  

});

ReactDOM.render(<App />, document.getElementById('container'));