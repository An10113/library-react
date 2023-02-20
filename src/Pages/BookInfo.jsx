import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Books from "./Books";
import Book from "../component/ul/Book";
import Price from "../component/ul/Price";
import Ratings from "../component/ul/Ratings";


const BookInfo=({books, addtoCart,cart}) => {
    const  { id } = useParams()
    const book = books.find(book => +book.id == +id )
    function addBook(book){
        addtoCart(book)
    }
    function bookExist(){
        return cart.find(book => +book.id === +id )
    }

return(
<div if="#books__body">
    <main id="books__main">
    <div className="books__container">
        <div className="row">
            <div className="book__selected--top">
                <Link to='/books' className="book__link">
                    <FontAwesomeIcon icon="arrow-left" /> 
                </Link>
                <Link to="/books" className="book__link">
                    <h2 className="book__selected--title--top">
                      Books  
                    </h2>
                </Link>
            </div>
            <div className="book__selected">
                <figure className="book__selected--figure">
                    <img src={book.url} alt="" className="book__selected--img"/>
                </figure>
                <div className="book__selected--description">
                    <h2 className="book__selected--title">
                        {book.title}
                    </h2>
                    <Ratings rating={book.rating} />
                    <div className="book__selected--price">
                        <Price 
                        salePrice={book.salePrice}
                        originalPrice={book.originalPrice}
                        />
                    </div>
                    <div className="book__summary">
                        <div className="book__summary--title">
                            Summary
                        </div>
                        <div className="book__summary--para">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, optio itaque quia accusantium in libero vitae fuga ipsa quaerat iusto.
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, optio itaque quia accusantium in libero vitae fuga ipsa quaerat iusto.
                            </p>
                        </div>
                        {
                            bookExist() ?
                            ( 
                            <Link to="/cart">
                            <button className="btn">Checkout</button> 
                            </Link>
                            )
                            :
                             (
                        <button className="btn" onClick={() => addBook(book)}>
                            Add to Cart
                        </button>
                             )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="book__container">
        <div className="row">
            <div className="book__selected--top">
                <h2 className="book__selected--title--top">
                Recommended Books
                </h2>
            </div>
            <div className="books">
            {books
                .filter((book) => book.rating === book.rating && +book.id !== +id)
                .slice(0,4)
                .map((book) =>(
                    <Book book={book} key={book.id} />
                ))
            }
            </div>
        </div>
    </div>
    </main>
</div>
)
}


export default BookInfo
