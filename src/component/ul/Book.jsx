import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";

const Book = ({book}) => {
   return ( <div className="book">
        <Link to="/BookInfo">
            <figure className="book__img--wrapper">
                <img src={book.url} alt="" className="book__img"/>
            </figure>
        <div className="book__title">
            <Link to="" className="book__link">
                {book.title}
            </Link>
        </div>
        <div className="book__ratings">
            {
            new Array(Math.floor(book.rating)).fill(0).map((_,index) => <FontAwesomeIcon icon="star" key={index} />)
            }
            {
                !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt" />
            }
        </div>
        <div className="book__price">
            {book.salePrice !== null ?
            (<>
            <span className="book__price--normal">{book.originalPrice.toFixed(2)}$</span>{book.salePrice.toFixed(2)}$
            </>
            ): (
                <>{book.originalPrice.toFixed(2)}$</>
            )}
        </div>
        </Link>
    </div>
   )
}

export default Book