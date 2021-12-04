import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Fade } from 'react-bootstrap';
import fia from '../../assets/img/fia_logo.png';
import logoTv from '../../assets/img/f1-tv-logo.png';
import logo from '../../assets/img/f1_logo.svg';
import "../Navbar/Navbar.css";
import { FaUser } from 'react-icons/fa';
import { MdKeyboardArrowDown } from '@react-icons/all-files/md/MdKeyboardArrowDown';



const Navigation = () => {


    return (
        <>
            <div className="Navbar fixed-top">
                <Navbar  bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home"><img className="fia" src={fia}></img> &nbsp;&nbsp; |</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#F1™">  F1™</Nav.Link>
                        </Nav>
                        <Nav className="mr-auto menu1">
                            <Nav.Link href="#AUTENTICS">AUTENTICS</Nav.Link>
                            <Nav.Link href="#STORE">STORE</Nav.Link>
                            <Nav.Link href="#TICKETS">TICKETS</Nav.Link>
                            <Nav.Link href="#HOSPITALITY">HOSPITALITY</Nav.Link>
                            <Nav.Link href="#EXPERIENCES">EXPERIENCES</Nav.Link>
                            <Nav.Link href="#logotv"> | &nbsp; <img className="logoTv" src={logoTv}></img> &nbsp; | </Nav.Link>
                            <Button variant="secondary"> <FaUser /> Sing in</Button>
                                &nbsp;&nbsp;&nbsp;
                            <Button variant="outline-danger">Subscribe</Button>
                        </Nav>
                    </Container>
                </Navbar>
                <Navbar bg="danger" variant="dark">
                    <Container>
                        <Navbar.Brand className="navBarRed" href="#home"><img className="logo" src={logo}></img></Navbar.Brand>
                        <Nav className="me-auto">
                            <Button className="buttonMenu" variant="danger">Shendule <MdKeyboardArrowDown /></Button>
                            <Button className="buttonMenu" variant="danger">Standings <MdKeyboardArrowDown /></Button>
                            <Button className="buttonMenu" variant="danger">Drivers <MdKeyboardArrowDown /></Button>
                            <Button className="buttonMenu" variant="danger">Teams <MdKeyboardArrowDown /></Button>
                            <Button className="buttonMenu" variant="danger">Gaming <MdKeyboardArrowDown /></Button>



                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}


export default Navigation
