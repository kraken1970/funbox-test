import React, { useState } from "react";
import MassType from "../MassType";
import "./TypicalBlock.css";

const defaultStyle = "wrapper_typicalBlock";
const disableStyle = "wrapper_typicalBlock disableBox";
const activeStyle = "wrapper_typicalBlock activeBox";
const prevH3 = "Сказочное заморское яство";
const hoverH3 = () => {
  return <p className="hover-kote">Котэ не одобряет?</p>;
};

const TypicalBlock = ({
  nameType,
  sumOfDose,
  present,
  massa,
  dopMessage,
  status,
  disabled,
  actived,
  hovered,
  footerActiveText
}) => {
  const [activeBox, setStyle] = useState(actived);

  const [contentH3, setContentH3] = useState(prevH3);

  function handleChangeStatus() {
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
  if (disabled) {
    classNames = disableStyle;
  }
  if (actived) {
    classNames = activeStyle;
  }

  if (activeBox) {
    classNames = activeStyle;
  }

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
      className={classNames}
      onClick={handleChangeStatus}
      onMouseLeave={handleChangeH3}
      onMouseOver={handleRechangeH3}
    >
      <div className="typicalBlock">
        <h3 className="typicalBlock_h3">{contentH3}</h3>
        <h2 className="typicalBlock_h2">Нямушка</h2>
        <p className="typicalBlock_name-type">{nameType}</p>
        <MassType
          sumOfDose={sumOfDose}
          present={present}
          dopMessage={dopMessage}
          massa={massa}
        />
        <div className="typicalBlock_text_status">
          <FooterText />
        </div>
      </div>
      <div className="typicalBlock-overlay" />
    </div>
  );
};

export default TypicalBlock;
