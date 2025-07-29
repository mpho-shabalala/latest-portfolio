
import Header from "../assets/components/shared/header";
import Footer from "../assets/components/shared/footer";
import Hero from "../assets/components/unique/hero";
import Container from "../assets/components/shared/container";
import About from "../assets/components/unique/aboutMeHome";
import WhatIDo from "../assets/components/unique/whatIDo";
import Projects from "../assets/components/shared/projects";

export default function Homepage() {
  return (
    <>
      <Header />
      <Container>
        <Hero/>
        <WhatIDo/>
        <About/>
        <Projects/>
        <Footer/>
      </Container>
     
    
    </>
  );
}
