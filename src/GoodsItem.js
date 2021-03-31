import React from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { apiUrl } from "./api";
import styled from "styled-components";

function GoodsItem({ item, addItem, removeItem }) {
  return (
    <Item>
      <ItemLogo>
        <img src={apiUrl + item.image} alt="" />
        <ItemTitle>{item.name}</ItemTitle>
      </ItemLogo>
      <div style={{ display: "flex", alignItems: "center" }}>
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
      </div>
    </Item>
  );
}

export default GoodsItem;

const Item = styled.li`
  box-shadow: 0 0 13px -2px #999;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
  }
`;

const ItemLogo = styled.div`
  display: inline-flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }
`;

const ItemTitle = styled.h3`
  margin: 0;
`;

const Price = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const Button = styled.button`
  background: #666;
  border: none;
  padding: 0.25rem 0.3rem;
  border-radius: 0.25rem;
  color: white;
  font-size: 1.4rem;
  transition: background 0.4s;

  &:hover {
    cursor: pointer;
    background: steelblue;
  }
`;

const Counter = styled.span`
  font-size: 1.5rem;
  width: 2rem;
  display: inline-block;
  text-align: center;
`;
