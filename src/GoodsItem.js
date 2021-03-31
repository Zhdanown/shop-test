import React from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { apiUrl } from "./api";
import styled from "styled-components";
import { Button, Price, Title, Justified } from "./components/styled";

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
  }
`;

const ItemLogo = styled.div`
  display: inline-flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }
`;

const Counter = styled.span`
  font-size: 1.5rem;
  width: 2rem;
  display: inline-block;
  text-align: center;
`;
