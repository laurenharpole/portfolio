import './styles/about2.css';
import Footer from './Footer.js';
import blob from "./other_files/blob2.JPG";

  function About() {
    return (
        <div className="About">
            <div class="row-about">
                <div class='column-about'>
                    <div class='one-column-about'>
                        <img src={blob} alt="data"  class="in-modal"/>
                    </div>
                </div>
                <div class='column-about'>
                    <div class='two-column-about'>
                        <h1 class="about-title">A <span id="grad">Software Engineer</span> keenly focused on fostering positive human experiences with technology.</h1>

                    <p class="about-text">Hi! I’m a Software Engineer based in <span id="bold">New York</span>. I received my Bachelor of Arts from <span id="bold">Cornell University</span>, where I studied <span id="bold">Computer Science</span> and <span id="bold">User Interface and User Experience Design</span>.
                        <br></br><br></br>I’ve always been fascinated with how things work and why. The opportunity to address problem spaces with creative solutions lead me to software, while compositional harmony drew me to design. I’m happiest at the intersection of both!
                    </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
  }

  export default About;