import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import api from "./api";
import GoodsList from "./GoodsList";
import Navbar from "./Navbar";

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
      setGoods(response.data);
    }

    loadGoods();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <GoodsList goods={goods} />
    </>
  );
}

export default App;
