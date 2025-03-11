import './styles/infopage.css';
import Footer from './Footer.js';
import LaunchButton from './LaunchButton.js';


function CovidVis() {

  return (
    <div className="Info">
      <div class="work-title-div">
        <p className="span-pos2"><span className="dev2">Development</span></p>
        <h2 className="work-title">Worldwide Covid-19 Vaccine Progress Visualization</h2>
        <p className="subtitle"> Interactive Data Visualization · 2021</p>
      </div>
      <div class="work-title-div">
        <figure>
          <iframe className="embed" src="https://laurenharpole.github.io/May-Vaccine-Progress-Vis/" sandox="" />
        </figure>
        <p className="body-text"> An interactive, client-side data visualization illustating world-wide Covid-19 vaccination progress. Data comes from <em>Our World In Data</em> and radii size was determined by number of fully vaccinated individuals. Designed and developed by me, leveraging the D3.js graphing library. Click the link below to view the visualization where it's hosted on my github.</p>
        <p className="body-text"><a href="https://laurenharpole.github.io/May-Vaccine-Progress-Vis/"><LaunchButton/></a></p>
      </div>
      <Footer />
    </div>

  )

}

export default CovidVis;