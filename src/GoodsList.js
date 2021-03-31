import React from "react";
import styled from "styled-components";
import produce from "immer";

import GoodsItem from "./GoodsItem";

function GoodsList({ goods, setGoods }) {
  const addItem = itemId => {
    setGoods(
      produce(draft => {
        const index = draft.findIndex(x => x.id === itemId);
        if (index !== -1) draft[index].count += 1;
      })
    );
  };

  const removeItem = itemId => {
    setGoods(
      produce(draft => {
        const index = draft.findIndex(x => x.id === itemId);
        if (index !== -1) {
          if (draft[index].count > 0) draft[index].count -= 1;
        }
      })
    );
  };

  return (
    <ListWrapper>
      {goods.map(item => (
        <GoodsItem
          key={item.id}
          item={item}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
    </ListWrapper>
  );
}

export default GoodsList;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 0;
`;
