import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import "./Contact.scss";

function Contact() {
    const contactName = useRef();
    const contactNumber = useRef();
    const contactMessage = useRef();
    function handleClick(e) {
        e.preventDefault();
        const subject = contactMessage.current.value;
        const body =
            "I am: " +
            contactName.current.value +
            ";  My mobile number: " +
            contactNumber.current.value;
        window.location = `mailto:krishnasiva6745@gmail.com?subject=${subject}&body=${body}`;
    }
    return (
        <form
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleClick}
        >
            <div className="form-control">
                <label htmlFor="name">Name:</label>
                <input type="text" ref={contactName} name="contact-name" />
            </div>
            <div className="form-control">
                <label htmlFor="phnno">Mobile Number:</label>
                <input
                    type="number"
                    ref={contactNumber}
                    name="contact-number"
                />
            </div>
            <div className="form-control">
                <label htmlFor="message">Message:</label>
                <textarea
                    cols="100"
                    rows="5"
                    ref={contactMessage}
                    name="contact-message"
                ></textarea>
            </div>
            <Button type="submit" variant="outline-primary">
                Submit
            </Button>
        </form>
    );
}

export default Contact;
