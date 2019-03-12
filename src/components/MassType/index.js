import React from "react";
import "./massType.css";

const MassType = ({ sumOfDose, present, dopMessage, massa }) => {
  return (
    <div className="mass-type">
      <p>{sumOfDose} порций</p>
      <p>{present}</p>
      <p>{dopMessage}</p>
      <div className="mass-block">
        <p className="massa">{massa}</p>
        <p>кг</p>
      </div>
    </div>
  );
};

export default MassType;
