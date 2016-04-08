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
          <div className="middle">
        
            <h1>What genre are you interested in? </h1>
            <br />
                 <Portal closeOnEsc closeOnOutsideClick openByClickOn={button1}>
                    <FirstAnimeModal>
                        <h2>Comedy</h2>
                          <p><h3><a href="/ShowAnime/10885">Angel Beats!</a></h3>
                          A Popular action comedy, heavy on the feels</p>
                          <p><h3><a href="/ShowAnime/10050">ToraDora!</a></h3>
                          Popular romance comedy that evolves into a drama</p>
                          <p><h3><a href="/ShowAnime/14846">The Devil is a Part-Timer!</a></h3>
                          Popular workplace comedy (no drama!)</p>

                    </FirstAnimeModal>
                 </Portal>
                  <Portal closeOnEsc closeOnOutsideClick openByClickOn={button2}>
                    <FirstAnimeModal>
                        <h2>Dark Dramas</h2>
                          <p><h3><a href="/ShowAnime/14195">Psycho-Pass</a></h3>
                          Pyschological police in a cyberpunk setting</p>
                          <p><h3><a href="/ShowAnime/7382">Darker than Black</a></h3>
                          Contains X-men style Superpowers, like a Chinese Electric Batman</p>
                          <p><h3><a href="/ShowAnime/11770">Steins;Gate</a></h3>
                          Time Travel experiment thriller</p>
                    </FirstAnimeModal>
                 </Portal>
                  <Portal closeOnEsc closeOnOutsideClick openByClickOn={button3}>
                    <FirstAnimeModal>
                        <h2>Japanese-Historical</h2>
                          <p><h3><a href="/ShowAnime/2636">Samurai Champloo</a></h3>
                          Dope-ass Samurai & hip-hop/jazz music by Nujabes (RIP)</p>
                          <p><h3><a href="/ShowAnime/6698">Tengen Toppa Gurren Lagann</a></h3>
                          HUGE.GIANT.ROBOTS.</p>
                          <p><h3><a href="/ShowAnime/5923">Mushi-Shi</a></h3>
                          Very similar to Ghibli movies, especially with the emphasis on spirits</p>
                    </FirstAnimeModal>
                 </Portal>
                 <Portal closeOnEsc closeOnOutsideClick openByClickOn={button4}>
                    <FirstAnimeModal>
                        <h2>Fantasy/Action-Adventure</h2>
                          <p><h3><a href="/ShowAnime/10216">Attack on Titan</a></h3>
                          Gritty, edgy series with epic music. Your hopes and dream may get crushed and you may cry.</p>
                          <p><h3><a href="/ShowAnime/13">Magi: The Labyrinth of Magic</a></h3>
                          Arabian Nights road trip adventure, Avatar-style</p>
                          <p><h3><a href="/ShowAnime/6592">Shingeki no Bahamut: Genesis</a></h3>
                          Pirates of the Caribbean meets Diablo</p>
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
      <div className="well show">
        {this.props.children}
        <p><button onClick={this.props.closePortal} className="btn btn-default">Close me</button></p>
      </div>
    );
  }

});


module.exports = AnimeGenre;
