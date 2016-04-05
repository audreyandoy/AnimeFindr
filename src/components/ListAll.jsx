const React = require('react');
const NavBar = require("./NavBar");

const ListAll = React.createClass({
  getInitialState: function() {
    return {info: []} 
  },
  getInfo: function() {
    this.setState({info:[]}
    );
  let self = this;
  $.get("/api/anime/"){
    self.setState({
      info: info
    });
  },
  render: function() {
    return (
      <div>
       <NavBar />

       <h1> Test Titles here </h1>
        <button type="button" class="btn btn-default" onClick={this.getInfo}>button</button>
        {this.state.info}

      </div>
    );
  }
});

module.exports = ListAll;