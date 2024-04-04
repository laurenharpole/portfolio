import './styles/infopage.css';
import './styles/launch.css';
import rocket from './other_files/rocket-dynamic-color.png';

function LaunchButton() {

  return (

      <button>
        launch site
  
        <div className="arrowPacman">
            <div className="arrowPacman-clip">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>

            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
            {/* 🚀 */}
            <img src={rocket} class="rocket-img"></img> 
            </div>
        </div>
      </button>

  )

}
export default LaunchButton;