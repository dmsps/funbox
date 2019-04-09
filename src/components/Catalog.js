import React from "react";
import PropTypes from "prop-types";

import Product from "./Product";

import { Wrapper } from "../styles/Catalog";

const product1 = {
  name: "Нямушка",
  type: "с фуа-гра",
  portions: 10,
  gift: 1,
  weight: "0,5",
  selectedText: "Печень утки разварная с артишоками."
};

const product2 = {
  name: "Нямушка",
  type: "с рыбой",
  portions: 40,
  gift: 2,
  weight: "2",
  selectedText: "Головы щучьи с чесноком да свежайшая сёмгушка."
};

const product3 = {
  name: "Нямушка",
  type: "с курой",
  portions: 100,
  gift: 5,
  weight: "5",
  selectedText: "Филе из цыплят с трюфелями в бульоне."
};

const Catalog = () => {
  return (
    <Wrapper>
      <Product item={product1} />
      <Product item={product2} selected />
      <Product item={product3} disabled />
    </Wrapper>
  );
};

Catalog.propTypes = {
  item: PropTypes.object
};

export default Catalog;
