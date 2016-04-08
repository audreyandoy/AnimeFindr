const React = require('react');
const NavBar = require("./NavBar");
const Link = require('react-router').Link;


const About = React.createClass({
  render: function() {
    return (
      <div> 
        <NavBar />
          <div className="well middle">
        
            <h1>About AnimeFindr</h1>

            <p>
              <h3>An easy app to find the next anime to binge on. Click through the two-step survey for some awesome suggestions based on redditor <a href="http://imgur.com/q9Xjv4p">LookatLuke </a>
                "The ultimate anime recommendation flowchart". The animes suggested are all under 100 episodes and feature popular titles with awesome plots. 
              Unfortunately, there are no titles with an emphasis on fan service/ecchi scenes. But stay tuned for that in the extended version. Enjoy !
              </h3>
            </p>
          </div>
      </div>
    );
  }
});


module.exports = About;
