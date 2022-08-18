import React from "react";
import { Container, Nav, Navbar as Navb } from "react-bootstrap";
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
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navb.Collapse>
                </Container>
            </Navb>
        </>
    );
}

export default Header;
