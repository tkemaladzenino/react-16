import React from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import frontendImage from './images/logo-fro.png';
import socialImage from './images/social-4.png';

function Footer() {
    return (
        <footer>
            <div className="container-fluid pt-2 px-md-5">
                <div className="row pt-5">
                    <div className=" col-6 col-sm-12 col-md-12 imgf-div pt-2 d-flex ">
                        <img src={frontendImage} alt="Frontend" />
                    </div>
                    <div className=" col-6 col-sm-12 col-md-12 imgsoc-div pt-2 ml-auto ">
                        <img src={socialImage} alt="Social" />
                    </div>
                </div>
                <div className="row pt-5 pb-5">
                    <div className="col-12 col-md-4 d-flex flex-column">
                        <span className="blue-text">Stay up to date</span>
                        <span className="">with new challenges, featured solutions, selected articles, and our latest news</span>
                        <div className="inputbtn-div">
                            <input type="email" className="email" placeholder="Email@example.com" />
                            <button className="btn-subscribe ml-3">SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <h3 className='FrMentor'>Frontend Mentor</h3>
                        <ul className='ul-f'>
                            <li>Unlock Pro</li>
                            <li>Contact us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h3 className='FrMentor'>Explore</h3>
                        <ul className='ul-f'>
                            <li>Challenges</li>
                            <li>Solutions</li>
                            <li>Articles</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h3 className='FrMentor'>Community</h3>
                        <ul className='ul-f'>
                            <li>Discord</li>
                            <li>Guidelines</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h3 className='FrMentor'>For companies</h3>
                        <ul className='ul-f'>
                            <li>Hire developers</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 r-ff d-flex flex-row align-items-center justify-content-between pb-2 pt-3">
                        <p className="frontM">© Frontend Mentor 2019 - 2023 </p>
                        <ul className="ul-foot">
                            <li>Terms</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                            <li>License</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
