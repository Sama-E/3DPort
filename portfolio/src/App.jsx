import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Tools from "./sections/Tools";

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
        {/* <Projects /> */}
        {/* <Contact /> */}
      </Container>
    </div>
  )
}

export default App;
