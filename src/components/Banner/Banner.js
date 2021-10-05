import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h1 className="title">BE THE ACTOR <br /> STAR AND SHINE</h1>
                        <p className="text text-center mt-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam neque delectus in molestiae laudantium. Ut voluptate voluptatibus placeat optio cum!
                        </p>
                        <button className="mt-3 about-btn">About us</button>
                    </div>
                    <div className="col-md-6">
                        {/* <div ></div> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;