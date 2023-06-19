import React from 'react';
import { Sectional } from '../components/sectional';
import Navbar from '../components/navbar';
import styled from 'styled-components';
import EarthCanvas from './../components/canvas/Earth';

const Container = styled.div`
  height: 100%;
  scroll-snap-align:center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    align-item: center;
    justify-content: center;
  }
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 2;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: gray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const EarthContain = styled.div`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Sectional>
      <Container>
        <Left>
          <Title>
          Solve. Build. Implement.
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>
              Together we forge solutions
            </Subtitle>
          </WhatWeDo>
          <Desc>
            In our world, there are more problems than solutions.
            Just keep calm and let's solve them by building and implementing our solutions.
            Let's fix it together.
          </Desc>
            <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3D model */}
          <EarthContain>
            <EarthCanvas />
          </EarthContain>
        </Right>
      </Container>
    </Sectional>
  )
}

export default Hero;