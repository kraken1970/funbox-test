import React from "react";
import { useFetch } from "./hooks";
import WrapTypicalBlocks from "./components/WrapTypicalBlocks";

import "./App.css";

const App = () => {
  const [dataFoods, loading] = useFetch("/catsFood.json");

  const onChangeActive = id => {
    console.log("actived id", id);
    const idx = dataFoods.find(el => el.id === id);
    console.log("idx", idx.actived);
    idx.actived = !idx.actived;
    console.log("newidx", idx.actived);
  };

  return (
    <div className="App">
      <div className="App_container">
        <h1>Ты сегодня покормил кота?</h1>

        {loading ? (
          <p className="App_loading">"Загрузка..."</p>
        ) : (
          <WrapTypicalBlocks
            dataFoods={dataFoods}
            handleChangeStatus={onChangeActive}
          />
        )}
      </div>
    </div>
  );
};

export default App;
