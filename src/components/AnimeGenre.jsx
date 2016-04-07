const React = require('react');
const NavBar = require("./NavBar");
const Portal = require("react-portal");
const Link = require('react-router').Link;


const AnimeGenre = React.createClass({
  render: function() {

      const button1 = <button className="btn btn-default">Comedy</button>;
      const button2 = <button className="btn btn-default">Dark/Drama</button>
      const button3 = <button className="btn btn-default">Japanese-Historical</button>
      const button4 = <button className="btn btn-default">Fantasy/Action-Adventure</button>



    return (
      <div> 
        <NavBar />
          <div className="well">
        
            <h1>What genre are you interested in? </h1>
                 <Portal closeOnEsc closeOnOutsideClick openByClickOn={button1}>
                    <FirstAnimeModal>
                        <h2>You should try these!</h2>
                          <p><a href="/ShowAnime/10885">Angel Beats!</a></p>
                          <p><a href="/ShowAnime/10050">ToraDora!</a></p>
                          <p><a href="/ShowAnime/14846">The Devil is a Part-Timer!</a></p>

                    </FirstAnimeModal>
                 </Portal>
                  <Portal closeOnEsc closeOnOutsideClick openByClickOn={button2}>
                    <FirstAnimeModal>
                        <h2>You should try these!</h2>
                          <p><a href="/ShowAnime/14195">Psycho-Pass</a></p>
                          <p><a href="/ShowAnime/7382">Darker than Black</a></p>
                          <p><a href="/ShowAnime/11770">Steins;Gate</a></p>
                    </FirstAnimeModal>
                 </Portal>
                  <Portal closeOnEsc closeOnOutsideClick openByClickOn={button3}>
                    <FirstAnimeModal>
                        <h2>You should try these!</h2>
                          <p><a href="/ShowAnime/2636">Samurai Champloo</a></p>
                          <p><a href="/ShowAnime/6698">Tengen Toppa Gurren Lagann</a></p>
                          <p><a href="/ShowAnime/5923">Mushi-Shi</a></p>
                    </FirstAnimeModal>
                 </Portal>
                 <Portal closeOnEsc closeOnOutsideClick openByClickOn={button4}>
                    <FirstAnimeModal>
                        <h2>You should try these!</h2>
                          <p><a href="/ShowAnime/10216">Attack on Titan</a></p>
                          <p><a href="/ShowAnime/13">Magi: The Labyrinth of Magic</a></p>
                          <p><a href="/ShowAnime/6592">Shingeki no Bahamut: Genesis</a></p>
                    </FirstAnimeModal>
                 </Portal>
                 
          </div>
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


module.exports = AnimeGenre;
