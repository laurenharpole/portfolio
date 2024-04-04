import './styles/infopage.css';
import mindspire from './design_files/mindspire/data0.jpg';
import english from './design_files/mindspire/english.jpg';
import math from './design_files/mindspire/math.jpg';
import reading from './design_files/mindspire/reading.jpg';
import science from './design_files/mindspire/science.jpg';
import Footer from './Footer.js';

function MindSpire() {

  return (
    <div className="Info">
      <div class="work-title-div">
        <p className="span-pos2"><span className="design2">Design</span></p>
        <h2 className="work-title">Data Visualization <br></br>Internship</h2>
        <p className="subtitle"> INTERNSHIP · 2019</p>
      </div>
      <div className="header-container">
        <img className="header-img" src={mindspire}></img>
      </div>
      <div class="work-title-div">
        <p className="body-text"> During the summer of 2019, I had the opportunity to work with MindSpire Test Prep in Durham, NC to re-imagine and implement interactive ACT and SAT testing result dashboards. Throughout my internship, I worked closely with my manager, and tutors to create prototypes based on customer needs and company identity.</p>
        <p className="body-text">
          I'd be happy to chat more deeply about my experience over email.</p>
      </div>

      <div class="work-title-div">
        <figure>
          <img className="work-col-img" src={reading}></img>
          <figcaption>READING DASHBOARD</figcaption>
        </figure>
        <figure>
          <img className="work-col-img" src={english}></img>
          <figcaption>ENGLISH DASHBOARD</figcaption>
        </figure>
        <figure>
          <img className="work-col-img" src={math}></img>
          <figcaption>MATH DASHBOARD</figcaption>
        </figure>
        <figure>
          <img className="work-col-img" src={science}></img>
          <figcaption>SCIENCE DASHBOARD</figcaption>
        </figure>
      </div>
      <Footer />
    </div>

  )

}

export default MindSpire;