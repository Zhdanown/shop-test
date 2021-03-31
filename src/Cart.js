import { CloseOutlined } from "@ant-design/icons";
import produce from "immer";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Cart({ goods, setGoods }) {
  const selectedGoods = goods.filter(item => item.count);

  return (
    <div>
      <SelectedGoods goods={selectedGoods} setGoods={setGoods} />
    </div>
  );
}

export default Cart;
function SelectedGoods({ goods, setGoods }) {
  const onCountChange = (itemId, count) => {
    setGoods(
      produce(draft => {
        const index = draft.findIndex(x => x.id === itemId);
        if (index !== -1) draft[index].count = count;
      })
    );
  };

  const clearCart = () => {
    setGoods(
      produce(draft => {
        draft.forEach(item => {
          item.count = 0;
        });
      })
    );
  };

  const deleteItemFromCart = itemId => {
    setGoods(
      produce(draft => {
        const index = draft.findIndex(x => x.id === itemId);
        if (index !== -1) draft[index].count = 0;
      })
    );
  };

  const totalSum = goods.reduce(
    (sum, item) => (sum += item.price * item.count),
    0
  );

  return (
    <>
      {goods.length ? (
        <div style={{ textAlign: "right" }}>
          <button onClick={clearCart}>
            Удалить всё <CloseOutlined />
          </button>
        </div>
      ) : null}
      <ul>
        {goods.map(item => (
          <CartItem key={item.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <span>{item.name}</span>
              <span>{item.price} $</span>
            </div>
            <div>
              <NumberInput
                value={item.count}
                onChange={count => onCountChange(item.id, count)}
              />
              <button onClick={() => deleteItemFromCart(item.id)}>
                Удалить <CloseOutlined />
              </button>
            </div>
          </CartItem>
        ))}
      </ul>

      {totalSum ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Итого:</span>
          <span>{totalSum.toFixed(2)} $</span>
        </div>
      ) : null}
    </>
  );
}

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

function NumberInput({ value, onChange }) {
  const [count, setValue] = useState(value);

  useEffect(() => {
    onChange(count);
  }, [count]);

  return (
    <input
      type="number"
      value={count}
      step="1"
      onChange={({ target }) => setValue(target.value)}
    />
  );
}
