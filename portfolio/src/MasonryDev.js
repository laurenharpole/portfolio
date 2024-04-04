import './styles/masonry.css';
import nasdaq from './dev_files/nasdaq.JPG';
import garden from './dev_files/garden.jpg';
import cheme from './dev_files/cheme.jpg';
import covid from './dev_files/covidtop.jpg';
import tools from './other_files/tool-front-color.png';
import Card from './Card.js';

import sweeper from './dev_files/sweeper.jpg';


function MasonryDev() {

  return (
    <div className="MasonryDev">
      <div class="title-div">
        <h1 className="title"><span className="Dev-Marker"></span> Development</h1>
      </div>
      
        <div class="card_container">
          <Card subpath="garden" image={garden} title="CLI Garden Simulation Game" label="Development" desc="Built OCaml CLI Gardening-simulation game in a team of 3."/>
          <Card subpath="nasdaq" image={nasdaq} title="Software Engineering" label="Development" desc="Created Audible proof of concept iOS and web app project with team at Nasdaq"/>
          <Card subpath="covid" image={covid} title="Intl. Covid-19 Vaccine Progress" label="Development" desc="An interactive client-side data visualization made using the graphing and visualization library D3.js illustrating a breakdown in covid-19 worldwide data from May, 2021."/>
          <Card subpath="sweeper" image={sweeper} title="Subway Sweeper Game" label="Development" desc="A game in which a subway diver finds the shortest path to a ring and then"/>
          {/* <div >
            <Link class="link" to="/nasdaq">
                <img class='grid-item grid-item-1' src={nasdaq} alt='' />
                <p className="span-pos"><span className="dev">Development</span></p>
                <h4 className="header">Software Engineering </h4>
                <p className="paragraph">Created Audible proof of concept iOS and web app project with team at Nasdaq</p>
            </Link>
          </div>
          <div>
            <Link class="link" to="/covid">
                <img class='grid-item grid-item-3' src={covid} alt='' />
                <p className="span-pos"><span className="dev">Development</span></p>
                <h4 className="header">Intl. Covid-19 Vaccine Progress</h4>
                <p className="paragraph">An interactive client-side data visualization made using the graphing and visualization library D3.js illustrating a breakdown in covid-19 worldwide data from May, 2021</p>
            </Link>
          </div>
          <div >
            <Link class="link" to="/cheme">
                <img class='grid-item grid-item-3' src={cheme} alt='' />
                <p className="span-pos"><span className="dev">Development</span></p>
                <h4 className="header">ChemE Car Website</h4>
                <p className="paragraph">I updated and redesigned Cornell ChemE Car's website to better</p>
            </Link>
          </div>

          



          <div >
            <Link class="link" to="/garden">
                <img class='grid-item grid-item-4' src={garden} alt='' />
                <p className="span-pos"><span className="dev">Development</span></p>
                <h4 className="header">CLI Garden Simulation Game</h4>
                <p className="paragraph">Built OCaml CLI Gardening-simulation game in a team of 3.</p>
            </Link>
          </div>
          
          <div >
            <Link class="link" to="/sweeper">
                <img class='grid-item grid-item-5' src={sweeper} alt='' />
                <p className="span-pos"><span className="dev">Development</span></p>
                <h4 className="header">Subway Sweeper Game</h4>
                <p className="paragraph">A game in which a subway diver finds the shortest path to a ring and then</p>
            </Link>
          </div>
           */}
          
          
        </div>


      {/* <div class="grid-container">
        <Link to="/nasdaq">
          <div className="tile">
            <img class='grid-item grid-item-1' src={nasdaq} alt='' />
            <p className="span-pos"><span className="dev">Development</span></p>
            <h4 className="header">Software Engineering </h4>
            <p className="paragraph">Created Audible proof of concept iOS and web app project with team at Nasdaq</p>
          </div>
        </Link>

        <Link to="/covid">
          <div className="tile">
            <img class='grid-item grid-item-3' src={covid} alt='' />
            <h4 className="header">Worldwide Covid-19 Vaccine Progress Visualization</h4>
            <p className="span-pos"><span className="dev">Development</span></p>
            <p className="paragraph">An interactive client-side data visualization made using the graphing and visualization library D3.js illustrating a breakdown in covid-19 worldwide data from May, 2021</p>
          </div>
        </Link>
        <Link to="/cheme">
          <div className="tile">
            <img class='grid-item grid-item-3' src={cheme} alt='' />
            <h4 className="header">Web Development for ChemE Car</h4>
            <p className="span-pos"><span className="dev">Development</span></p>
            <p className="paragraph">I updated and redesigned Cornell ChemE Car's website to better</p>
          </div>
        </Link>
        <Link to="/garden">
          <div className="tile">
            <img class='grid-item grid-item-4' src={garden} alt='' />
            <h4 className="header">CLI Garden Simulation Game</h4>
            <p className="span-pos"><span className="dev">Development</span></p>
            <p className="paragraph">Built OCaml CLI Gardening-simulation game in a team of 3.</p>
          </div>
        </Link>
        <Link to="/sweeper">
          <div className="tile">
            <img class='grid-item grid-item-5' src={sweeper} alt='' />
            <p className="span-pos"><span className="dev">Development</span></p>
            <h4 className="header">Subway Sweeper Game</h4>
            <p className="paragraph">A game in which a subway diver finds the shortest path to a ring and then</p>
          </div>
        </Link>
      </div> */}
    </div>
  )
}

export default MasonryDev;