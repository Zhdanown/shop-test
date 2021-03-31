import { CloseOutlined } from "@ant-design/icons";
import produce from "immer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  Centered,
  Container,
  Title,
  Justified,
  ListWrapper,
  Price,
} from "./components/styled";

function Cart({ goods, setGoods }) {
  const selectedGoods = goods.filter(item => item.count);

  return <SelectedGoods goods={selectedGoods} setGoods={setGoods} />;
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

  if (!goods.length)
    return (
      <Centered direction="column" style={{ padding: "3rem 0" }}>
        <Title>Корзина пуста</Title>
        <Link to="/">С списку товаров</Link>
      </Centered>
    );

  return (
    <Container style={{ marginTop: "1rem" }}>
      {goods.length ? (
        <div style={{ textAlign: "right" }}>
          <Button danger onClick={clearCart}>
            Удалить всё <CloseOutlined />
          </Button>
        </div>
      ) : null}
      <ListWrapper>
        {goods.map(item => (
          <CartItem as="li" key={item.id}>
            <Justified style={{ flex: 1 }}>
              <Title>{item.name}</Title>
              <Price>{item.price} $</Price>
            </Justified>
            <div>
              <NumberInput
                value={item.count}
                onChange={count => onCountChange(item.id, count)}
              />
              <Button danger onClick={() => deleteItemFromCart(item.id)}>
                <CloseOutlined />
              </Button>
            </div>
          </CartItem>
        ))}
      </ListWrapper>

      {totalSum ? (
        <Total>
          <span>Итого:</span>
          <span>{totalSum.toFixed(2)} $</span>
        </Total>
      ) : null}
    </Container>
  );
}

const CartItem = styled(Justified)`
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.4s;

  &:hover {
    background: rgba(134, 134, 134, 0.2);
  }
`;

function NumberInput({ value, onChange }) {
  const [count, setValue] = useState(value);

  useEffect(() => {
    onChange(Number(count));
  }, [count]);

  return (
    <StyledInput
      type="number"
      value={count}
      step="1"
      onChange={({ target }) => setValue(target.value)}
    />
  );
}

const StyledInput = styled.input`
  width: 4rem;
  padding: 0.25rem;
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const Total = styled(Justified)`
  font-size: 1.4rem;
  font-weight: bold;
`;
