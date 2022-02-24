// import * as THREE from "three";

import AboutMe from "./main/abourMe";
import Navbar from "./main/navbar";
import Presentation from "./main/presentation";
import Summary from "./main/summary";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Presentation />
            <Summary />
            <AboutMe />
        </div>
    );
}

export default App;
