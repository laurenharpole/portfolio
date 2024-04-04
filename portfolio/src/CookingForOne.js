import Footer from './Footer.js';
import './styles/infopage.css';
//import MasonryDev from './MasonryDev.js';
//import './footer.css';
//CookingForOne
import initial_sketch from './design_files/cookingforone/sketch_initial.pdf';
import initial_mockup from './design_files/cookingforone/mockup.jpg';
import cooking from './design_files/cookingforone/header-img.png';

import final_mockup from './design_files/cookingforone/Flow-of-app.jpg';
import affinity from './design_files/cookingforone/Final Project Affinity Diagram.pdf';
// import persona from './design_files/fridgeshot/persona.png';
import explore from './design_files/cookingforone/explore.png';
import filter from './design_files/cookingforone/filter.gif';
import fav from './design_files/cookingforone/fav.gif';
import recipe from './design_files/cookingforone/recipe.gif';
import history from './design_files/cookingforone/history.gif';

function CookingForOne() {

  return (
    <div className="Info">
      <div class="work-title-div">
        <p className="span-pos2"><span className="design2">Design</span></p>
        <h2 className="work-title">Cooking For One App Case Study</h2>
        <p className="subtitle">App Case Study · 2021</p>
      </div>
      <div className="header-container">
        <img className="header-img" src={cooking}></img>
      </div>

      <div class="work-title-div">
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <p className="body-text">A product helping students find individual recipes based their available ingredients, time and budget.</p>
            </div>
          </div>
        </div>
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title">Challenge</h2>
              <p className="body-text">After disucssing various alternatives as a group, we chose to pursue the challenge of making cooking easier and more convenient for college students. </p>
            </div>
          </div>

          <div class="work-title-div-col">
            <div class="work-title-div-col-segment">
              <h2 className="body-text-title-segment">Duration</h2>
              <p className="body-text">16 weeks</p>
            </div>
            <div class="work-title-div-col-segment">
              <h2 className="body-text-title-segment">Tools</h2>
              <p className="body-text">Figma, Vue.js, Heroku</p>
            </div>
            <div class="work-title-div-col-segment">
              <h2 className="body-text-title-segment">Roles</h2>
              <p className="body-text">User Research, Concept Ideation, Visual Design, Prototyping and testing, Flow and Interactions</p>
            </div>
            <div class="work-title-div-col-segment">
              <h2 className="body-text-title-segment">Team</h2>
              <p className="body-text">Group</p>
            </div>
          </div>
        </div>
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title">Solution</h2>
              <p className="body-text">We developed a high-fidelity prototype that lets students search and save single-portion recipes based on available ingredients, budget and time. We focused on the following design question:</p>
              <h2 className="body-text-title-question">How can we help students more easily find recipes that reflect their budget, time and desired portions?</h2>
              <p className="body-text"></p>
            </div>
          </div>
        </div>

        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title">Research</h2>
              <p className="body-text">Our team interviewed 4 different users in semi structured interviews based on a general skeleton of questions allowing for user-specific follow up questions. This method proved helpful in gaining key user pain points and goals. We selected our interviewees based on them being our target users (college students who cook for themselves and are not on a meal plan). <br></br><br></br>We found that our interviewees primarily lived off-campus, shared kitchen spaces with roommates, frequently used google to find recipes and ultimately wanted recipes that were cheap, quick, and allowed them to use the ingredients already available as they rarely shopped based on a specific recipe. From these interviews, we constructed an affinity diagram.</p>

              <figure>
                <img className="work-col-img" src={affinity}></img>
                <figcaption>affinity diagram constructed from user interviews</figcaption>
              </figure>

              <h2 className="body-text-title-segment">Insights</h2>
              <p className="body-text">From our user interviews, we discovered two main insights based on their frequency and expressed impact. </p>

              <div class="list">
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">1</span></span>
                  <span class="list-text">finding quick recipes or recipes without pricey ingredients</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">2</span></span>
                  <span class="list-text">having the right portion control/scaling when cooking</span>
                </div>
              </div>

              {/* <div class="list">
                <div class="item">
                    <span class="number-cell"><span class="grey-circle">1</span></span>
                    <span class="list-text"></span>
                </div>
              </div>
               */}

              <h2 className="body-text-title-segment">Core Needs</h2>
              <p className="body-text">Then from our affinity diagram, and primary insights, we found our core requirements. With them in mind and based on our insights, we came up with a persona to serve as a cumulative representation of all the common user needs goals and tasks from our interviews. </p>

              <div class="list">
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">1</span></span>
                  <span class="list-text">Recipes should cater to user's tastes and enviroments</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">2</span></span>
                  <span class="list-text">Users should be able to save money and capitalize on their existing ingredients for used and new recipes</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">3</span></span>
                  <span class="list-text">The product should let users see what recipes they've used in the past</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">4</span></span>
                  <span class="list-text">Users should be able to search recipes based on cost, ingredients and amount of time to cook</span>
                </div>
              </div>

              <p className="body-text">Gordon is an undergraduate student at Cornell University and lives off-campus with 3 roommates. Gordon has a basic knowledge of cooking, and knows 3-5 recipes by heart. About once a week, he goes to either Trader Joes or Wegmans. He likes to try recipes from Google and blogs that are time and cost effective, as he prefers to cook less than an hour and likes using simple ingredients. Gordon makes grocery lists based on what he’s run out of and what other basic ingredients he might need.
                <br></br><br></br>

                In Gordon's apartment kitchen, he has a stove, oven, toaster, pots/pans, microwave, fridge, blender, and a food processor. He uses his stove and oven to cook, his microwave to heat up leftovers and his fridge and counter-space for storing and prepping ingredients. Gordon struggles with portion control for one person, as it is hard to buy with it in mind at supermarkets. Many recipes he finds online have set serving sizes, so Gordon often makes these and stores the leftovers in the fridge. </p>
              <h2 className="body-text-title"></h2>
            </div>
          </div>
        </div>
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title">Ideation</h2>
              <figure>
                <img className="work-col-img" src={initial_sketch}></img>
                <figcaption>initial sketches</figcaption>
              </figure>
              <p className="body-text">We entered a brainstorming phase, investigating existing solutions to similar problems. Afterwards, we decided we wanted a virtual platform with filters (based on time prep, dietary restrictions, budget, etc.), a “Save recipe for later” icon, a way to track often used ingredients, a way to recommend recipes with those ingredients, and a search option to either “quick search” with ingredients or search with other filters like cost or time.

                <br></br><br></br>These functionalities address our users’ pain points centered around efficiency of recipe finding, portion control, and budget planning. Our decision to make our content single portion recipes additionally addressed the issues of portion control and scaling. Our resulting solution was a feed-based app that incorporated this all.</p>
              <figure>
                <img className="work-col-img" src={initial_mockup}></img>
                <figcaption>initial mockup</figcaption>
              </figure>

              <h2 className="body-text-title-segment">Scenarios</h2>
              <p className="body-text">We developed user scenarios depending on the needs of our persona, Gordan. These scenarios ended up being our "happy paths" that we used in the testing of our developed prototype.</p>

              <div class="list">
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">1</span></span>
                  <span class="list-text">You are craving a snack, but you have a really busy night tonight and don’t want to spend more than 10 minutes cooking this snack. You notice that you have bread in your pantry, so you want this recipe to include bread. You are on a strict budget and you don’t want to spend a lot of money. What recipe should you make and what ingredients do you need besides bread?</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">2</span></span>
                  <span class="list-text">You have an hour to cook tonight, so you don’t really have time to go out and buy new ingredients. Because you’re short on time, you want to make something simple and familiar. You think back to what you made last time, and you realize that you have enough ingredients to make it again. Find the ingredients that you need from the recipe that you last made. </span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">3</span></span>
                  <span class="list-text">You’re starting to get hungry and are beginning to think about dinner planning. You remember a particular recipe you saved a bit ago and think that looking at that would be a great start. Navigate through to the right place and find that recipe.</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">4</span></span>
                  <span class="list-text">You just finished making the mac and cheese recipe and you want to mark that you cooked it so you can find it again in the future. Indicate that you cooked the mac and cheese.</span>
                </div>
              </div>

              <h2 className="body-text-title-segment">Testing</h2>
              <p className="body-text">After developing our prototype, we conducted usability tests to assess the user experience of our product using the scenarios mentioned above. With our testing, we discovered the following issues:  </p>

              {/* <div class="list">
                <div class="item">
                    <span class="number-cell"><span class="grey-circle">1</span></span>
                    <span class="list-text"></span>
                </div>
                <div class="item">
                    <span class="number-cell"><span class="grey-circle">2</span></span>
                    <span class="list-text"></span>
                </div>
                <div class="item">
                    <span class="number-cell"><span class="grey-circle">3</span></span>
                    <span class="list-text"></span>                </div>
                <div class="item">
                    <span class="number-cell"><span class="grey-circle">4</span></span>
                    <span class="list-text"></span>                </div>
              </div> */}

              <div class="list">
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">1</span></span>
                  <span class="list-text">the naming of the "History" and the "My recipes" pages failed to clearly communicate their purposes</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">2</span></span>
                  <span class="list-text">the navigation bar tabs were not apparent enough, and its labels were not clear</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">3</span></span>
                  <span class="list-text">the cooked the button was hard to find and created confusion based on what it did</span>
                </div>
              </div>

              <p className="body-text"> </p>

              <h2 className="body-text-title-segment">Improvements</h2>
              <p className="body-text">Through various rounds of critique and feedback, we decided to make our prototype more app-like to cater to our target audience. First, we adjusted our individual recipe pages to be more horizontally-aligned in order to remove the need to scroll to read the recipes. <br></br><br></br>Additionally, we made the navigation bar sticky on the side of the view and increased the font size to more easily let a user know what page they are on. We incorporated the "cooked" and "liked" buttons onto individual recipes pages also to further demonstrate to our users how they can use the buttons and when they can use the buttons.   </p>
              <figure>
                <img className="work-col-img" src={final_mockup}></img>
                <figcaption>revised mockup based on improvements</figcaption>
              </figure>

              <h2 className="body-text-title-segment">Final Design </h2>
            </div>
          </div>
        </div>
        {/* <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
            </div>
          </div>
        </div> */}
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif-laptop" src={explore}></img>
                <figcaption>explore page</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">Explore Page</h2>
              <p className="body-text-gif">Initial page when a user opens the app which displays a grid of all available recipes.</p>
            </div>
          </div>
        </div>
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif-laptop" src={recipe}></img>
                <figcaption>recipe page</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">Recipe Page</h2>
              <p className="body-text-gif">When a user clicks on a recipe from the explore, my recipe, or history page, they are able to see recipe instructions, ingredients and more.</p>
            </div>
          </div>
        </div>
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif-laptop" src={filter}></img>
                <figcaption>filtering for recipes</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">Filtering For Recipes</h2>
              <p className="body-text-gif">The menu at the top drops down when filter button is selected to help user narrow down recipes for what they want.</p>
            </div>
          </div>
        </div>
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif-laptop" src={fav}></img>
                <figcaption>my recipe page</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">My Recipe Page</h2>
              <p className="body-text-gif">Any recipe a user "likes" by clicking the heart button on a recipe card will automatically add to the My Recipe page.</p>
            </div>
          </div>
        </div>
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif-laptop" src={history}></img>
                <figcaption>history page</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">History Page</h2>
              <p className="body-text-gif">This page allows users to go back through the recipes they've viewed the recipe pages for. </p>
            </div>
          </div>
        </div>

        <h2 className="body-text-title">Reflection</h2>
        <p className="body-text">Working on this project gave me further practice in the user-centered design process specifically regarding effective translations of user-identified pain points into functional solutions. I was able to put my user interface design skills to use by taking what we learned in our initial user interviews and applying it to the creation and structuring of our initial interface and mock ups. <br></br><br></br>I also played a part in brainstorming solutions to issues raised during user testing. In addition, I practiced my technical skills by implementing our filtering functionality, dynamically loading recipe pages, and the full styling of our recipe cards and grid. </p>

        {/* </div>
          </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </div>

  )

}

export default CookingForOne;