import './styles/infopage.css';
import cordillera from './dev_files/poc.png';
import Footer from './Footer.js';
import LaunchButton from './LaunchButton.js';

function Poc() {

  return (
    <div className="Info">
      <div class="work-title-div">
      <p className="span-pos2"><span className="dev2">Development</span></p>
        <h2 className="work-title">PDF Speech to Text <br></br>
Proof of Concept</h2>
        <p className="subtitle"> PROOF OF CONCEPT · 2021</p>
      </div>
      <div className="header-container">
        <img className="header-img" src={cordillera}></img>
      </div>
      <div class="work-title-div">
        <p className="body-text">Harnessing React.js, Express.js, Node.js, PostgreSQL, and Gitlab, a teamate and I built a PDF proof of concept iOS & web app with Text-To-Speech & highlighting capabilities for a prominent financial LLC. I also created the UI Design System and views for both the web and iOS apps, working equally with a team member to translate figma into code, create a REST API, and establish Database connectivity.</p>
        <p className="body-text">I'd be happy to share more deeply about my experience over email or on the phone. Visuals are the personal re-imaginations of my final work and are not representative of any true public or unrealized product.
</p>
      </div>
      <Footer />
    </div>
  )

}

export default Poc;