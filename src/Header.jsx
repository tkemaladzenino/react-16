import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import "./css/style.css";

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import frontendImage from './images/logo-fro.png';
import githhubImage from './images/github-logo.png';

function Header() {

    return (
        <div className='container-fluid'>
            <div className="row ">
                <div className=" col-12 div1 ">
                    <FontAwesomeIcon icon={faBriefcase} className="iconBr" />
                    <p className="Text1" style={{ color: 'white', paddingTop: '10px' }} >Looking to hire developers?</p>
                    <a href="facebook.com" className="Text2" style={{ color: 'white', textDecoration: 'underline', paddingBottom: '8px' }}>Visit our Hiring Platform</a>
                </div>
            </div>


            <div className="row c-f-h pb-3">
                <div className="row">
                    <div className="col-12 aaa d-flex flex-row justify-content-between pt-4 pb-4">
                        <div className="img-div pt-2">
                            <img src={frontendImage} alt="Frontend" />
                        </div>
                        <div className="navbar-btn-div d-flex flex-row">
                            <Navbar expand="lg" variant="light" bg="light-blue lighten-4">
                                <Navbar.Toggle aria-controls="navbarSupportedContent1" />
                                <Navbar.Collapse id="navbarSupportedContent1">
                                    <Nav className="mr-auto">
                                        <Nav.Link className='nav-link-item' href="#">CHALLENGES</Nav.Link>
                                        <Nav.Link className='nav-link-item' href="#">SOLUTIONS</Nav.Link>
                                        <Nav.Link className='nav-link-item' href="#">ARTICLES</Nav.Link>
                                        <Nav.Link className='nav-link-item' href="#">RESOURCES</Nav.Link>
                                        <Nav.Link className='nav-link-item' href="#">UNLOCK PRO</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <div className="ul-btn-div d-flex flex-row align-items-center">
                                <div className="btn-div ml-auto d-none d-lg-flex">
                                    <button className='btn-g'>LOG IN WITH GITHUB</button>
                                    <img src={githhubImage} style={{ height: '30px', paddingRight: '8px' }} alt="github" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>



    )
}

export default Header;





