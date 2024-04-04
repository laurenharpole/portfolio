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
        <p className="body-text"> An interactive client-side data visualization made using  the graphing and visualization library D3.js illustrating a breakdown in covid-19 worldwide data from May, 2021. The data comes from Johns Hopkins and the bubble radii are sized based on country population. Below is a link to a github site displaying the chart on my personal page.</p>
        <p className="body-text"><a href="https://laurenharpole.github.io/May-Vaccine-Progress-Vis/"><LaunchButton/></a></p>

      </div>
      <Footer />
    </div>

  )

}

export default CovidVis;