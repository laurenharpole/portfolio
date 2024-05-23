//import logo from './logo.svg';
import './styles/App.css';
import './styles/masonry.css';
import Home from './Home.js';
import Dev from './Dev.js';
import Design from './Design.js';
import About from './About.js';
import logo from './other_files/LH.svg';
import POC from './Poc.js';
import MindSpire from './MindSpire.js';
import Garden from './Garden.js';
import FridgeShot from './FridgeShot.js';
import CookingForOne from './CookingForOne.js';
import Cordillera from './Cordillera';
import Sweeper from './Sweeper.js';
import ChemE from './ChemE.js';
import Covid from './CovidVis.js';
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {

  return (
    <div className="App">
      <div className="nav">

        <div className="nav-header">
          <img src={logo} alt="logo" className="title" />
        </div>
        {/* <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div> 
         <Link to="/design"><p><span class="ed">Design</span></p></Link>
            <Link to="/dev"><p><span className="prog">Development</span></p></Link>
        */}
        <div className="nav-links">
          <Router>
            <Link to="/portfolio"><p>Home </p></Link>
            <Link to="/design"><p>Design</p></Link>
            <Link to="/dev"><p>Development</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/portfolio" element={<Home />}></Route>
              <Route exact path="/dev" element={<Dev />}></Route>
              <Route exact path="/design" element={<Design />}></Route>
              <Route exact path="/about" element={ <About />}></Route>
              <Route exact path="/poc" element={<POC />}></Route>
              <Route exact path="/datavis" element={<MindSpire />}></Route>
              <Route exact path="/garden" element={<Garden />}></Route>
              <Route exact path="/fridgeshot" element={<FridgeShot />}></Route>
              <Route exact path="/cookingforone" element={ <CookingForOne />}></Route>
              <Route exact path="/cordillera" element={<Cordillera />}></Route>
              <Route exact path="/sweeper" element={<Sweeper />}></Route>
              <Route exact path="/cheme" element={<ChemE />}></Route>
              <Route exact path="/covid" element={<Covid />}>
              </Route>

            </Routes>
          </Router>

        </div>

      </div>
      
    </div>
  );
}

export default App;
