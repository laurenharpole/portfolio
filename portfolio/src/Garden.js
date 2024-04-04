import './styles/infopage.css';
import garden from './dev_files/garden.jpg';
import Footer from './Footer.js';
import CodeButton from './CodeButton.js';

function Garden() {

  return (
    <div className="Info">
      <div class="work-title-div">
        <p className="span-pos2"><span className="dev2">Development</span></p>
        <h2 className="work-title">Gardening Game</h2>
        <p className="subtitle"> CLI GARDEN SIMULATION GAME · 2020</p>
      </div>
      <div className="header-container">
        <img className="header-img" src={garden}></img>
      </div>
      <div class="work-title-div">
        <p className="body-text">  In the spring of 2020, I built an OCaml CLI Gardening-simulation game in a team of 3.
          We implemented OCaml graphics to render visuals, and managed simulated time through state stepping functionality to
          move through plant lifetimes, harvesting, and sowing. </p>
          <p className="body-text"><a href="https://laurenharpole.github.io/cordillera/"><CodeButton/></a></p>
      </div>
      <Footer />
    </div>
  )

}

export default Garden;