const React = require('react');
const NavBar = require("./NavBar");
const Portal = require("react-portal");
const Link = require('react-router').Link;


const Survey = React.createClass({

  render: function() {

  const button = <button className="btn btn-default">Yes</button>;
    return (
      <div>
        <NavBar />

    <h1 className="middle">Is this your first Anime?</h1>
      <Portal closeOnEsc openByClickOn={button}>
        <FirstAnimeModal>
          <h1>Yes! Try these!</h1><h4>Click on the title for more info about the show</h4>
              <p><h3><a href="/ShowAnime/10216">Fullmetal Alchemist: Brotherhood</a></h3>
              An epic series like Avatar: The Last Airbender</p>
              <p><h3><a href="/ShowAnime/13">Cowboy Bebop</a></h3>
              A Space western like Firefly and Guardians of the Galaxy</p>
              <p><h3><a href="/ShowAnime/6592">Death Note</a></h3>
              A Crime drama with mindgames with the Grim Reaper</p>
        </FirstAnimeModal>
      </Portal>
               <Link to='/AnimeGenre' className="btn btn-default">No</Link>
      </div>
    );
  }
});

const FirstAnimeModal = React.createClass({
  render: function() {
    return (
      <div className="well show">
        {this.props.children}
        <p><button onClick={this.props.closePortal} className="btn btn-default">Close me</button></p>
      </div>
    );
  }

});

module.exports = Survey;