import React from "react";

export const defaultStyle = "wrapper_cart";
export const disableStyle = "wrapper_cart disableBox";
export const activeStyle = "wrapper_cart activeBox";
export const prevH3 = "Сказочное заморское яство";
export const hoverH3 = () => {
  return <p className="hover-kote">Котэ не одобряет?</p>;
};

export const FooterText = (disabled, activeBox, nameType, footerActiveText) => {
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
