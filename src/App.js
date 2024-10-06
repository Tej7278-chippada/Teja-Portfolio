import "./App.css";
import { useState, useEffect } from "react";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initial check
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listener for changes
    const handleDarkModeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    // Cleanup listener on component unmount
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);



  return (
    <div className="App">
      <>
        <Navbar />

        <div className="container">
          <Hero />
          <Skills darkMode = {isDarkMode}/>
          <WorkExperience />
          <ContactMe />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
