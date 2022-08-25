import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.scss";

function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <FaFacebookF className="social-icons" />
                <BsTwitter className="social-icons" />
                <BsGithub className="social-icons" />
                <HiOutlineMail className="social-icons" />
            </div>
            <div className="copyright">
                <h5>copyright&copy; siva krishna -- 2022</h5>
            </div>
        </div>
    );
}

export default Footer;
