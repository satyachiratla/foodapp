import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const ctxCart = useContext(CartContext);

  const totalAmount = `₹${ctxCart.totalAmount.toFixed(2)}`;

  const hasItems = ctxCart.items.length > 0;

  const cartItemAddHanlder = (item) => {
    ctxCart.addItem({ ...item, amount: 1})
  };

  const cartItemRemoveHandler = (id) => {
    ctxCart.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctxCart.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHanlder.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount </span>
        <span> {totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          {" "}
          Close{" "}
        </button>
        {hasItems && <button className={classes.button}> Order </button>}
      </div>
    </Modal>
  );
};

export default Cart;
