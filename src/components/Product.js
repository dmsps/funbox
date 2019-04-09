import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  ItemStyles,
  ItemContainer,
  ItemWrapper,
  PreTitle,
  Title,
  Type,
  Description,
  DescriptionNumber,
  Img,
  Weight,
  WeightNumber,
  WeightText,
  BuyInfo,
  BuyButton,
  BuyText,
  ItemBg,
  ItemBgLine
} from "../styles/Product";
import PhotoSrc from "../img/product.png";

const Item = styled.div`
  ${ItemStyles};
`;

export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected ? true : false,
      disabled: this.props.disabled
    };
  }

  handleChange = () => {
    !this.state.disabled &&
      this.setState({
        selected: !this.state.selected
      });
  };

  render() {
    const {
      name,
      type,
      portions,
      gift,
      weight,
      selectedText
    } = this.props.item;
    const { selected, disabled } = this.state;

    const disabledText = `Печалька, ${type} закончился.`;

    return (
      <ItemContainer>
        <Item
          selected={selected}
          disabled={disabled}
          onClick={() => this.handleChange()}
        >
          <ItemWrapper>
            <PreTitle>Сказочное заморское яство</PreTitle>
            <Title>{name}</Title>
            <Type>{type}</Type>
            <Description>
              <DescriptionNumber>{portions}</DescriptionNumber> порций
              <br />
              <DescriptionNumber>{gift > 1 && gift}</DescriptionNumber>{" "}
              {gift === 1 && "мышь"}
              {gift === 2 && "мыши"}
              {gift === 5 && "мышей"} в подарок
            </Description>
          </ItemWrapper>
          <ItemBg />
          <Img src={PhotoSrc} alt={`${name} ${type}`} />
          <Weight>
            <WeightNumber>{weight}</WeightNumber>
            <WeightText>кг</WeightText>
          </Weight>
          <ItemBgLine />
        </Item>
        <BuyInfo>
          {disabled ? (
            disabledText
          ) : selected ? (
            selectedText
          ) : (
            <BuyText>
              Чего сидишь? Порадуй котэ,{" "}
              {<BuyButton onClick={() => this.handleChange()}>купи</BuyButton>}.
            </BuyText>
          )}
        </BuyInfo>
      </ItemContainer>
    );
  }
}

Product.propTypes = {
  item: PropTypes.object
};

export default Product;
