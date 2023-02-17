import React from "react";
import { Link } from "react-router-dom";


const BookInfo=({books}) => {
return(
<div if="#books__body">
    <main id="books__main">
    <div className="books__container">
        <div className="row">
            <div className="book__selected--top">
                <Link to='/books' className="" />
            </div>
        </div>
    </div>
    </main>
</div>
)
}


export default BookInfo
