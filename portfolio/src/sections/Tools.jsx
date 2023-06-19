import { Sectional } from '../components/sectional';
import styled from 'styled-components';
import React, { Suspense } from "react";
import Tech from '../components/Tech';


const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 768px){
    width: 100%;
    align-item: center;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 80px;
  }
`;

const Left = styled.div`
  flex: 2;
`;

const MyTools = styled.h2`
  display: none;

@media only screen and (max-width: 768px){
  display: flex;
  flex-direction: column;
  font-size: 22px;
  align-items: center;
  color: #da4ea2;
`

const Title = styled.h1`
  font-size: 64px;

  @media only screen and (max-width: 768px) {
    font-size: 55px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    align-item: center;
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
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Tools = () => {
  return (
    <Sectional>
      <Container>
        <Left>
          <MyTools>
            My Tools:
          </MyTools>
          <Tech />
        </Left>
        <Right>
          <Title> Learn. Live. Grow.</Title>      
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Tools I like to use</Subtitle>
          </WhatWeDo>
          <Desc>
            I am student of life and for life. 
            I enjoy creating delightful, human-centered ditigal experiences
            with my tools to create solutions.
          </Desc>
          <Button>See my works</Button>
        </Right>
      </Container>
    </Sectional>
  )
}

export default Tools;