const React = require('react');
const NavBar = require("./NavBar");


const SignUp = React.createClass({
 
  render: function() {
    return (
      <div>
       <NavBar />

       
          <form>
            <legend>Sign Up</legend>

          <div className="form-group">
            <h3>Name</h3>
            <input type="name" className="form-control" id="name" placeholder="Fetty Wap" />
          </div>  
            <h3>Email</h3>
          <div className="form-group">
            <input type="email" className="form-control" id="email" placeholder="test@test.com" />
          </div>
          <div className="form-group">
            <h3>Password</h3>
            <input type="password" className="form-control" id="password" placeholder="********" />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>

      </div>
    );
  }
});

module.exports = SignUp;