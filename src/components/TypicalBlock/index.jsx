import React, { useState } from "react";
import MassType from "../MassType";
import {
  defaultStyle,
  disableStyle,
  activeStyle,
  prevH3,
  hoverH3
} from "./constans";
import "./TypicalBlock.css";

const TypicalBlock = ({
  nameType,
  sumOfDose,
  present,
  massa,
  dopMessage,
  disabled,
  actived,
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
  if (actived || activeBox) {
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
