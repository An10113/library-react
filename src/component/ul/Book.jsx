import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Book = ({book}) => {
   return ( <div className="book">
        <a href="">
            <figure className="book__img--wrapper">
                <img src={book.url} alt="" className="book__img"/>
            </figure>
        <div className="book__title">
            <a href="" className="book__link">
                {book.title}
            </a>
        </div>
        <div className="book__ratings">
            {
            new Array(book.rating).fill(0).map((_,index) => <FontAwesomeIcon icon="star" key={index} />)
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
        </a>
    </div>
   )
}

export default Book