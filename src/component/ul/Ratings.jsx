import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react";

const Ratings = ({ rating }) => {
    return (
      <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_,index) => 
      <FontAwesomeIcon icon="star" key={index} />)
      }
      {!Number.isInteger(rating) && 
      <FontAwesomeIcon icon="star-half-alt" />
      }
  </div>
    );
  };
  
//   <div className="book__ratings">
//   {new Array(Math.floor(rating)).fill(0).map((_,index) => 
//   <FontAwesomeIcon icon="star" key={index} />)
//   }
//   {!Number.isInteger(rating) && 
//   <FontAwesomeIcon icon="star-half-alt" />
//   }
// </div>
  export default Ratings;