import "./App.css";
import About from "./Module/About/About";
import Blog from "./Module/Blog/Blog";
import Contact from "./Module/Contact/Contact";
import Footer from "./Module/Footer/Footer";
import HeroArea from "./Module/Hero_Area/HeroArea";
import Intro from "./Module/Intro/Intro";
import Portfolio from "./Module/Portfolio/Portfolio";
import Service from "./Module/Serv/Service";
import Team from "./Module/Team/Team";
import Testimonial from "./Module/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeroArea />
        <Intro />
        <About />
        <Service />
        <Portfolio />
        <Team />
        <Testimonial />
        <Contact />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
