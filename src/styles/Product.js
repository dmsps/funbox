import styled, { css } from "styled-components";

import { ReactComponent as ItemBgSrc } from "../img/product-bg.svg";
import { ReactComponent as ItemBgLineSrc } from "../img/product-bg-line.svg";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-right: 40px;
  width: 320px;
  max-width: 100%;
  flex-shrink: 0;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 22px;
  padding-left: 48px;
  padding-right: 48px;
  z-index: 3;
`;

const PreTitle = styled.div`
  width: 100%;
  color: #666666;
  font-family: "Trebuchet MS";
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const Title = styled.h2`
  width: 100%;
  color: #000000;
  font-family: "Trebuchet MS";
  font-size: 48px;
  font-weight: 700;
`;

const Type = styled.div`
  width: 100%;
  text-align: left;
  color: #000000;
  font-family: "Trebuchet MS";
  font-size: 24px;
  font-weight: 700;
`;

const Description = styled.div`
  width: 100%;
  color: #666666;
  font-family: "Trebuchet MS";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 13px;
`;

const DescriptionNumber = styled.span`
  font-weight: 700;
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  object-fit: contain;
  margin-top: auto;
  z-index: 1;
`;

const ItemBg = styled(ItemBgSrc)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ItemBgLine = styled(ItemBgLineSrc)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Weight = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 15px;
  right: 15px;
  width: 81px;
  height: 81px;
  border-radius: 50%;
  color: #ffffff;
  font-family: "Trebuchet MS";
  font-weight: 400;
  background-color: #1698d9;
  z-index: 2;
`;

const WeightNumber = styled.span`
  font-size: 42px;
  line-height: 38px;
`;

const WeightText = styled.span`
  font-size: 21px;
  margin-top: 8px;
  line-height: 10px;
`;

const BuyInfo = styled.div`
  width: 100%;
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-family: "Trebuchet MS";
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 13px;
  margin-bottom: 30px;
  text-align: center;
`;

const BuyButton = styled.span`
  color: #1698d9;
  font-family: "Trebuchet MS";
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #2ea8e6;
  }
`;

const BuyText = styled.div``;

const ItemStyles = css`
  position: relative;
  display: flex;
  width: 100%;
  height: 480px;
  background: transparent;
  cursor: pointer;
  user-select: none;

  &:hover {
    use.product-border {
      stroke: #2ea8e6;
    }

    ${Weight} {
      background-color: #2ea8e6;
    }
  }

  ${p =>
    p.selected &&
    css`
      use.product-border {
        stroke: #d91667;
      }

      ${Weight} {
        background-color: #d91667;
      }

      &:hover {
        use.product-border {
          stroke: #e62e7a;
        }

        ${Weight} {
          background-color: #e62e7a;
        }
      }
    `}

  ${p =>
    p.disabled &&
    css`
      use.product-border {
        stroke: #b3b3b3;
      }

      ${ItemWrapper}, ${Img} {
        opacity: 0.5;
      }

      ${PreTitle}, ${Title}, ${Type}, ${Description} {
        color: #b3b3b3;
      }

      ${Weight} {
        background-color: #b3b3b3;
      }

      & + ${BuyInfo} {
        color: #ffff66;
      }

      &:hover {
        use.product-border {
          stroke: #b3b3b3;
        }

        ${Weight} {
          background-color: #b3b3b3;
        }
      }
    `}
`;

export {
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
};
