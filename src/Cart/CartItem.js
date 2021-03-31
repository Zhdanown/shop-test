import { CloseOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Button,
  Justified,
  mobileMediaQuery,
  Price,
  Title,
} from "../components/styled";

function CartItem({ item, onCountChange, deleteItemFromCart }) {
  return (
    <Item as="li">
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
    </Item>
  );
}

export default CartItem;

const Item = styled(Justified)`
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

  ${mobileMediaQuery(`
    padding: 0;
    font-size: 1rem;
  `)}
`;
