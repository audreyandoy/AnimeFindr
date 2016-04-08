const React = require('react');
const NavBar = require("./NavBar");


const Login = React.createClass({

  //define function here
 
  render: function() {
    return (
      <div>
       <NavBar />

         <div class="jumbotron text-center">
            <h1><span class="fa fa-lock"></span> Node Authentication</h1>

            <h3><p>Login or Register with:</p></h3>

            <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>

        </div>
       
        

      </div>
    );
  }
});

module.exports = Login;