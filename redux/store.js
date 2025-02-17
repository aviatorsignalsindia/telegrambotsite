// redux/store.js
import { createStore } from "redux";

// Начальное состояние
const initialState = {
  products: [
    {
      id: 1,
      name: "Продукт 1",
      description: "Описание продукта 1",
      price: 100,
    },
    {
      id: 2,
      name: "Продукт 2",
      description: "Описание продукта 2",
      price: 200,
    },
  ],
};

// Редуктор
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Создание хранилища
const store = createStore(reducer);

export default store;
