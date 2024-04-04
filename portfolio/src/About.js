import {
    BrowserRouter as Router,
    Route, 
    Link, 
  } from "react-router-dom";
  //import './styles/home.css';
   import './styles/about2.css';
 //import './styles/footer.css';
  import Footer from './Footer.js';
  import blob from "./other_files/blob2.JPG";
 // import MasonryDev from './MasonryDev.js';
//import './footer.css';
  function About() {

    return (
        <div className="About">
            {/* <div className="header-contain"> */}
            {/* <div className="centered">
            <h1 className="egg">
             &nbsp;&nbsp;&nbsp;
            </h1>
            </div> */}
{/* Hi, I'm Lauren Harpole a Computer Science major with an 
emphasis on design, studying at Cornell University. I am an 
avid photographer, and hope to incorporate my skills in aesthetics 
and composition into software design. In addition, I am developing 
proficiency in Japanese and have studied French for seven years. 
I hope to pursue opportunities in software engineering and graphic 
design so as to gain experience and knowledge. Ultimately, my goal is 
to work in-between graphic designers and programmers in order to steer 
design in a human direction such that technology is elegant, effective, 
and user-friendly. 



From a young age, I was running around with a camera in hand, trying to freeze
 moments of noticed beauty around me. It wasn't until I was older that I realized
 the feeling of satisfaction I got came not from the subject necessarily, but the overall
 composition of the shot; the interplay of its respective elements. Thanks to the internet,
 I was able to find wells of creative inspiration both for shoot ideas, and for editing.
 I spent year finding my style, playing around in photoshop, and expanding my interest in composition
 beyond photography into graphic design. Then, around sixteen or so, I started asking myself
 questions. How can I predict what colors go well together? What types of layouts are easier to navigate?
 What sizes of fonts, icons, and images feel easier to parse through? In a desire to interact with my designs 
 in a way that felt more tangible, I turned to web development. As I explored
 compositional ideas, I became fascinated both with how I could make the code work, and with
 learning what I would later learn was user centered design.

 I was in pursuit of was that feeling of satisfaction from creating good composition.

<p class="about-text">I didn’t know the name at the time, but I have always had a deep interest in user-centered design. I spent a large portion of my childhood running around with my mother's camera, trying to freeze moments of beauty around me. There was always this jolt of satisfaction when the viewfinder lined up in a way I liked, and as I got older, I realized it came from finding a solid composition.
                        <br></br>
                        <br></br>
                        I kept exploring photography after that, experimented in photoshop, and eventually expanding my interest in composition into graphic design. It was here that I started to critically wonder what went into good design and how I, as a user, could interact with it. Graphic design lead to web development and web development lead me to computer science, where I leaned that I could both create and solve problems in my own way. 
                        <br></br>
                        <br></br>


*/}
      
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