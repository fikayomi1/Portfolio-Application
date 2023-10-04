import './App.css';
import React from 'react';
import Nav from "./components/Navigation/Navigation.js"
import Home from "./components/Home/Home.js"
import About from "./components/About/About.js"
import Skills from './components/Skills/Skills';
import Project from "./components/Projects/Project.js"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


function App() {
    return(<>
        <Nav />
        <Home />
        <About/>
        <Skills/>
        <Project />
        <Contact />
        <Footer />
        </>
        )
}


// ReactDOM.render(<App />, document.getElementById("root"));
export default App;