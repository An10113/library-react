import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Ratings from "./Ratings";


const Book = ({book}) => {
  const [img,setImg]= useState()
  const mountedRef = useRef(false);
  useEffect(()=>{
    const image = new Image()
    image.src = book.url
    image.onload =() => {
      setTimeout(() => {
        if(mountedRef.current){
          setImg(image)
        }
      },500)
    }
    return () => {
      // When the component unmounts 
        mountedRef.current = true;
    };
  }, [book.url])
  return ( 
    <div className="book">
      { img ? 
        (<>
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
      </>)
      : 
        (
        <>
        <div className="book__img--skeleton"></div>
        <div className="skeleton book__title--skeleton"></div>
        <div className="skeleton book__rating--skeleton"></div>
        <div className="skeleton book__price--skeleton"></div>
        </>
        )
    }
</div>
)
}

export default Book
