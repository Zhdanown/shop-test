import React, { useEffect, useState } from "react";
import api from "./api";
import GoodsList from "./GoodsList";

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
      <GoodsList goods={goods} />
    </>
  );
}

export default App;
