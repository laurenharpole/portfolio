import './styles/masonry.css';
import cordillera from './dev_files/cordillera.jpg';
import fridgeshot from './design_files/fridgeshot.jpg';
import cookingforone from './design_files/cookingforone/cover.jpg';
import datavis from './design_files/data.jpg';
import Card from './Card.js';


function MasonryDesign() {
  return (
    <div className="MasonryDesign">
      <div class="title-div-work">
        <h1 className="title"><span className="Design-Marker"></span> Design </h1>
      </div>
        <div class="card_container">
          <Card subpath="cookingforone" image={cookingforone} title="Cooking For One Case Study" label="Design" desc="Helping students find individual recipes based on available ingredients, time and budget."/>
          <Card subpath="datavis" image={datavis} title="Data Visualization" label="Design" desc="Giving an interactive breakdown to high school students on their standardized testing results."/>
          <Card subpath="fridgeshot" image={fridgeshot} title="Fridgeshot App Case Study" label="Design" desc="Food recognizing and recipe generating app for new adults."/>
          <Card subpath="cordillera" image={cordillera} title="Magazine Website" label="Design" desc="Website developed for Cornell student literary magazine."/>
        </div>
    </div>
  )
}

export default MasonryDesign;