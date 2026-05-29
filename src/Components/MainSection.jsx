import React from "react";

const MainSection = () => {
    return(
        <>
        <div className="hero border-1 pb-3">
            <div className="card bg-dark text-white border-9 mx-3">
                <img src="/assets/react.svg.jpg" className="card-img img-fluid" alt="Background" height={550} />
                <div className="card-img-overlay d-flex align-items-center">
                    <div className="container">
                        <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
                        <p className="card-text fs-5 d-none d-sm-block">
                           this is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default MainSection;