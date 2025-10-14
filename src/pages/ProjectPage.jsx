import Header from "../assets/components/shared/header";
import Footer from "../assets/components/shared/footer";
import Container from "../assets/components/shared/container";
import Projects from "../assets/components/shared/projects";

export default function Projectpage() {
  return (
    <>
      <Header />
      <Container>
        <div className="pt-6">
          <Projects/>
        </div>
      </Container>
        <Footer/>
     
    
    </>
  );
}
