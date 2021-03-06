import { CloseOutlined } from "@ant-design/icons";
import produce from "immer";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../App";
import {
  Button,
  Centered,
  Container,
  Title,
  Justified,
  ListWrapper,
  mobileMediaQuery,
} from "../components/styled";
import CartItem from "./CartItem";

function CartContainer() {
  const { goods, setGoods } = useContext(Context);

  const selectedGoods = goods.filter(item => item.count);

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
    <Cart
      selectedGoods={selectedGoods}
      clearCart={clearCart}
      onCountChange={onCountChange}
      deleteItemFromCart={deleteItemFromCart}
      totalSum={totalSum}
    />
  );
}

export default CartContainer;

function Cart({
  selectedGoods,
  clearCart,
  onCountChange,
  deleteItemFromCart,
  totalSum,
}) {
  if (!selectedGoods.length)
    return (
      <Centered direction="column" style={{ padding: "3rem 0" }}>
        <Title>Корзина пуста</Title>
        <Link to="/">С списку товаров</Link>
      </Centered>
    );

  return (
    <Container style={{ marginTop: "1rem" }}>
      {selectedGoods.length ? (
        <div style={{ textAlign: "right" }}>
          <Button danger onClick={clearCart}>
            Удалить всё <CloseOutlined />
          </Button>
        </div>
      ) : null}
      <ListWrapper>
        {selectedGoods.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onCountChange={onCountChange}
            deleteItemFromCart={deleteItemFromCart}
          />
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

const Total = styled(Justified)`
  font-size: 1.4rem;
  font-weight: bold;

  ${mobileMediaQuery(`font-size: 1.2rem;`)}
`;
