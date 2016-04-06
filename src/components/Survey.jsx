const React = require('react');
const NavBar = require("./NavBar");


const Survey = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />

       <h1> Is this your first anime? </h1>
      </div>
    );
  }
});

module.exports = Survey;