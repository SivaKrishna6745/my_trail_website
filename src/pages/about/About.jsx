import React from "react";
import "./About.scss";

function About() {
    return (
        <div className="about">
            <div className="web-image">
                <img src="/images/web.png" alt="frontend" />
            </div>
            <div className="details">
                <h1 className="name">hi, I am Siva Krishna Mangalampalli</h1>
                <h2 className="title">I am a Frontend Web Developer</h2>
                <h3 className="desc">
                    I began my journey as a web UI developer 4 years ago. I am a
                    ReactJS frontend professional UI developer. I’ve developed
                    responsive interfaces using ReactJS with on-time delivery.
                    During this course of time, I learned many things like team
                    working, collaboration, communication, time management.
                </h3>
            </div>
        </div>
    );
}

export default About;
