import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import githhubImage from './images/github-logo.png';
import discordImage from './images/discord-logo.png';
import lockImg from './images/lock-2.png';
import gitImg from './images/git.png';
import arrowImg from './images/arrow-sq.png';
import arrowBlackImg from './images/arrow.png';
import heartImg from './images/heart1.png';
import flagImg from './images/flag.png';


function Main() {

    return (
        <div className="container-fluid  ccc  d-flex flex-column justify-content-center pb-5">
            <div className="row solut-row">
                <div className="col-12 solut d-flex justify-content-start align-items-center">
                    <div className="solution-div d-flex align-items-center">
                        <span className='solution-span'>Solution</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 img-col d-flex justify-content-center position-relative">
                    <div className="overlay">

                    </div>
                    <div className="spacer-div">
                        <p className='submitted-text'>Submitted  about 1 year ago</p>
                        <h1 className="React">React, axios</h1>
                        <span className="ax-re">#axios #react</span>
                        <div className="mako-img d-flex flex-row">
                            <img src={gitImg} style={{ height: '50px', borderRadius: '50%' }} alt="github" />
                            <div className="makogit d-flex flex-column">
                                <span claassName='mk-1'>mako542b.370</span>
                                <span claassName='mk'>@mako542b</span>
                            </div>
                        </div>
                    </div>
                    <div className="red-btn-div  pb-5 d-flex flex-row  justify-content-between ">
                        <div className="btn-big-div">
                            <button className='btn-red mr-4'>PREVIEW SITE
                                <img src={arrowImg} style={{ paddingLeft: '6px' }} alt="github" />
                            </button>
                            <button className='btn-white'>VIEW CODE
                                <img src={arrowBlackImg} style={{ height: '20px', paddingLeft: '10px' }} alt="github" />
                            </button>
                        </div>

                        <div className="btn-small-div">
                            <button className='btn-sm1 mr-4'>
                                <img src={heartImg} style={{ paddingLeft: '6px', paddingRight: '8px' }} alt="github" />2
                            </button>
                            <button className='btn-sm2'>
                                <img src={flagImg} style={{ height: '27px', paddingRight: '10px' }} alt="github" />0
                            </button>
                        </div>

                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-12">

                </div>
            </div>
            <div className="row  pt-4 position-relative">
                <div className="col-12 d-flex justify-content-center pb-5 pt-5">
                    <div className="circle">
                        <span className='span-q'>?</span>
                    </div>
                    <div className="mm3 d-flex gap-3 flex-column position-relative ">
                        <h2 className="mako" >mako542b’s questions for the community</h2>

                        <p className='Ihave'>I've changed the design a bit to add a functionality, e.g. sorting the countries.
                            Code only uses the main api end-point - i've figured it's better to make the api call
                            once and play with the whole data inside locally in the program, than making new
                            requests - it was slightly lagging.</p>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 d-flex flex-column justify-content-center gap-5 mb-5 ">
                    <h2 className='mako'>Community feedback</h2>
                    <div className="please d-flex flex-column gap-3  position-relative" >
                        <div className="circle-gray">
                            <img src={lockImg} style={{ height: '50px', paddingRight: '8px' }} alt="github" />
                        </div>
                        <h3 className='pl-h3'>Please log in to post a comment</h3>
                        <div className="div-btn-main3  d-flex flex-row justify-content-center align-items-center ">
                            <div className="btn-div d-flex mt-1">
                                <button className='btn-g'>LOG IN WITH GITHUB</button>
                                <img src={githhubImage} style={{ height: '30px', paddingRight: '8px' }} alt="github" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-5 mt-5">
                <div className="col-12 blue d-flex justify-content-center flex-column">
                    <div className="img-discord-div d-flex justify-content-center">
                        <img src={discordImage} style={{ height: '50px', paddingRight: '8px' }} alt="github" />
                    </div>

                    <h2 className="text-import">Join our Discord community</h2>
                    <p className='text-join'>Join thousands of Frontend Mentor community members  taking the challenges,<br />
                        sharing resources, helping each other, and chatting about all things front-end!</p>
                    <div className="btnd-div d-flex justify-content-center pt-4">
                        <button className='btn-discord'>Join our Discord</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Main;
