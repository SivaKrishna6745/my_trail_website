import React from "react";
import { Button } from "react-bootstrap";
import "./Contact.scss";

function Contact() {
    // function handleClick(e) {
    //     e.preventDefault();
    //     window.location = "mailto:krishnasiva6745@gmail.com";
    // }
    return (
        <form
            className="form-group"
            action="mailto:krishnasiva6745@gmail.com"
            method="POST"
            enctype="multipart/form-data"
        >
            <div className="form-control">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
            </div>
            <div className="form-control">
                <label htmlFor="phnno">Mobile Number:</label>
                <input type="number" id="phnno" />
            </div>
            <div className="form-control">
                <label htmlFor="message">Message:</label>
                <textarea id="message" cols="100" rows="5"></textarea>
            </div>
            <Button variant="outline-primary">Submit</Button>
        </form>
    );
}

export default Contact;
