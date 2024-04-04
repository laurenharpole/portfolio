import './styles/masonry.css';
import cordillera from './dev_files/cordillera.jpg';
import fridgeshot from './design_files/fridgeshot.jpg';
import cookingforone from './design_files/cookingforone/cover.jpg';
import datavis from './design_files/data.jpg';
import pencil from './other_files/pencil-dynamic-color.png';
import Card from './Card.js';

import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
function MasonryDesign() {

  return (
    
    <div className="MasonryDesign">
      <div class="title-div">
      {/* <p className="span-pos"><span className="Design">○</span></p> */}
        <h1 className="title"><span className="Design-Marker"></span> Design </h1>
      </div>
      {/* <body > */}
        <div class="card_container">
          <Card subpath="cookingforone" image={cookingforone} title="Cooking For One Case Study" label="Design" desc="Helping students find individual recipes based on available ingredients, time and budget."/>
          <Card subpath="datavis" image={datavis} title="Data Visualization" label="Design" desc="Giving an interactive breakdown to high school students on their standardized testing results."/>
          <Card subpath="fridgeshot" image={fridgeshot} title="Fridgeshot App Case Study" label="Design" desc="Food recognizing and recipe generating app for new adults."/>
          <Card subpath="cordillera" image={cordillera} title="Magazine Website" label="Design" desc="Website developed for Cornell student literary magazine."/>
        </div>
      {/* </body> */}
          {/* <div class="individual_card_container">
            <Link class="link" to="/cookingforone">
              <img src={cookingforone} alt='cooking' />
              <div class="card-content-container">
                <p className="span-pos"><span className="esign">Design</span></p>
                <h4 >Cooking For One Case Study</h4>
                <p className="paragraph">Helping students find individual recipes based on available ingredients, time and budget</p>
              </div>
            </Link>
          </div> */}
         
          {/* <div class="individual_card_container">
            <Link class="link" to="/datavis">
                <img class='grid-item grid-item-2' src={datavis} alt='' />
                <div class="card-content-container">
                  <p className="span-pos"><span className="design">Design</span></p>
                  <h4 className="header">Data Visualization </h4>
                  <p className="paragraph">Giving an interactive breakdown to high school students on their standardized testing results.</p>
                </div>
            </Link>
          </div> */}
          {/* <div class="individual_card_container">
            <Link class="link" to="/fridgeshot">
              <img src={fridgeshot} alt='' />
              <div class="card-content-container">
                <p className="span-pos"><span className="design">Design</span></p>
                <h4 className="header">Fridgeshot App Case Study</h4>
                <p className="paragraph">Food recognizing and recipe generating app for new adults.</p>
              </div>
            </Link>
          </div> */}


          {/* <div class="individual_card_container">
            <Link class="link" to="/cordillera">
              <img class='grid-item grid-item-2' src={cordillera} alt='cord' />
              <div class="card-content-container">
                <p className="span-pos"><span className="design">Design</span></p>
                <h4 className="header">Magazine Website</h4>
                <p className="paragraph">Designed and developed website for the Cornell Cordillera, a literary magazine exploring the Americas as a continuous continent of culture, language and experience. </p>
              </div>
            </Link>
          </div> */}
      {/* <div class="grid-container">
        <Link to="/cookingforone">
          <div className="tile">
            <img class='grid-item grid-item-1' src={cookingforone} alt='cooking' />
            <h1 className="header">Cooking For One Case Study</h1>
            <p className="span-pos"><span className="design">Design</span></p>
            <p className="paragraph">A product helping students find individual recipes based their available ingredients, time and budget</p>
          </div>
        </Link>
        <Link to="/cordillera">
          <div className="tile">
            <img class='grid-item grid-item-2' src={cordillera} alt='cord' />
            <h1 className="header">Web Development for Magazine</h1>
            <p className="span-pos"><span className="design">Design</span></p>
            <p className="paragraph">Designed and developed website for the Cornell Cordillera, Cornell's new</p>
          </div>
        </Link>
        
        <Link to="/fridgeshot">
          <div className="tile">
            <img class='grid-item grid-item-3' src={fridgeshot} alt='frid' />
            <h1 className="header">Fridgeshot App Case Study</h1>
            <p className="span-pos"><span className="design">Design</span></p>
            <p className="paragraph">Food recognizing and recipe generating app for new adults.</p>
          </div>
        </Link>
        <Link to="/datavis">
          <div className="tile">
            <img class='grid-item grid-item-4' src={datavis} alt='vis' />
            <h1 className="header">Data Visualization </h1>
            <p className="span-pos"><span className="design">Design</span></p>
            <p className="paragraph">Interactive testing results and their breakdowns</p>
          </div>
        </Link> */}
      {/* </div> */}
    </div>
  )
}

export default MasonryDesign;