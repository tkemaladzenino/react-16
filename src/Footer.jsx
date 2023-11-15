import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import frontendImage from './images/logo-fro.png';
import socialImage from './images/social-4.png';
function Footer() {

    return (
        <footer >
            <div className="container-fluid pt-2">
                <div className="row pt-5">
                    <div className="col-12 d-flex flex-row justify-content-between align-items-center">
                        <div className="imgf-div pt-2">
                            <img src={frontendImage} alt="Frontend" />
                        </div>
                        <div className="imgf-div pt-2">
                            <img src={socialImage} alt="Frontend" />
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-4 d-flex flex-column">
                        <span className="blue-text">Stay up to date</span>
                        <span className="">with new challenges, featured solutions,
                            selected articles and our latest news</span>
                        <div className="inputbtn-div">
                            <input type="email" className="email" placeholder="Email@example.com"></input>
                            <button className="btn-subscribe ml-3">SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className="col-2">
                        <h3 className='FrMentor'>Frontend Mentor</h3>
                        <ul className='ul-f'>
                            <li>Unlock Pro</li>
                            <li>Contact us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3 className='FrMentor'>Explore</h3>
                        <ul className='ul-f'>
                            <li>Challenges</li>
                            <li>Solutions</li>
                            <li>Articles</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3 className='FrMentor'>Community</h3>
                        <ul className='ul-f'>
                            <li>Discord</li>
                            <li>Guidelines</li>

                        </ul>
                    </div>
                    <div className="col-2">
                        <h3 className='FrMentor'>For companies</h3>
                        <ul className='ul-f'>
                            <li>Hire developers</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 r-ff d-flex flex-row justify-content-between pb-3 pt-2">
                        <p class="frontM">© Frontend Mentor 2019 - 2023 </p>
                        <ul class="ul-foot">
                            <li>Terms</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                            <li>License</li>
                        </ul>
                    </div>

                </div>
            </div>

        </footer >

    )
}

export default Footer;
