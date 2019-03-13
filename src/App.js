import React from "react";
import { useFetch } from "./hooks";
import TypicalBlock from "./components/TypicalBlock";

import "./App.css";

const App = () => {
  const [dataFoods, loading] = useFetch("/catsFood.json");

  return (
    <div className="App">
      <div className="App_container">
        <h1>Ты сегодня покормил кота?</h1>
        <div className="App_wrap-blocks">
          {loading ? (
            <p className="App_loading">"Загрузка..."</p>
          ) : (
            dataFoods.map(item => {
              const { ...itemProps } = item;
              return (
                <TypicalBlock
                  // key={item.nameType}
                  // nameType={item.nameType}
                  // sumOfDose={item.sumOfDose}
                  // present={item.present}
                  // massa={item.massa}
                  // dopMessage={item.dopMessage}
                  // status={item.status}
                  // disabled={item.disabled}
                  // footerActiveText={item.footerActiveText}
                  {...itemProps}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
