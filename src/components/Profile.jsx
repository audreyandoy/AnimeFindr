const React = require('react');
const NavBar = require("./NavBar");

const Profile = React.createClass({
  render: function() {
    return (
      <div> 
        <NavBar />

          <div className="well">
        
            <h1>User Profile</h1>

           
          </div>
      </div>
    );
  }
});


module.exports = Profile;
