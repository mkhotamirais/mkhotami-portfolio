import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import AboutContact from "./sections/AboutContact";
import AboutMe from "./sections/AboutMe";
import NavBottom from "./components/NavBottom";
import NavTop from "./components/NavTop";
// import TopRight from "./components/TopRight";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen *:font-montserrat">
      {/* <TopRight /> */}
      <NavTop />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <AboutContact />
      <Footer />
      <NavBottom />
    </div>
  );
}
