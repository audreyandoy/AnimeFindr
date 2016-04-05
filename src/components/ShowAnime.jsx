const React = require('react');
const NavBar = require("./NavBar");

const ShowAnime = React.createClass({
  render: function() {
    return (
      <div>
       <NavBar />

       <h1> Single Anime </h1>
      </div>
    );
  }
});

module.exports = ShowAnime;