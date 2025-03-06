import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Talent from "./components/Talent/talent";
import Qualification from "./components/Qualification/qualification";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
     <Talent/>
     <Qualification/>
     <Projects/>
     <Contact/>
     <Footer/>
 
    </div>
  );
}

export default App;
