import logo from './logo.svg';
import './app.scss';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio /Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return <div>

    <section id={"Homepage"}>
      <Navbar/>
      <Hero/>
    </section>
    <section id={"Contact me"}><Contact id={"About me"}/></section>
    <section id={"Projects"}> <Portfolio/></section>

  </div>
}

export default App;
