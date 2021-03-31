import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import api from "./api";
import GoodsList from "./Goods/GoodsList";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { nanoid } from "nanoid";
import { createContext } from "react";

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0
    }
`;

export const Context = createContext();

function App({ dealers }) {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    if (goods.length) {
      store.saveData(goods);
    }
  }, [goods]);

  useEffect(() => {
    async function loadGoods() {
      const response = await api.get("/api/goods", {
        params: {
          dealers: dealers.join(","),
        },
      });

      const restoredGoods = store.retrieveData();
      setGoods(withIdAndCount(response.data, restoredGoods));
    }

    loadGoods();
  }, []);

  return (
    <Context.Provider value={{ goods, setGoods }}>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <GoodsList />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;

const store = {
  saveData: data => {
    localStorage.setItem("goods", JSON.stringify(data));
  },
  retrieveData: () => {
    return JSON.parse(localStorage.getItem("goods"));
  },
};

function withIdAndCount(loadedData, restoredData) {
  return loadedData.map(item => {
    const restoredItem = restoredData.find(
      x => x.name === item.name && x.price === item.price
    );
    const count = (restoredItem && restoredItem.count) || 0;

    return {
      ...item,
      id: nanoid(),
      count,
    };
  });
}
