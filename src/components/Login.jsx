const React = require('react');
const NavBar = require("./NavBar");


const Login = React.createClass({

  //define function here
 
  render: function() {
    return (
      <div>
       <NavBar />


       
          <form className="well">
            <legend>Login</legend>

          <div className="form-group">
              <h3>Email</h3>
            <input typeName="email" className="form-control" id="email" placeholder="test@test.com" />
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

module.exports = Login;