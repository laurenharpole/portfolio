import './styles/infopage.css';
import cordillera from './dev_files/cordillera.jpg';
import Footer from './Footer.js';
import LaunchButton from './LaunchButton.js';

function Cordillera() {

  return (
    <div className="Info">
      <div class="work-title-div">
        <p className="span-pos2"><span className="design2">Design</span></p>
        <h2 className="work-title">Cordillera Magazine Website</h2>
        <p className="subtitle"> Web Development for Magazine · 2020</p>
      </div>
      <div className="header-container">
        <img className="header-img" src={cordillera}></img>
      </div>
      <div class="work-title-div">
        <p className="body-text"> Cornell Cordillera is Cornell's relatively new literary magazine exploring the americas as a continuous continent of culture, language and experience. I created the UI design system; I designed the user interface, animations, and navigation.
          I also implemented a fully responsive website using CSS3/HTML5/JS. Below is a link to a github site on my personal page. It displays what the site looked like in its initial 2020 launch.</p>
        <p className="body-text"><a href="https://laurenharpole.github.io/cordillera/"><LaunchButton title="launch site" /></a></p>
      </div>
      <Footer />
    </div>
  )

}

export default Cordillera;