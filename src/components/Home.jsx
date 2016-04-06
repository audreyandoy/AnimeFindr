const React = require('react');
const NavBar = require("./NavBar");
const Link = require('react-router').Link;


const Home = React.createClass({
  render: function() {
    return (
      <div> 
        <NavBar />
          <div className="well">
        
            <h1>Welcome to AnimeFindr</h1>

            <p>
              Click the button to find your next anime
                <p>
                  <Link to='/survey' className="btn btn-default">Survey</Link>

                </p>
            </p>
          </div>
      </div>
    );
  }
});


module.exports = Home;
