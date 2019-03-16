import React, { useState } from "react";
import MassType from "../MassType";
import {
  defaultStyle,
  disableStyle,
  activeStyle,
  prevH3,
  hoverH3
} from "./constans";
import "./Cart.css";

const Cart = ({
  nameType,
  sumOfDose,
  present,
  massa,
  dopMessage,
  disabled,
  actived,
  footerActiveText,
  handleChangeStatus
}) => {
  const [activeBox, setStyle] = useState(actived);
  const [contentH3, setContentH3] = useState(prevH3);

  function handleChangeStyle() {
    let newStatus;
    if (classNames !== "disableBox") {
      classNames === defaultStyle ? (newStatus = true) : (newStatus = false);
    }
    setStyle(newStatus);
  }

  function handleChangeH3() {
    if (activeBox) {
      setContentH3(hoverH3);
    }
  }

  function handleRechangeH3() {
    if (activeBox) {
      setContentH3(prevH3);
    }
  }

  let classNames = defaultStyle;

  const FooterText = () => {
    return disabled ? (
      <p className="footerText-disabled">Печалька, {nameType} закончился</p>
    ) : activeBox ? (
      <p>{footerActiveText}</p>
    ) : (
      <p>
        Чего сидишь? Порадуй котэ, <span>купи.</span>
      </p>
    );
  };
  return (
    <div
      className={
        disabled
          ? (classNames = disableStyle)
          : actived
          ? (classNames = activeStyle)
          : (classNames = defaultStyle)
      }
      onClick={handleChangeStyle}
      onMouseLeave={handleChangeH3}
      onMouseOver={handleRechangeH3}
    >
      <div className="cart" onClick={handleChangeStatus}>
        <h3 className="cart_h3">{contentH3}</h3>
        <h2 className="cart_h2">Нямушка</h2>
        <p className="cart_name-type">{nameType}</p>
        <MassType
          sumOfDose={sumOfDose}
          present={present}
          dopMessage={dopMessage}
          massa={massa}
        />
        <div className="cart_text_status">
          <FooterText />
        </div>
      </div>
      <div className="cart-overlay" />
    </div>
  );
};

export default Cart;
