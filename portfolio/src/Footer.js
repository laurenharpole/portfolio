
import './styles/footer.css';
import up from "./other_files/PointUpFace.png";
import mail from "./other_files/mail-front-clay.png";
import brief from "./other_files/travel-front-color.png";
import pc from "./other_files/computer-front-premium.png";

function Footer() {

  function handleClick(){
    window.scrollTo(0,0);
  };

  function getDate() {
    var d = new Date();
    var date = "";
    if (d.getHours() > 12) {
      if (d.getMinutes() < 10) {
        date = d.getHours() - 12 + ":" + 0 + d.getMinutes() + " PM";
      } else {
        date = +(d.getHours() - 12) + ":" + d.getMinutes() + " PM";
      }
    } else if (d.getHours() === 0) {
      if (d.getMinutes() < 10) {
        date = 12 + ":" + 0 + d.getMinutes() + " AM";
      } else {
        date = +12 + ":" + d.getMinutes() + " AM";
      }
    } else {
      if (d.getMinutes() < 10) {
        date = d.getHours() + ":" + 0 + d.getMinutes() + " AM";
      } else {
        date = +d.getHours() + ":" + d.getMinutes() + " AM";
      }
    }
    return date;
  }
  return (
    <div className="Footer">

      <p className="stamp">Today, <span id="info"> {getDate()}</span></p>

      <div className="chat">
        <div className="mine messages">
          <p className="message"><img class="emoji-3d-links" src={up}></img>
            &nbsp;<a className="back2Top" id="back2Top" title="Back to top" onClick={handleClick}>back up</a>
          </p>
          <div className="message last">
            <ul className="f-three-column">
              <li className="last">
                <p><img class="emoji-3d-links" src={mail}></img>&nbsp;&nbsp;<a className="last" href="mailto:lrh72@cornell.edu">email</a></p>
              </li>
              <li className="last">
                <p><img class="emoji-3d-links" src={brief}></img>&nbsp;&nbsp;<a className="last" href="https://www.linkedin.com/in/lauren-harpole/">linkedin</a></p>
              </li>
              <li className="last">
              <p><img class="emoji-3d-links" src={pc}></img>&nbsp;&nbsp;<a className="last" href="https://github.com/laurenharpole">github</a></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="yours messages">
          <p class="yours-padding">
          <p className="message last">
            Built entirely by Lauren Harpole © 2025
          </p>
          </p>
        </div>
      </div>
    </div>
  )

}

export default Footer;
