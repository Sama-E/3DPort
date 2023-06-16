
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
    &::-webkit-scrollbar{
      display: none;
    }
`;

function App() {

  return (
      <Container>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>

  )
}

export default App;
