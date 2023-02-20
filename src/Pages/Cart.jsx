import React, { useState } from "react";
import Price from "../component/ul/Price";

const Cart = ({cart, changeQuantity}) => {
   return(
<div id="books__body">
  <div className="book__main">
    <div className="book__container">
      <div className="row">
        <div className="book__selected--top">
          <h2 className="cart__title">Cart</h2>
        </div>
        <div className="cart">
          <div className="cart__header">
            <span className="cart__book"> Book </span>
            <span className="cart__quantity"> Quantity </span>
            <span className="cart__total"> Price </span>
          </div>
          <div className="cart__body">
            { cart.map((book) => { return(
            <div className="cart__item">
              <div className="cart__book">
                <img src={book.url} alt="" className="cart__book--img" />
                <div className="cart__book--info">
                  <div className="cart__book--title">{book.title}</div>
                  <div className="cart__book--price">
                  ${(book.originalPrice || book.salePrice).toFixed(2)}
                  </div>
                  <button className="cart__book--remove">Remove</button>
                </div>
              </div>
              <div className="cart__quantity">
                <input
                  type="number"
                  min="{0}"
                  max="{99}"
                  value={book.quantity}
                  className="cart__input"
                  onChange={(event) => changeQuantity(book, event.target.value)}
                />
              </div>
              <div className="cart__total">
              ${((book.originalPrice || book.salePrice)*book.quantity).toFixed(2)}
              </div>
            </div>
            )})}
          </div>
        </div>
        <div className="total">
          <div className="total__item total__sub--total">
            <span>Subtotal</span>
            <span>$9.00</span>
          </div>
          <div className="total__item total__tax">
            <span>Tax</span>
            <span>Tax</span>
          </div>
          <div className="total__item total__price">
            <span>Total</span>
            <span>1004</span>
          </div>
          <button
            className="btn btn__checkout no-cursor"
            >
            Proceed
            to
            checkout
            </button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Cart