import React from 'react'
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: center;
  background: url("./img/bgmountain.jpg");
    &::-webkit-scrollbar{
      display: none;
    }

  @media only screen and (max-width: 768px){
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: #ACACAC;
  opacity: 0.65;

  @media only screen and (max-width: 768px){
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
  align-items: center;
  list-style: none;

  @media only screen and (max-width: 768px){
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;


const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Links>
          <Logo src ="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Nav>
  )
}

export default Navbar;