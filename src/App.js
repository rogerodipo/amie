import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import ContactForm from './components/ContactForm/ContactForm'
import cv from "./assets/cv.png";
import juu from "./assets/juu.png";
import panda from "./assets/panda.png";
import alex from "./assets/alexis.png";
import matt from "./assets/matt.png";
import consulting from "./assets/consulting.jpg";
import training from "./assets/training.jpg";
import webinar from "./assets/webinars.jpg";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
