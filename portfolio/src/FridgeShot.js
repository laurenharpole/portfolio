
import './styles/infopage.css';
import './styles/footer.css';
//import './styles/test.css';
import fridgeshot from './design_files/fridgeshot/fridgetop.jpg';
import affinity from './design_files/fridgeshot/affinity.jpg';
import persona from './design_files/fridgeshot/persona.jpg';
import lofi from './design_files/fridgeshot/lofi1.gif';
import home from './design_files/fridgeshot/home.gif';
import capturead from './design_files/fridgeshot/capturead.gif';
import fav from './design_files/fridgeshot/fav.gif';
import recipe from './design_files/fridgeshot/recipe.gif';
import recipes from './design_files/fridgeshot/recipes.gif';
import account from './design_files/fridgeshot/account.gif';

import Footer from './Footer.js';

//import MasonryDev from './MasonryDev.js';
//import './footer.css';
function Fridgeshot() {

  return (
    <div className="Info">
      <div class="work-title-div">
        <p className="span-pos2"><span className="design2">Design</span></p>
        <h2 className="work-title">
          Fridgeshot App Case Study
        </h2>
        <p className="subtitle"> App Case Study · 2020</p>
      </div>
      <div className="header-container">
        <img className="header-img" src={fridgeshot}></img>
      </div>
      <div class="work-title-div">
        <div class="work-title-div-row">
            <div class="work-title-div-col">
              <div class="work-title-div-col-segment-challenge">
              <p className="body-text">Food recognizing and recipe generating app for new adults.</p>
              </div>
            </div>
          </div>
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title">Challenge
              </h2>
              <p className="body-text">We focused on solutions to limit space and/or difficulty in navigating cooking environments to provide Cornell undergraduates living off-campus without a meal plan with easier, quicker, and more comfortable cooking experiences as well as shorter and less frequent trips to the supermarket. FridgeShot is a mobile application that captures an image of the user’s fridge and uses image recognition to discern their fridge contents and suggest relevant recipes.
              </p>
              <p className="body-text">Our user demographic was Cornell undergraduates who aren’t on the campus meal-plan and cook in their off-campus residences. This app needed to help users maximize the usage of their ingredients, save time and money spent on trips to the store, and encourage the exploration of a diverse and balanced diet.
              </p>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment">
              <h2 className="body-text-title-segment">Duration
              </h2>
              <p className="body-text">12 weeks
              </p>
            </div>
            {/* <div class="work-title-div-col-segment">
                    <h2 className="body-text-title-segment">TOOLS
                    </h2>
                    <p className="body-text">Figma, Vue.js, Heroku
                    </p>
                  </div> */}
            <div class="work-title-div-col-segment">
              <h2 className="body-text-title-segment">Roles
              </h2>
              <p className="body-text">User Research, Concept Ideation, Visual design, Prototyping & testing, Flow and Interactions
              </p>
            </div>
            <div class="work-title-div-col-segment">
              <h2 className="body-text-title-segment">Team
              </h2>
              <p className="body-text">Group
              </p>
            </div>
          </div>
        </div>

        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title">Research
              </h2>
              <p className="body-text">We conducted primary research (user interviews) on four individuals (3 female, 1 male) within our target demographic, the following guiding our research and our questions.
              </p>
              <h2 className="body-text-title-segment">Key Focus Areas
              </h2>
              <div class="list">
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">1</span></span>
                  <span class="list-text">How long does it typically take users to prep and cook a meal?</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">2</span></span>
                  <span class="list-text">What do users keep in mind when they’re cooking?</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">3</span></span>
                  <span class="list-text">How often do users cook at home?</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">4</span></span>
                  <span class="list-text">How do users choose what to buy and when?</span>
                </div>
              </div>

              <p className="body-text">In order to analyze our gathered information, we created an affinity diagram, uncovering insight into user needs.
              </p>
              <figure>
                <img className="work-col-img" src={affinity}></img>
                <figcaption>affinity diagram constructed from user interviews</figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title">Solution
              </h2>
              <p className="body-text">
              </p>
              <div className="yours messages">
                <div className="message last">I get my groceries from Walmart</div>
              </div>
              <div className="mine messages">
                <div className="message last">
                  I like to optimize the yield when I cook, reusing ingredients
                </div>
              </div>
              <div className="yours messages">
                <div className="message last">I cook 4-5 times a week</div>
              </div>
              <div className="mine messages">
                <div className="message last">
                  I buy 1-2 vegetables each trip to avoid waste
                </div>
              </div>
              <div className="yours messages">
                <div className="message last"> I cook based on my oldest ingredient</div>
              </div>
              <p className="body-text">From our interviews, we found our core needs. With them in mind, and based on our insights, we came up with a persona to serve as a cumulative representation of all the common user needs, goals, tasks from user interviews.</p>
              <h2 className="body-text-title-segment">Needs</h2>
              <div class="list">
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">1</span></span>
                  <span class="list-text">maximizing ingredient choices</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">2</span></span>
                  <span class="list-text">meal prep</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">3</span></span>
                  <span class="list-text">decreasing shopping frequency</span>
                </div>
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">4</span></span>
                  <span class="list-text">cook time</span>
                </div>
              </div>

              <figure>
                <img className="work-col-img" src={persona}></img>
                <figcaption>persona constructed from user interview insights</figcaption>
              </figure>
              <p className="body-text">After getting a good look at our persona and what she needed, we began brainstorming solution ideas.</p>
            </div>
          </div>
        </div>



        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title">Ideation
              </h2>
              <p className="body-text">From our research we realized that a common flaw with technologies increasing cooking/cleaning efficiency was that they applied to only one part of the process. Two examples are the Dash Egg Cooker, or the Rubbermaid Power Scrubber. These technologies tackle niche processes and might not save time when looking at the bigger picture.
              </p>
              <p className="body-text">Our final idea was an app which scans a photo of your fridge contents, and suggests recipes based on your available ingredients. Our design covered our core needs of maximizing ingredient choices, meal prep, decreasing shopping frequency, and cook time. Its dependency on current ingredients lets users grab what’s there and start a meal, reducing the amount of time they might spend staring at what they have and thinking about what they can make. It also suggested to users recipes for future meals.
              </p>
              <h2 className="body-text-title-segment">Wireframes Low & High
              </h2>
              <p className="body-text">
                Since our design is an iOS application, we formatted our initial prototype to fit an iPhone. The UI elements within the prototype are meant to be intuitive or easy to learn. The bottom navigation bar is easy to reach so a user can quickly move through the application and get a good sense of its functionality.
              </p>

              <figure>
                <img className="work-col-img" src={lofi}></img>
                <figcaption>sketch layout and low fidelity design</figcaption>
              </figure>
              <h2 className="body-text-title-segment">Testing
              </h2>
              <p className="body-text">
                We conducted a usability testing session on our prototype, where we asked our test subjects to complete a set of tasks.
                Such involved scenarios where users needed to navigate to various pages in order to favorite recipes, searching favorited recipes, scan fridge contents, and more.
                We measured the outcome of these tasks based on the following metrics.
              </p>
              <div class="list">
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">1</span></span>
                  <span class="list-text"><b>Usability</b></span>
                  <span class="list-text">The user is able to complete the tasks with minimal error and does so along an optimal or near optimal path.</span>
                </div>

                <div class="item">
                  <span class="number-cell"><span class="grey-circle">2</span></span>
                  <span class="list-text"><b>User Experience</b></span>
                  <span class="list-text">The user does not get frustrated with the application and feels that they would actually use the product in their everyday life For this test, we used figma to prototype full flows of our concepts and interactions. From here, we evaluated and analyzed our results, and made our design changes, creating our high fidelity prototype.</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-segment">Final Design And Rationale
              </h2>
            </div>
          </div>
        </div>
        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif" src={home}></img>
                <figcaption>home page</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">Home
              </h2>
              <p className="body-text-gif">The home page displays data from the last fridge shot the user took. The inspiration for this was the stats-based home page style of fitness apps. Based on user feedback, we rearranged the item listings in alphabetical order, so the user has an easier time checking whether they have a certain ingredient.
              </p>
            </div>
          </div>
        </div>

        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif" src={capturead}></img>
                <figcaption>camera + add/remove ingredients page</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">Camera + Add/Remove Ingredients
              </h2>
              <p className="body-text-gif">The camera app features a standard one click to capture. After analyzing the picture taken, FridgeShot categorizes scanned items into “Scanned Ingredients” and “Add to List.” The ingredients list features items identified by the algorithm at a theoretically optimal level of accuracy. The “Add to List” category contains items, such as those that are partially covered, that are identifiable to a much lower level of accuracy.
              </p>
            </div>
          </div>
        </div>

        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif" src={recipes}></img>
                <figcaption>browse recipe page</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">Browse Recipe
              </h2>
              <p className="body-text-gif"> Users can go to the browse screen to obtain the results from their FridgeShot. A user not only searches for recipes based on their fridge contents but also plan their shopping list with minimal wastage based on recipes that they already have most of the ingredients for
              </p>
            </div>
          </div>
        </div>


        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif" src={fav}></img>
                <figcaption>favorites page</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">Favorites
              </h2>
              <p className="body-text-gif"> The favorites page, visually similar to the browse page, allows users to return to recipes for quick access, save ones they liked, and easily find recipes without going through the entire process of taking a picture of one’s fridge and browsing recipes again.
              </p>
            </div>
          </div>
        </div>



        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif" src={recipe}></img>
                <figcaption>selected recipe page</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">Selected Recipe
              </h2>
              <p className="body-text-gif"> The selected recipe page was designed to help users see not only the ingredients, but a step-by-step guide for the creation of the chosen recipe. This page can be found from the selection of a recipe from the browse page, and has a layout similar to just about any cooking site or app for increased user familiarity.
              </p>
            </div>
          </div>
        </div>

        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <figure>
                <img className="work-col-gif" src={account}></img>
                <figcaption>account page</figcaption>
              </figure>
            </div>
          </div>
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title-gifs">Account
              </h2>
              <p className="body-text-gif">The account page was created to give users a place to enter their app settings, notification settings and to access any support they may need.
              </p>
            </div>
          </div>
        </div>


        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title">Learnings
              </h2>

              <div class="list">
                <div class="item">
                  <span class="number-cell"><span class="grey-circle">1</span></span>
                  <span class="list-text"><b>Embrace design consistency</b></span>
                  <span class="list-text">We learned that it is important for both visual mapping and user satisfaction that every page of our prototype felt and appeared to fit together.</span>
                </div>

                <div class="item">
                  <span class="number-cell"><span class="grey-circle">2</span></span>
                  <span class="list-text"><b>Considering icon choices</b></span>
                  <span class="list-text">It is important to use standard symbols for their respective functions, so that you can work with the user, not against them.</span>
                </div>

                <div class="item">
                  <span class="number-cell"><span class="grey-circle">3</span></span>
                  <span class="list-text"><b>User Testing is Irreplaceable</b></span>
                  <span class="list-text">Our usability test was insightful, exposing instances of user difficulty and frustration while completing tasks along the optimal path.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="work-title-div-row">
          <div class="work-title-div-col">
            <div class="work-title-div-col-segment-challenge">
              <h2 className="body-text-title">Next Steps
              </h2>
              <p className="body-text">We were made aware of a few things that went beyond our Figma prototype’s capabilities, such as issues adding and removing a given item from the scanned ingredients list, maintaining a favorited state across all pages, an inability to see if an item is already entered into the ingredients list, and an inability to filter recipes in our browse page. Our testing metrics were extremely helpful in raising these issues even though they go beyond what is feasible at this current time for our prototype, which is still in early development and has yet to be given true functional implementation.
              </p>
            </div>
          </div>
        </div>


      </div>




      <Footer />
    </div>

  )

}

export default Fridgeshot;