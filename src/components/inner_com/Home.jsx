import React from "react";
import './Home.css';

const Home = () => {
    return(
        <section id="home" className="home_section">
        <p className="greet">
            Hi, my name is
        </p>
        <h1 className="heading_1">Vivanshu</h1>
        <h1 className="heading_2">i build thing for web</h1>

        <p className="desc"></p>
        <a href="#work">
            <button className="btn">Check out my work!</button>
        </a>
        </section>
    )
}
export default Home;