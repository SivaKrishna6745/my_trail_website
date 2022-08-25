import React from "react";
import "./Projects.scss";

function Projects() {
    return (
        <div className="projects">
            <div className="projects-image">
                <img src="images/projects.png" alt="projects worked" />
            </div>
            <ul className="projects-details">
                <li>
                    <h4>BUIC development and defect management</h4>
                    <p>
                        With the motive of "Banking should be made easier", we
                        developed a responsive reusable component for accessing
                        the account holder's overdraft details. we also added
                        accessibility for a better user experience for any user
                        either a normal user or physically challenged use like
                        visually impaired persons.
                    </p>
                </li>
                <li>
                    <h4>BUIC development and Accessibility</h4>
                    <p>
                        With the motive of "Banking should be made easier", we
                        developed a website for accessing the details of the
                        account holder's previous transaction data. we also
                        added accessibility for a better user experience for any
                        user either a normal user or physically challenged use
                        like visually impaired persons.
                    </p>
                </li>
                <li>
                    <h4>Accessibility for banking website</h4>
                    <p>
                        with the motive of "A website should be accessible to
                        any user", we enhanced a banking website with
                        accessibility for a better user experience for any user
                        either a normal user or physically challenged use like
                        visually impaired persons.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Projects;
