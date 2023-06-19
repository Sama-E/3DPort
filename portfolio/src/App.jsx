import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Tools from "./sections/Tools";
import Works from "./sections/Works";

import styled from "styled-components";



const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: gray;
  background: url("./img/bgmountain.jpg");
    &::-webkit-scrollbar{
      display: none;
    }
`;

function App() {

  return (
    <div>
      <Navbar />
      <Container>
        <Hero />
        <Tools />
        <Works />
        <Contact />
      </Container>
    </div>
  )
}

export default App;
