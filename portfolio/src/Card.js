import './styles/masonry.css';

import {
    Link,
  } from "react-router-dom";

  
function Card(props) {

  return (
        <div class="individual_card_container">
            <Link class="link" to={"/" + props.subpath}>
              <img src={props.image} alt='' />
              <div class="card-content-container">
                <p className="span-pos"><span className={props.label}>{props.label}</span></p>
                <h4 >{props.title}</h4>
                <p className="paragraph">{props.desc}</p>
                {/* <a className="read-more">Read more ➔</a> */}
              </div>
            </Link>
        </div>
  )

}

export default Card;