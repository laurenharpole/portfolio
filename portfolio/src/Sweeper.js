import './styles/infopage.css';
import Footer from './Footer.js';
import sweeper from './dev_files/sweeper2.mov';

function Sweeper() {

  return (
    <div className="Info">
      <div class="work-title-div">
        <p className="span-pos2"><span className="dev2">Development</span></p>
        <h2 className="work-title">
          Subway Sweeper Game
        </h2>
        <p className="subtitle"> Game Development · 2019</p>
      </div>
      <div className="header-container">
        <video className="header-mov" controls>
          <source src={sweeper} type="video/mp4"></source>
        </video>
      </div>
      <div class="work-title-div">
        <p className="body-text"> A game in which a subway diver finds the shortest path to a ring and then tries to get as many coins as possible before running out of steps. I created this game in the spring of 2019 as a project for a computer science class.</p>
      </div>
      <Footer />
    </div>
  )

}

export default Sweeper;