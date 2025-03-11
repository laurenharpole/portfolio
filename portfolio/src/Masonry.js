import './styles/masonry.css';
import poc from './dev_files/poc.png';
import fridgeshot from './design_files/fridgeshot.jpg';
import garden from './dev_files/garden.jpg';
import wave from './other_files/Wave.png';
import Card from './Card.js';
import covid from './dev_files/covidtop.jpg';


function Masonry() {

  return (
    <div className="Masonry">
    <div class="title-div-design"> 
      <div class="title-div">
        <div class="hello-statement">
          <img src={wave}></img>
          <h1> Hi! I'm Lauren</h1>
        </div>
        <h1 className="egg"> A Software Engineer based in New York, who's driven by a love for functional and beautiful design.</h1>
        <p className="egg">Studied Computer Science, User Interface & User Experience Design at Cornell University.</p>
      </div>
      <svg class="blob" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f6f6f8" fill-opacity="1" d="M0,96L60,128C120,160,240,224,360,213.3C480,203,600,117,720,106.7C840,96,960,160,1080,165.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
      </div>
      <div class="title-div">
        <h1 className="title">📌 Featured </h1>
      </div>
        <div class="card_container">
          <Card subpath="garden" image={garden} title="CLI Garden Simulation Game" label="Development" desc="Built OCaml CLI Gardening-simulation game in a team of 3."/>
          <Card subpath="poc" image={poc} title="PDF editor and reader app" label="Development" desc="A secure platform to store, read, highlight and listen to PDF documents."/>
          <Card subpath="covid" image={covid} title="Intl. Covid-19 Vaccine Progress" label="Development" desc="An interactive data visualization illustating world-wide covid-19 vaccination progress."/>
          <Card subpath="fridgeshot" image={fridgeshot} title="Fridgeshot App Case Study" label="Design" desc="Food recognizing and recipe generating app for new adults."/>
        </div>
    </div>
  )
}

export default Masonry;