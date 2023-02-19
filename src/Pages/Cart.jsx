import React from "react";

const Cart = () => {
    return(
        <div id="books__body">
            <div className="book__main">
                <div className="book__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">
                            Cart
                            </h2>
                        </div>
                            <div className="cart">
                                <div className="cart__header">
                                    <span className="cart__book">
                                    Book
                                    </span>
                                    <span className="cart__quantity">
                                    Quantity
                                    </span>
                                    <span className="cart__total">
                                    Price
                                    </span>
                                </div>
                                <div className="cart__body">
                                    <div className="cart__item">
                                        <div className="cart__book">
                                            <img 
                                            src="" 
                                            alt="" 
                                            className="cart__book--img"/>
                                        <div className="cart__book--info">
                                            <div className="cart__book--title">
                                                adsfkdsajfkl
                                            </div>
                                            <div className="cart__book--price">
                                                dsadf
                                            </div>
                                            <button className="cart__book--remove">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart__quantity">
                                        <input type="number" min={0} max={99} className="cart__input"/>
                                    </div>
                                    <div className="cart__total">
                                        $100
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="total">
                            <div className="total__item total__sub--total">
                                <span>Subtotal</span>
                                <span>$9.00</span>
                            </div>
                            <div className="total__item total__tax">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart