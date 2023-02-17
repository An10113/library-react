import React, { useState } from "react";
import Book from '../component/ul/Book'

const Books = ({books:initialBooks}) => {
    const [books, setBooks] = useState(initialBooks)
     function filterBooks(filter){
        console.log(filter)
        if(filter === 'LOW_TO_HIGH'){
            setBooks(
                books.slice().sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
            )}
            if(filter === 'HIGH_TO_LOW'){
                setBooks(
                    books.slice().sort((a,b) => (b.salePrice || b.originalPrice)- (a.salePrice || a.originalPrice))
                )}
            if(filter === 'RATING'){
                setBooks(
                    books.slice().sort((a,b) => (b.rating)- (a.rating))
                )}
     }
    return(
        <div id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title">All books</h2>
                                <select name="" id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="HIGH_TO_LOW">Price, High to low</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="RATING">Ratings</option>
                                </select>
                            </div>
                            <div className="books">
                            {books.map(book => (
                            <Book book={book} key={book.id} />))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Books