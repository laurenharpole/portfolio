import './styles/infopage.css';
import cheme from './dev_files/cheme.jpg';
import Footer from './Footer.js';
import LaunchButton from './LaunchButton.js';
function ChemE() {

  return (
    <div className="Info">
      <div class="work-title-div">
        <p className="span-pos2"><span className="dev2">Development</span></p>
        <h2 className="work-title">ChemE Car Website</h2>
        <p className="subtitle"> Web Development for Project Team · 2020</p>
      </div>
      <div className="header-container">
        <img className="header-img" src={cheme}></img>
      </div>
      <div class="work-title-div">
        <p className="body-text"> I redesigned and implemented Cornell ChemE Car's new website to better fit its purposes of attracting both new recruits and new sponsors. Cornell ChemE Car is an engineering project team that designs, and constructs several model cars powered soley via chemical reactions.</p>
        <p className="body-text"><a href="https://chemecar.engineering.cornell.edu"><LaunchButton /></a></p>
      </div>
      <Footer />
    </div>
  )

}

export default ChemE;