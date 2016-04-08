const React = require('react');
const NavBar = require("./NavBar");
const Link = require('react-router').Link;


const ShowAnime = React.createClass({
  getInitialState: function() {
    return {anime: null}
  },
  componentDidMount: function() {
      fetch(`/api/anime/${this.props.params.animeID}`)
      .then(response => {
        response.json().then(data => {
              var plotArray = data.ann.anime.info;
              for(item of plotArray){
                if(item.type === "Plot Summary"){
                  this.setState({plot: item.$t});
                }
              };

              var picArray = data.ann.anime.info;
              for(item of picArray){
                if(item.type === "Picture"){
                  this.setState({pic: item.src});
                }
              };

              var epArray = data.ann.anime.info;
              for(item of epArray){
                if(item.type === "Number of episodes"){
                  this.setState({ep: item.$t});
                  console.log(item);
                }
              };

              var japTitle = data.ann.anime.info;
              for(item of japTitle){
                if(item.type === "Alternative title" &&
                   item.lang === "JA") {
                  this.setState({jtitle: item.$t});
                  console.log(item);
                }
              };

              this.setState({anime: data.ann.anime.name});
              console.log(data.ann.anime.info[0].img.src);
              console.log(data)
           });
      })
  },
  addFav: function() {
      this.setState({
        favorites: {}
      });
      var self = this;
      $.post(`/api/users/addFav`).done(function(favorites){
        self.setState({
          favorites: favorites 
        });
      })
  },
  render: function() {
    return (
      <div>
       <NavBar />
       <div className="well">
         <img src={this.state.pic} />

         <div className="info">
         <h1>{this.state.anime} {this.state.jtitle}</h1>
         <h4>Plot summary:</h4>
         <p>{this.state.plot}</p>
         <h4>Number of episodes: {this.state.ep} </h4>

       <p> <Link to='/Profile' onClick={this.addFav} className="btn btn-default">Add to Watch List</Link></p>
       </div>
       </div>
      </div>
    );
  }
});

module.exports = ShowAnime;