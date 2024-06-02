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
                        <h1 class="about-title">A <span id="grad-r">User Experience Designer</span>, and a <span id="grad">Software Engineer</span>   driven by functionality and enjoyable human interaction.</h1>

                    <p class="about-text">Hi! I’m a Software Engineer at <span id="bold">Narmi</span>. Previously, I interned at <span id="bold">Nasdaq</span> as a Full Stack Software Engineer where I designed and built a PDF reader and annotator proof of concept app. 
                        <br></br><br></br>I recently received my Bachelor of Arts from <span id="bold">Cornell University</span>, where I studied <span id="bold">Computer Science</span> and <span id="bold">User Interface and User Experience Design</span>. I was as a Teaching Assistant for INFO 4340 (App Prototyping and Development) where I taught parts of the user centered design process and how to develop high fidelity app prototypes. 
                        <br></br><br></br>I was also a team lead for the Business and Web Development sub team of <span id="bold">Cornell ChemE Car</span>, a nationally competing engineering project team that constructs efficient model cars powered and stopped by chemical reactions.  
                        <br></br><br></br>I’ve always <span id="bold">been fascinated</span> with how things work and why. The ability to investigate this, and solve and create my own problems drew me to Computer Science. However, in my undergrad, I began focusing on why and how good human experiences with technology work. Design, especially good design, has always invigorated me. <span id="bold">Designing and developing</span> functional and beautiful things is now what drives me. 
                    </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
  }

  export default About;