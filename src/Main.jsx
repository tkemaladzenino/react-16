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
import smallImg from './images/img-main-sm.png';

import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Main() {
    const [countries, setCountries] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [widthChange, setWidthChange] = useState(0);
    const [isMouseOverArrows, setIsMouseOverArrows] = useState(false);



    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;

        const newWidthChange = event.clientX - startX;
        const rowBackgrWidth = document.querySelector('.row-backgr').offsetWidth;
        const rowFitWidth = document.querySelector('.row-fit').offsetWidth;


        const maxWidthChange = Math.min(rowBackgrWidth - rowFitWidth, Math.max(-widthChange, newWidthChange));
        setWidthChange(maxWidthChange);
    };




    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


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
                        <div className="red-btn-div  pb-5 d-flex flex-row  justify-content-between  w-100">
                            <div className="btn-big-div ">
                                <button className='btn-red mr-4 '>PREVIEW SITE
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
                    <div className="spacer-div">
                        <p className='submitted-text'>Submitted  about 1 year ago</p>
                        <h1 className="React">React, axios</h1>
                        <span className="ax-re">#axios #react</span>
                        <div className="mako-img d-flex flex-row">
                            <img src={gitImg} style={{ height: '60px', borderRadius: '50%' }} alt="github" />
                            <div className="makogit d-flex flex-column">
                                <span claassName='mk-1'>mako542b.370</span>
                                <span claassName='mk'>@mako542b</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-4" style={{ backgroundColor: '#ffffff' }}>
                <div className="col-12 col-md-3">
                    <img src={smallImg} className="img-fluid" style={{ paddingLeft: '100px' }} alt="github" />
                </div>
                <div className="col-12 col-md-6 pt-1">
                    <p className='text-this'>This is a solution for...</p>
                    <p className="rest">REST Countries API with color theme switchers</p>
                    <div className="h-s-4-div d-flex flex-row">
                        <div className="ul-div">
                            <ul className='html'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                                <li>API</li>
                            </ul>
                        </div>
                        <div className="advanced-4">
                            <span className='number-4'>4</span>
                            <span className='advanced'>ADVANCED</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 pt-3">
                    <button className="btn-chall-div">View challenge</button>
                </div>
            </div>

            <div className="row pt-5" style={{ backgroundColor: '#fafafa' }}>
                <div className="col-12">
                    <h2 className='Design pt-5 pb-4'>Design comparison</h2>
                </div>
            </div>

            {/*---------------flag -----------*/}

            <div className="row flag-div justify-content-center" style={{ backgroundColor: '#ffffff' }}>
                <div className="col-2 solution" style={{ textAlign: 'center' }}>
                    <span>SOLUTION</span>
                </div>
                <div className="col-8 get-flags pt-5 ">
                    <div className="row row-backgr position-relative">
                        {countries.slice(0, 8).map((country, index) => (
                            <div key={index} className="col-md-3">
                                <div className="country-flag text-center mb-4  shadow border" style={{ height: '200px' }}>
                                    <img src={country.flags.png} style={{ width: '160px', height: '120px' }} alt={country.name.common} />
                                    <span style={{ marginTop: '10px', display: 'block' }}>{country.name.common}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row-fit */}

                    <div
                        className="row row-fit position-absolute pt-5"
                        style={{
                            bottom: '0',
                            backgroundColor: 'white',
                            border: '1px solid lightgray',
                            width: `calc(100% - ${widthChange}px)`,
                            transform: `translateX(${widthChange}px)`,
                            height: '100%',
                            overflow: 'hidden',
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                    >
                        <div
                            className="red-circle"
                            style={{
                                position: 'absolute',
                                top: '53% ',
                                left: '1%',
                                zIndex: '5',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'red',
                                cursor: isMouseOverArrows ? 'pointer' : 'auto',
                            }}
                        ></div>

                        {countries.slice(8, 16).map((country, index) => (
                            <div key={index} className="col-md-3">
                                <div className="country-flag text-center mb-4 shadow border" style={{ height: '200px' }}>
                                    <img src={country.flags.png} style={{ width: '160px', height: '120px' }} alt={country.name.common} />
                                    <span style={{ marginTop: '10px', display: 'block' }}>{country.name.common}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-2 solution" style={{ textAlign: 'center' }}>
                    <span>DESIGN</span>
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
                    <div className="please d-flex flex-column gap-3 position-relative" >
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
        </div >
    )
}

export default Main;
