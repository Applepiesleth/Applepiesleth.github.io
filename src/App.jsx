import Splash from "./components/splash/Splash";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import Gallery from "./components/gallery/Gallery";
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Splash/>
        <Intro/>
        <Projects className="filler"/>
        <Skills className="filler"/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
