import React from "react";
// import styled from "styled-components";

import Catalog from "./components/Catalog";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Main, Container, Wrapper, Title, Bg } from "./styles/App";

import BgSrc from "./img/bg.png";

class App extends React.Component {
  render() {
    return (
      <>
        <Main>
          <Container>
            <Wrapper>
              <Title>Ты сегодня покормил кота?</Title>
              <Catalog />
            </Wrapper>
          </Container>
          <Bg src={BgSrc} />
        </Main>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
