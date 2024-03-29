import AboutMe from "./main/abourMe";
import Navbar from "./main/navbar";
import Home from "./main/home";
import Summary from "./main/summary";
import Contact from "./main/contact";
import Experience from "./main/summary/experience";
import "./sass/main.scss";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Home />
            <Summary />
            <Experience />
            <AboutMe />
            <Contact />
        </div>
    );
}

export default App;
