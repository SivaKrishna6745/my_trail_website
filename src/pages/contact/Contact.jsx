import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import "./Contact.scss";

function Contact() {
    const firstName = useRef();
    const lastName = useRef();
    const contactNumber = useRef();
    const contactMessage = useRef();
    const contactEmail = useRef();
    function handleClick(e) {
        e.preventDefault();
        const subject = contactMessage.current.value;
        const body =
            "I am: " +
            firstName.current.value +
            " " +
            lastName.current.value +
            ";  My mobile number: " +
            contactNumber.current.value +
            "; My mail id: " +
            contactEmail.current.value;
        window.location = `mailto:krishnasiva6745@gmail.com?subject=${subject}&body=${body}`;
    }
    return (
        <div className="contact">
            <div>
                <img
                    src={process.env.PUBLIC_URL + "/images/contact.png"}
                    alt="contact"
                />
            </div>
            <form
                className="form"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleClick}
            >
                <div className="group">
                    <input
                        type="text"
                        ref={firstName}
                        placeholder="first name"
                        className="control"
                        name="first-name"
                    />
                </div>
                <div className="group">
                    <input
                        type="text"
                        ref={lastName}
                        placeholder="last name"
                        className="control"
                        name="last-name"
                    />
                </div>
                <div className="group">
                    <input
                        type="number"
                        ref={contactNumber}
                        placeholder="Enter your mobile number"
                        className="control"
                        name="contact-number"
                    />
                </div>
                <div className="group">
                    <input
                        type="email"
                        ref={contactEmail}
                        placeholder="Enter your mail"
                        className="control"
                        name="contact-mail"
                    />
                </div>
                <div className="group">
                    <textarea
                        cols="63"
                        rows="4"
                        ref={contactMessage}
                        placeholder="Enter your message"
                        className="control"
                        name="contact-message"
                    ></textarea>
                </div>
                <Button type="submit" variant="outline-primary">
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Contact;
