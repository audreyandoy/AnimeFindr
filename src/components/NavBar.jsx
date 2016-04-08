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
              <button className="btn btn-default"><a href="/Profile">Profile</a></button>
              <button className="btn btn-default"><a href="/Survey">Survey</a></button>
              <button className="btn btn-default"><a href="/Login">Login</a></button>
              <button className="btn btn-default"><a href="/Logout">Logout</a></button>

            </ul>
          
          
         
          </div>
        </div>
      </nav>
    </div>
    );
  }
});

module.exports = NavBar;