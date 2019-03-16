import React, { Component } from "react";
import CartList from "./components/CartList";

import "./App.css";

const API = "/catsFood.json";

export default class App extends Component {
  state = {
    dataFoods: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Что-то здесь не так ...");
        }
      })
      .then(dataFoods => this.setState({ dataFoods, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  onChangeActive = id => {
    this.setState(({ dataFoods }) => {
      const idx = this.state.dataFoods.findIndex(el => el.id === id);
      const newArray = [...dataFoods];
      newArray[idx].actived = !newArray[idx].actived;
      return { dataFoods: newArray };
    });
  };

  render() {
    const { dataFoods, loading, error } = this.state;
    if (error) {
      return (
        <p className="App_loading">
          {error.message} <br /> Всё сломалось. Скоро починим!
        </p>
      );
    }
    return (
      <div className="App">
        <div className="App_container">
          <h1>Ты сегодня покормил кота?</h1>

          {loading ? (
            <p className="App_loading">"Загрузка..."</p>
          ) : (
            <CartList
              dataFoods={dataFoods}
              handleChangeStatus={this.onChangeActive}
            />
          )}
        </div>
      </div>
    );
  }
}
