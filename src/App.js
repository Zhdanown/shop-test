import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import api from "./api";
import GoodsList from "./GoodsList";
import Navbar from "./Navbar";
import { nanoid } from "nanoid";

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0
    }
`;

function App({ dealers }) {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    async function loadGoods() {
      const response = await api.get("/api/goods", {
        params: {
          dealers: dealers.join(","),
        },
      });

      setGoods(withIdAndCount(response.data));
    }

    loadGoods();
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/cart">
          <p>Cart</p>
        </Route>
        <Route exact path="/">
          <GoodsList goods={goods} setGoods={setGoods}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function withIdAndCount(data) {
  return data.map(item => ({
    ...item,
    id: nanoid(),
    count: 0
  }));
}
