// import * as THREE from "three";

import AboutMe from "./main/abourMe";
import Navbar from "./main/navbar";
import Home from "./main/home";
import Summary from "./main/summary";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Home />
            <Summary />
            <AboutMe />
        </div>
    );
}

export default App;
