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

                    //do a fetch to retrieve user info from db.

                        <strong>id</strong>:  user.facebook.id <br />
                        <strong>token</strong>: user.facebook.token <br />
                        <strong>email</strong>: user.facebook.email <br />
                        <strong>name</strong>: user.facebook.name 
                    </p>

            </div>
        </div>
           
          </div>

          <div className="well">

          <h1>Your Watch List:</h1>
          </div>
      </div>
    );
  }
});


module.exports = Profile;
