import React from "react";
import { Container, Nav, Navbar as Navb, Button } from "react-bootstrap";
import "./Header.scss";

function Header() {
    return (
        <>
            <Navb>
                <Container>
                    <Navb.Brand href="#home">MSK</Navb.Brand>
                    <Navb.Toggle aria-controls="navbar-nav" />
                    <Navb.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/my_trail_website">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/work">Work</Nav.Link>
                        </Nav>
                    </Navb.Collapse>
                    <Nav.Link href="/contact">
                        <Button variant="outline-success btn-custom">
                            Contact Me
                        </Button>
                    </Nav.Link>
                </Container>
            </Navb>
        </>
    );
}

export default Header;
