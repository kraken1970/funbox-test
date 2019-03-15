import React from "react";
import TypicalBlock from "../TypicalBlock";
import "./WrapTypicalBlocks.css";

const WrapTypicalBlocks = ({ dataFoods, handleChangeStatus }) => {
  const elements = dataFoods.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <TypicalBlock
          {...itemProps}
          handleChangeStatus={() => handleChangeStatus(id)}
        />
      </li>
    );
  });
  return <ul className="App_wrap-blocks">{elements}</ul>;
};

export default WrapTypicalBlocks;
