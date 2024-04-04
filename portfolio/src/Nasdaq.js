import './styles/infopage.css';
import nasdaq from './dev_files/nasdaq.JPG';
import Footer from './Footer.js';

function Nasdaq() {

  return (
    <div className="Info">
      <div class="work-title-div">
        <p className="span-pos2"><span className="dev2">Development</span></p>
        <h2 className="work-title">
          Software Engineering <br></br>Internship
        </h2>
        <p className="subtitle"> INTERNSHIP · 2021</p>
      </div>
      <div className="header-container">
        <img className="header-img" src={nasdaq}></img>
      </div>
      <div class="work-title-div">
        <p className="body-text"> I worked as a Full Stack Engineering Intern at Nasdaq from June to Auguest 2021. During that summer I built PDF proof of concepts for iOS & web apps with Text-To-Speech & editing capabilities.
          I also constructed the UI Design System for both web app and iOS,
          worked with a team member to create a  REST API, and Database connectivity in addition to implementing the web app with React.js, Node.js, PostgreSQL, and Gitlab.
          At the end of the summer, I presented our project to Nasdaq Executives for evaluation.
        </p>
        <p className="body-text">
          I'd be happy to chat more deeply about my experience over email.
        </p>
      </div>
      <Footer />
    </div>

  )

}

export default Nasdaq;