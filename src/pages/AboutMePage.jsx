// src/pages/AboutMePage.jsx
import Header from "../assets/components/shared/header";
import About from "../assets/components/unique/aboutMe";
import Container from "../assets/components/shared/container";
import WhatIDo from "../assets/components/unique/whatIDo";
import Contacts from "../assets/components/shared/contacts";
import Footer from "../assets/components/shared/footer";
import LearningJourney from "../assets/components/unique/learningJourney";
import TechStack from "../assets/components/unique/techStack";

export default function AboutMePage() {
  return (
    <>
    
      <Header />
      <Container>
        <About/>
        <WhatIDo/>
        <LearningJourney/>
        <TechStack/>
        <Contacts/>
      </Container>
      <Footer/>
    </>
  );
}
