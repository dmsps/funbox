import styled from "styled-components";

const Main = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
`;

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Bg = styled.img`
  position: absolute;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Title = styled.h1`
  width: 100%;
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-family: "Exo 2.0- Thin";
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 23px;
  margin-top: 36px;
`;

export { Main, Container, Wrapper, Bg, Title };
