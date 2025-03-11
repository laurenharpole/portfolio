import './styles/infopage.css';
import iPadTop from './dev_files/poc.png';
import Footer from './Footer.js';
import LaunchButton from './LaunchButton.js';
import iPadLogin from './dev_files/poc-ipad-login.png';
import iPadHome from './dev_files/poc-ipad-home.png';

function Poc() {

  return (
    <div className="Info">
      <div class="work-title-div">
      <p className="span-pos2"><span className="dev2">Development</span></p>
        <h2 className="work-title">PDF editor and reader <br></br>
Proof of Concept</h2>
        <p className="subtitle"> PROOF OF CONCEPT · 2021</p>
      </div>
      <div className="header-container">
        <img className="header-img" src={iPadTop}></img>
      </div>
      <div class="work-title-div">
        <h2 className="body-text-title">Project overview</h2>
        <p className="body-text">Using React.js, Express.js, Node.js, PostgreSQL, and GitLab, my teammate and I built a proof-of-concept iOS and web app for busy executives at a prominent financial LLC with many internal documents to read. This app provided a secure, internal platform to store, read, highlight and listen to PDF documents in a natural voice. </p>
        <p className="body-text">Reading documents can be time-consuming and our users were limited in storage options due to document sensitivity. To add, no existing options allowed users to highlight or listen to documents. As a result, users had to find alternative ways to highlight key sections, and manually parse through entire documents, when listening would reduce eye strain, increase comprehension and allow for multi-tasking. </p>
        <h2 className="body-text-title-segment">Solution</h2>
        <p className="body-text">Our solution aimed to address all of these paint points. With it, users could log into the secure platform on iOS or web. Once there, they could view their previously uploaded PDFs, upload new ones, and easily access each by clicking or tapping on the filename under “Recent Files”. Users could highlight specific lines within a given document and have either selected lines or the entire document read aloud to them in a natural voice sounding voice for increased comprehension. </p>
        <h2 className="body-text-title-segment">Views</h2>
        <p className="body-text">All visuals are personal re-imaginations of my final work and are not representative of any public, or unrealized product.</p>
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-img" src={iPadLogin}></img>
                <figcaption>login view on an ipad</figcaption>
              </figure>
              <figure>
                <img className="work-col-img" src={iPadHome}></img>
                <figcaption>home view on an ipad</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <p className="body-text">For this project, I created the UI design system, designed the iOS and web application views, implemented the web app front end and in collaboration with my teammate, created a REST API, and established database connectivity. I'd be happy to share more deeply about my experience over email or on the phone.</p>
      </div>
      <Footer />
    </div>
  )

}

export default Poc;