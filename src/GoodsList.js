import React from "react";
import styled from "styled-components";

import { apiUrl } from "./api";

const Item = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    width: 50px;
  }
`;

function GoodsList({ goods }) {
  return goods.map((item, i) => (
    <Item key={i}>
      <h4>{item.name}</h4>
      <img src={apiUrl + item.image} alt="" />
      <p>{item.price} $</p>
    </Item>
  ));
}

export default GoodsList;
