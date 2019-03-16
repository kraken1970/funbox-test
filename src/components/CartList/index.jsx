import React from "react";
import Cart from "../Cart";
import "./CartList.css";

const CartList = ({ dataFoods, handleChangeStatus }) => {
  const elements = dataFoods.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <Cart
          {...itemProps}
          handleChangeStatus={() => handleChangeStatus(id)}
        />
      </li>
    );
  });
  return <ul className="App_wrap-blocks">{elements}</ul>;
};

export default CartList;
