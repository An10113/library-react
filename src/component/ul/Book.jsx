import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Ratings from "./Ratings";


const Book = ({book}) => {
   return ( <div className="book">
        <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
                <img src={book.url} alt="" className="book__img"/>
            </figure>
        <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__link">
                {book.title}
            </Link>
        </div>
        <Ratings rating={book.rating} />
        <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
        </Link>
    </div>
   )
}

export default Book