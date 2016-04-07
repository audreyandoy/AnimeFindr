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

    <h1>Is this your first Anime?</h1>
      <Portal closeOnEsc closeOnOutsideClick openByClickOn={button}>
        <FirstAnimeModal>
          <h2>You should try these!</h2>
              <p><a href="/ShowAnime/10216">Fullmetal Alchemist: Brotherhood</a></p>
              <p><a href="/ShowAnime/13">Cowboy Bebop</a></p>
              <p><a href="/ShowAnime/6592">Death Note</a></p>
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
      <div className="well">
        {this.props.children}
        <p><button onClick={this.props.closePortal} className="btn btn-default">Close me</button></p>
      </div>
    );
  }

});

module.exports = Survey;