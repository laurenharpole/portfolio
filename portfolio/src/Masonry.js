import './styles/masonry.css';
import nasdaq from './dev_files/nasdaq.JPG';
import fridgeshot from './design_files/fridgeshot.jpg';
import garden from './dev_files/garden.jpg';
// import l from './other_files/L.svg';
import wave from './other_files/Wave.png';
import Card from './Card.js';

// import {
//   BrowserRouter as Router,
//   Link,
// } from "react-router-dom";

function Masonry() {

  return (
    <div className="Masonry">
{/* <img src={l} class="L" /> */}
    <div class="title-div-design"> 
      <div class="title-div">
        {/* <h1 className="egg">Hi! I'm <br />Lauren Harpole</h1> */}
        <div class="hello-statement">
          <img  src={wave}></img>
          <h1 > Hi! I'm Lauren</h1>
        </div>
        <h1 className="egg"> A Software Engineer and User Experience Designer based in New York. I'm driven by functionality & enjoyable human interaction.</h1>

        <p className="egg">Currently at Narmi. Studied Computer Science, User Interface & User Experience Design at Cornell University.</p>
          {/* I'm a new grad from Cornell University where I studied Computer Science and UI/UX Design. My sweet spots are both design and development.</p> */}
        {/* <p className="egg">I'm a new grad from <span className="pg">Cornell University</span> where I studied <Link to="/dev"><span className="prog">CS</span></Link> and <span class="ed">UI/UX Design</span>. My sweet spots are both design and development.</p> */}
      </div>
     
      <svg class="blob" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f6f6f8" fill-opacity="1" d="M0,96L60,128C120,160,240,224,360,213.3C480,203,600,117,720,106.7C840,96,960,160,1080,165.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
      </div>

      
      {/* <div class="wave"> </div> */}

      {/* <svg class="blob" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="rgb(26, 83, 255)" fill-opacity="1" d="M0,96L60,128C120,160,240,224,360,213.3C480,203,600,117,720,106.7C840,96,960,160,1080,165.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg> */}

      <div class="title-div">
        
        {/* <h1 className="title"><img class="emoji-title" src={pencil}></img> Featured Work </h1> */}
        <h1 className="title">📌 Featured </h1>

      </div>
        
        <div class="card_container">
          <Card subpath="garden" image={garden} title="CLI Garden Simulation Game" label="Development" desc="Built OCaml CLI Gardening-simulation game in a team of 3."/>
          <Card subpath="nasdaq" image={nasdaq} title="Software Engineering" label="Development" desc="Created Audible proof of concept iOS and web app with team at Nasdaq."/>
          <Card subpath="fridgeshot" image={fridgeshot} title="Fridgeshot App Case Study" label="Design" desc="Food recognizing and recipe generating app for new adults."/>
        </div>
   
          {/* <div class="individual_card_container">
            <Link class="link" to="/nasdaq">
              <img src={nasdaq} alt='' />
              <div class="card-content-container">
                <p className="span-pos"><span className="dev">Development</span></p>
                <h4 >Software Engineering</h4>
                <p className="paragraph">Created Audible proof of concept iOS and web app project with team at Nasdaq</p>
              </div>
            </Link>
          </div> */}
          {/* <div class="individual_card_container">
            <Link class="link" to="/datavis">
                <img src={datavis} alt='' />
                <div class="card-content-container">
                  <p className="span-pos"><span className="design">Design</span></p>
                  <h4 className="header">Data Visualization</h4>
                  <p className="paragraph">Interactive testing results and their breakdowns</p>
                </div>
            </Link>
          </div> */}
      {/* <div class="individual_card_container">
            <Link class="link" to="/fridgeshot">
              <img src={fridgeshot} alt='' />
              <div class="card-content-container">
                <p className="span-pos"><span className="design">Design</span></p>
                <h4 className="header">Fridgeshot App Case Study</h4>
                <p className="paragraph">Food recognizing and recipe generating app for new adults.</p>
              </div>
            </Link>
          </div> */}
      {/* <div class="grid-container">
        <Link to="/nasdaq">
          <div className="tile">
            <img class='grid-item grid-item-1' src={nasdaq} alt='' />
            <h1 className="header">Software Engineering Internship</h1>
            <p className="span-pos"><span className="dev">Development</span></p>
            <p className="paragraph">Created Audible proof of concept iOS and web app project with team at Nasdaq</p>
          </div>
        </Link>
        <Link to="/datavis">
          <div className="tile">
            <img class='grid-item grid-item-2' src={datavis} alt='' />
            <h1 className="header">Data Visualization Internship</h1>
            <p className="span-pos"><span className="design">Design</span></p>
            <p className="paragraph">Interactive testing results and their breakdowns</p>
          </div>
        </Link>
        <Link to="/fridgeshot">
          <div className="tile">
            <img class='grid-item grid-item-7' src={fridgeshot} alt='' />
            <h1 className="header">Fridgeshot App Case Study</h1>
            <p className="span-pos"><span className="design">Design</span></p>
            <p className="paragraph">Food recognizing and recipe generating app for new adults.</p>
          </div>
        </Link>
      </div> */}
    </div>
  )
}

export default Masonry;