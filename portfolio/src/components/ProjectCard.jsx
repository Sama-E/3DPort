import React from 'react'
import {Tilt} from "react-tilt";
import styled from 'styled-components';
import Moon from "/img/moon.png";


const defaultTiltOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            45,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          500,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const CardBorder = styled.div`
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);;
  padding: 2px;
  border: none;
  border-radius: 1%;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 20px;
  background-color: gray;
  border: none;
  border-radius: 1%;

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 280px;
  }
`;

const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  filter: drop-shadow(0 0 0.75rem crimson);
`

const ProjectCard = () => {
  return (
    <Tilt options={defaultTiltOptions}>
      <CardBorder>
        <Card>
          <Image src={Moon} />
        </Card>
      </CardBorder>
    </Tilt>
  )
}

export default ProjectCard;