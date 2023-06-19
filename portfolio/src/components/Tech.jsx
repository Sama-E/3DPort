import React from 'react';
import { technologies } from '../data/index';
import styled from 'styled-components';
import BallCanvas from '../components/canvas/Ball';


const Teck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding: 180px;
`;

const TeckMap = styled.div`
  width: 90px;
  height: 90px;
`



const Tech = () => {
  return (
        <Teck>
          {technologies.map((technology) =>(
            <TeckMap key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </TeckMap>
          ))}
        </Teck>
  )
}

export default Tech;