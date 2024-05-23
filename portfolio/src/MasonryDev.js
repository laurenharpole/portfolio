import './styles/masonry.css';
import poc from './dev_files/poc.png';
import garden from './dev_files/garden.jpg';
import covid from './dev_files/covidtop.jpg';
import Card from './Card.js';
import sweeper from './dev_files/sweeper.jpg';


function MasonryDev() {
  return (
    <div className="MasonryDev">
      <div class="title-div-work">
        <h1 className="title"><span className="Dev-Marker"></span> Development</h1>
      </div>
        <div class="card_container">
          <Card subpath="garden" image={garden} title="CLI Garden Simulation Game" label="Development" desc="Built OCaml CLI Gardening-simulation game in a team of 3."/>
          <Card subpath="poc" image={poc} title="PDF Speech to Text Proof of Concept" label="Development" desc="Created Audible proof of concept iOS and web app."/>          <Card subpath="covid" image={covid} title="Intl. Covid-19 Vaccine Progress" label="Development" desc="An interactive client-side data visualization made using the graphing and visualization library D3.js illustrating a breakdown in covid-19 worldwide data from May, 2021."/>
          <Card subpath="sweeper" image={sweeper} title="Subway Sweeper Game" label="Development" desc="A game in which a subway diver finds the shortest path to a ring and then"/>   
        </div>
    </div>
  )
}

export default MasonryDev;