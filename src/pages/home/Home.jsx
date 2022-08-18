import React from "react";
import "./Home.scss";

function Home() {
    return (
        <>
            <img
                src="/images/avatar.png"
                className="avatar-image"
                alt="avatar"
            />
            <h4 className="title">Frontend Web Developer</h4>
            <h5>
                I develop and code beautiful, simple, robust interfaces and I
                love what I do{" "}
            </h5>
        </>
    );
}

export default Home;
