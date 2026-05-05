import Hero from "./Components/Hero";
import Links from "./Components/Links";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { data } from "./data";
import "./App.css";
function App() {
  return (
    <div>
      <Hero
        name={data.name}
        role={data.role}
        bio={data.bio}
        avatar={data.avatar}></Hero>
      <Links links={data.links}></Links>
      <Skills skills={data.skills}></Skills>
      <Projects projects={data.projects}></Projects>
    </div>
  );
}

export default App;
