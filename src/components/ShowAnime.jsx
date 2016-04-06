const React = require('react');
const NavBar = require("./NavBar");

const ShowAnime = React.createClass({
  getInitialState: function() {
    return {anime: null}
  },
  componentDidMount: function() {
      fetch(`/api/anime/${this.props.params.animeID}`)
      .then(response => {
        response.json().then(data => {
              this.setState({anime: data.ann.anime.name});
              this.setState({jtitle: data.ann.anime.info[3].$t});
              this.setState({type: data.ann.anime.type});
              this.setState({plot: data.ann.anime.info[11].$t});
              this.setState({noe: data.ann.anime.info[12].$t});
              this.setState({pic: data.ann.anime.info[0].img.src})
              console.log(data.ann.anime.info[0].img.src);
              console.log(data)
           });
      })
  },
  render: function() {
    return (
      <div>
       <NavBar />
       <div className="well">
         <img src={this.state.pic} />
         <h1>{this.state.anime} {this.state.jtitle}</h1>
         <p><b>Plot summary: </b>{this.state.plot}</p>
         <p><b>Number of episodes: </b>{this.state.noe}</p>

       </div>
      </div>
    );
  }
});

module.exports = ShowAnime;