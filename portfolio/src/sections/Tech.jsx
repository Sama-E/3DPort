import React from 'react';
import { technologies } from '../data/index';
import { Sectional } from './../components/sectional';
import styled from 'styled-components';
import BallCanvas from '../components/canvas/Ball';


const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Teck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
`;

const TeckMap = styled.div`
  width: 60px;
  height: 60px;
`



const Tech = () => {
  return (

      <Container>
        <Teck>
          {technologies.map((technology) =>(
            <TeckMap key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </TeckMap>
          ))}
        </Teck>
      </Container>

  )
}

export default Tech;