import { Sectional } from '../components/sectional';
import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from '../components/ProjectCard';
// import Development from "./Development";
// import ProductDesign from "./ProductDesign";
// import WebDesign from "./WebDesign";

const data = [
  "Web Design",
  "Full Stack",
  "Blockchain",
];

const WorkSection = styled.div`
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 50px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px gray;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: gray;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #D1DFEC;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  items-align: center;
  padding-top: 10px;
`;

const Works = () => {
  return (
    <Sectional>
      <WorkSection>
        <Container>
          <Left>
            <List>
              {data.map((item) => (
                <ListItem key={item} text={item} onClick={() => setWork(item)}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Left>
          <Right>
            {/* {work === "Web Design" ? (
              <WebDesign />
            ) : work === "Development" ? (
              <Development />
            ) : (
              <ProductDesign />
            )} */}
            <ProjectCard />
          </Right>
        </Container>
      </WorkSection>
    </Sectional>
  )
}

export default Works;