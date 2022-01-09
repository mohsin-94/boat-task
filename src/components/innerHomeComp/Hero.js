import React from 'react'
import Banner from '../../assets//banner.png'
function Hero() {
    return (
        <section>
            <div className="container hero">
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">
                        {/* Image */}
                        <img src={Banner} className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="Welcome To MyJobs"/>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1">
                        {/* Heading */}
                        <h1 className="display-5 text-center text-md-start color-white mb-4">
                            <strong>Welcome to <br/>My <span className="text-primary">Jobs</span></strong>
                        </h1>
                        {/* Button */}
                        <form className="d-flex">
                            <button className="btn btn-outline-custom btn-custom" type="button">Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
