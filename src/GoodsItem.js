import React from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { apiUrl } from "./api";
import styled from "styled-components";
import {
  Button,
  Price,
  Title,
  Justified,
  mobileMediaQuery,
} from "./components/styled";

function GoodsItem({ item, addItem, removeItem }) {
  return (
    <Item>
      <Justified>
        <ItemLogo>
          <img src={apiUrl + item.image} alt="" />
          <Title>{item.name}</Title>
        </ItemLogo>
        <Justified>
          <Price>{item.price} $</Price>
          <div>
            <Button onClick={() => removeItem(item.id)}>
              <MinusOutlined />
            </Button>
            <Counter>{item.count}</Counter>
            <Button onClick={() => addItem(item.id)}>
              <PlusOutlined />
            </Button>
          </div>
        </Justified>
      </Justified>
    </Item>
  );
}

export default GoodsItem;

const Item = styled.li`
  box-shadow: 0 0 13px -2px #999;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;

  img {
    width: 50px;
    margin-right: 1rem;
  }

  ${mobileMediaQuery(`
    padding: 0.5rem;

    img {
      width: 30px;
      margin-right: 0.5rem;
    }
  `)}
`;

const ItemLogo = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Counter = styled.span`
  font-size: 1.5rem;
  width: 2rem;
  display: inline-block;
  text-align: center;

  ${mobileMediaQuery(`
    font-size: 1.2rem;
    width: 1.5rem;
  `)}
`;
