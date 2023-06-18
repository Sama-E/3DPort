import styled from "styled-components"

export const Sectional = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px){
    height: 200vh;
  }
`
