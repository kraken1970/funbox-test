import React from "react";
import TypicalBlock from "./components/TypicalBlock";
import { typeCatsFood } from "./data";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="App_container">
        <h1>Ты сегодня покормил кота?</h1>
        <div className="App_wrap-blocks">
          {typeCatsFood.map(item => {
            return (
              <TypicalBlock
                key={item.nameType}
                nameType={item.nameType}
                sumOfDose={item.sumOfDose}
                present={item.present}
                massa={item.massa}
                dopMessage={item.dopMessage}
                status={item.status}
                disabled={item.disabled}
                footerActiveText={item.footerActiveText}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
