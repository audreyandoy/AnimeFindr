const React = require('react');
const Link = require('react-router').Link;

const NavBar = React.createClass({
  render: function() {
    return (
     <div>

      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">

          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li><a className="navbar-brand" href="/">AnimeFindr</a></li>
              <li><a href="/Profile">Profile</a></li>
              <li><a href="/Survey">Survey</a></li>
              <li><a href="/Login">Login</a></li>
            </ul>
          
          
         
          </div>
        </div>
      </nav>
    </div>
    );
  }
});

module.exports = NavBar;