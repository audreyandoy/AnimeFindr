const React = require('react');
const NavBar = require("./NavBar");

const Profile = React.createClass({
  render: function() {
    return (
      <div> 
        <NavBar />

          <div className="well">
        
            <h1>User Profile</h1>
              <div class="col-sm-6">
            <div class="well">
                <h3 class="text-primary"><span class="fa fa-facebook"></span> Facebook</h3>

                    <p>

                    "Coming Soon"
                    </p>

            </div>
        </div>
           
          </div>

          <div className="well">

          <h1>Your Watch List:</h1>
            "Coming Soon"
          </div>
      </div>
    );
  }
});


module.exports = Profile;
