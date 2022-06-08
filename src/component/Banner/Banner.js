import React from 'react';
import image from '../../assests/portfolio.png';
import './Banner.css';

const Banner = () => {
    
    return (
        <div className='banner'>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 banner-left">
                        <h1 className='text-white'>Hello! I’m</h1>
                        <h1 className='text-white'>Shariar Hossain</h1>
                        <p>Junior Web Developer</p>
                        <div>
                            <button className="banner-btn mt-4">
                            <a target="_blank" href="https://drive.google.com/file/d/1I2mWz_HNXcJWci1Jvq2dL3_V7CCNuM0r/view?usp=sharing" download rel="noreferrer">Get Resume</a>
                            </button>
                        </div>
                    </div>
                    <div  className="col-md-6">
                        <img className='img-fluid ' src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;